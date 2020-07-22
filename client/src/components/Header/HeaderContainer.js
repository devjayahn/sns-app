import React, { Component } from 'react';
import HeaderPresenter from './HeaderPresenter';

class HeaderContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          profile: ''          
        }
      }
      _callApi = async () => {                
        const response = await fetch('/api/'+this.props.match.params.id)
        const body = response.json();
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
                this.state.profile ? this.state.profile.map(p => {return(<HeaderPresenter user_id={p.user_id} profile_image={p.profile_image} introduce={p.introduce} />)})             
              : "user not exist"} 
            </div>)
    }
}

export default HeaderContainer;