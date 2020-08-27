import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { post } from 'axios';
import DialogActions from '@material-ui/core/DialogActions';
import { withRouter } from 'react-router-dom';


class Follow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            nickname: '',            
            open: false
        }
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
        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    Add a new feed
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Add a new feed</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} id="raised-button-file" type="file" accept="image/*" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="primary" component="span" name="file">
                                {this.state.fileName === "" ? "Select image" : this.state.fileName}
                            </Button>
                        </label><br/>
                       <TextField label="ID" type="text" name="user_id" value={this.state.user_id} onChange={this.handleValueChange} /><br/>
                       <TextField label="CONTEXT" type="text" name="context" value={this.state.context} onChange={this.handleValueChange} /><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>Add</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>Cancel</Button>                        
                    </DialogActions>
                </Dialog>
            </div>            
        )
    }
}