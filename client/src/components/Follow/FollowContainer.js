import React, { Component } from 'react';
import FollowPresenter from './FollowPresenter'

class FollowContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      follow: ''   
    }
  }

  _callApi = async () => {
    console.log(this.props.id);
    const response = await fetch('/api/follow/'+this.props.id)
    const body = response.json();
    console.log(body);
    return body;
  }

  
  componentDidMount() {
    this._callApi()
      .then(res => this.setState({follow : res}))    
      .catch(err => console.log(err));    
  }

  
    render() {    
     return(
       <div>
        {
          this.state.follow ? this.state.follow.map((f, idx) => {return(<FollowPresenter cnt={f.cnt} to_user={f.to_user} key={idx} />)}
           ): ""}         
        </div>       
        )
    }
}

export default FollowContainer;