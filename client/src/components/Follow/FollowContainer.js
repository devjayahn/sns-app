import React, { Component } from 'react';
import FollowPresenter from './FollowPresenter'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";


class FollowContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      follow: '',
      open : false
    }
  }

  _callApi = async () => {
    console.log(this.props.id);
    const response = await fetch('/api/follow/'+this.props.id)
    const body = response.json();    
    return body;
  }

  
  componentDidMount() {
    this._callApi()
      .then(res => this.setState({follow : res}))    
      .catch(err => console.log(err));    
  }

  handleClickOpen = () => {        
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({           
            open: false
        })
    }   

    
    
    render() {    
      const count = this.state.follow.length;
      const { classes } = this.props;      
     return(
       <div>
       <span onClick={this.handleClickOpen}>Follow {count}</span>
        {
          this.state.follow ? this.state.follow.map((f, idx) =>
          <div>            
          <Dialog open={this.state.open} onClose={this.handleClose}>
                  <DialogTitle>Follow</DialogTitle>
                  <DialogContent>                        
                    {f.to_user}             
                  </DialogContent>                 
                  <DialogActions>                        
                      <Button variant="outlined" color="primary" onClick={this.handleClose}>Exit</Button>                        
                  </DialogActions>
              </Dialog>
          </div>
           ): ""}         
        </div>       
        )
    }
}

export default FollowContainer;