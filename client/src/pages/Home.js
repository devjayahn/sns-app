import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const style = theme => ({
    root: {
    '& > *': {
        margin: theme.spacing(1),
        width: '25ch',        
    },
},
    div: {
      width: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      marginTop: '5px',
      display: 'grid',
      backgroundColor: 'white',
      padding: '10px'
    },
    link: {
        textDecoration: 'none',
        color: '#0095f6'
    }
});
 
class Home extends Component {
    render() {
        const { classes } = this.props;

        return (
        <div>
        <div className={classes.div}>
            <h3>Instagram</h3>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="id" label="ID" /><br/>
            <TextField id="pw" label="Password" /><br/>        
        </form>
        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>Login</Button>
        </div>
         <div className={classes.div}>
         <p>계정이 없으신가요?<Link to="#" className={classes.link}>가입하기</Link></p>
         </div>
         </div>
        );
    }
}

export default (withStyles)(style)(Home);
  