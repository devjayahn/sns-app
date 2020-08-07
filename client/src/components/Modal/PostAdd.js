import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { post } from 'axios';
import DialogActions from '@material-ui/core/DialogActions';
import { withRouter } from 'react-router-dom';

const style = theme => ({
    hidden: {
        display: 'none'
    }
});

class PostAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            user_id: '',
            context: '',
            fileName: '',
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
            file: null,
            user_id: '',
            context: '',
            fileName: '',
            open: false
        })
    } 

    handleNext = () => {                      
        this.props.history.push('/feed/'+this.state.user_id);       
    }
        
    handleFormSubmit = (e) => {
        e.preventDefault()             
        this.addPost()
            .then((response) => {
                console.log(response.data);
            })
        this.handleNext();
         this.setState({
           file: null,
           user_id: '',
           context: '',
           fileName: '',
           open: false
        })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName : e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        
    }

    addPost = () => {
        const url = '/api/addFeed'
        const formData = new FormData();
        formData.append('feed_image', this.state.file);
        formData.append('user_id', this.state.user_id);
        formData.append('context', this.state.context);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render() {
        const { classes } = this.props;
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

export default (withRouter)((withStyles)(style)(PostAdd));