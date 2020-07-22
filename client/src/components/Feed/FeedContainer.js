import React, { Component } from 'react';
import FeedPresenter from './FeedPresenter'

class FeedContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feeds: '',
      profile_image: ''
    }
  }

  _callApi = async () => {
    const response = await fetch('/api/feed')
    const body = response.json();
    return body;
  }

  _callApiId = async () => {
    const response2 = await fetch('/api/feed/id')
    const body2 = response2.json();
    console.log(body2);
    return body2;
  }

  componentDidMount() {
    this._callApi()
      .then(res => this.setState({feeds : res}))    
      .catch(err => console.log(err));
    this._callApiId()
      .then(res => this.setState({profile_image : res}))
      .catch(err => console(err));
  }

  
    render() {    
     return(
       <div>
        {
          this.state.feeds ? this.state.feeds.map((f, idx) => {return(<FeedPresenter user_id={f.user_id} feed_image={f.feed_image} context={f.context} likeit={f.likeit} create_at={f.create_at} profile_image={this.state.profile_image[idx]} />)}
           ): ""}         
        </div>       
        )
    }
}

export default FeedContainer;