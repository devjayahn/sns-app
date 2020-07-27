import React, { Component } from 'react';
import GridPresenter from './GridPresenter';

class GridContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          post: ''   
        }
      }

      _stateRefresh = () => {
        this.setState({
          post:''
        });
        this._callApi()
          .then(res => this.setState({post : res}))    
          .catch(err => console.log(err));  
      }

      _callApi = async () => {
        const response = await fetch('/api/getPost/'+this.props.id)
        const body = response.json();        
        return body;
      }
    
      
      componentDidMount() {
        this._callApi()
          .then(res => this.setState({post : res}))    
          .catch(err => console.log(err));    
      }
    
      
        render() {    
         return(
           <div>
            {
              this.state.post ? this.state.post.map((p, idx) => {return(<GridPresenter feed_image={p.feed_image} likeit={p.likeit} key={idx} />)}
               ): ""}         
            </div>       
            )
        }
    }


export default GridContainer;