import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class FollowingPresenter extends Component {
    
    state = { open : false };

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
        return(
            <div>
            <span onClick={this.handleClickOpen}>Follower {this.props.cnt}</span>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Follower</DialogTitle>
                    <DialogContent>                        
                        <div><Link to={location => `/${this.props.from_user}`}>{this.props.from_user}</Link></div>
                    </DialogContent>
                    <DialogActions>                        
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>Cancel</Button>                        
                    </DialogActions>
                </Dialog>
            </div>
        )


    }
}

export default FollowingPresenter;