import React, { Component } from 'react';
import ProfilePresenter from './ProfilePresenter'

class ProfileContainer extends Component {
    
    constructor(props) {
      super(props);
      this.state = {        
        profile: ''
      }
    }

    _callApiId = async () => {
        const response2 = await fetch('/api/feed/id')
        const body = response2.json();        
        return body;
    }
    
    componentDidMount() {
    this._callApi()
      .then(res => this.setState({profile : res}))    
      .catch(err => console.log(err));
    }

    render() {    
        return(
          <div>
           {
             this.state.profile ? this.state.profile.map((p, idx) => {return(<ProfilePresenter user_id={p.user_id} profile_image={p.profile_image} key={idx} />)}
              ): ""}         
           </div>       
           )
       }
   }

export default ProfileContainer;


