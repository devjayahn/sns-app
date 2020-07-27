import React, { Component } from 'react';
import MyFeedPresenter from './MyFeedPresenter'

class MyFeedContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feeds: ''   
    }
  }

  _callApi = async () => {
    const response = await fetch('/api/feed/'+this.props.match.params.id)
    const body = response.json();    
    return body;
  }

  
  componentDidMount() {
    this._callApi()
      .then(res => this.setState({feeds : res}))    
      .catch(err => console.log(err));    
  }

  
    render() {    
     return(
       <div>
        {
          this.state.feeds ? this.state.feeds.map((f, idx) => {return(<MyFeedPresenter user_id={f.user_id} feed_image={f.feed_image} context={f.context} likeit={f.likeit} create_at={f.create_at} profile_image={f.profile_image} key={idx} />)}
           ): ""}         
        </div>       
        )
    }
}

export default MyFeedContainer;