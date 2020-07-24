import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

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

    addPost = () => {
        const url = '/api/addFeed'
        const formData = new FormData();
        
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
                       <TextField label="ID" type="text" name="user_id" value={this.state.user_id} /><br/>
                       <TextField label="CONTEXT" type="text" name="context" value={this.state.context} /><br/>
                    </DialogContent>
                </Dialog>
            </div>            
        )
    }
}

export default (withStyles)(style)(PostAdd);