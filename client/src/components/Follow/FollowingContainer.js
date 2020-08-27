import React, { Component } from 'react';
import FollowingPresenter from './FollowingPresenter'

class FollowingContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      following: ''   
    }
  }

  _callApi = async () => {    
    const response = await fetch('/api/following/'+this.props.id)
    const body = response.json();
    console.log(body);
    return body;
  }

  
  componentDidMount() {
    this._callApi()
      .then(res => this.setState({following : res}))    
      .catch(err => console.log(err));    
  }

  
    render() {    
     return(
       <div>
        {
          this.state.following ? this.state.following.map((f, idx) => {return(<FollowingPresenter cnt={f.cnt} from_user={f.from_user} key={idx} />)}
           ): ""}         
        </div>       
        )
    }
}

export default FollowingContainer;