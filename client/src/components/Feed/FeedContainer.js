import React, { Component } from 'react';
import FeedPresenter from './FeedPresenter'

class FeedContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feeds: ''
    }
  }

  _callApi = async () => {
    const response = await fetch('/api/feed')
    const body = response.json();
    return body;
  }

  componentDidMount() {
    this._callApi()
      .then(res => this.setState({feeds : res}))    
      .then(console.log('done'))   
      .catch(err => console.log(err));
  }

  
    render() {    
     return(
       <div>
        {
          this.state.feeds ? this.state.feeds.map(f => {return(<FeedPresenter user_id={f.user_id} feed_image={f.feed_image} context={f.context} likeit={f.likeit} create_at={f.create_at} />)})             
        : ""} 
        </div>       
        )
    }
}

export default FeedContainer;