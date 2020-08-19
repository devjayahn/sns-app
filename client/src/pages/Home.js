import React, { Component, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import { withRouter } from "react-router-dom";


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

function Home(props) {
    
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();
    const onIdHandler = (e) => {
        setId(e.currentTarget.value);    
    };
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const body = {
            id: Id,
            password: Password,
        };
        dispatch(loginUser(body))
        .then((res) => {
            console.log("ID + password" + res);
            if(res.payload.loginSuccess) {
                this.props.history.push("/");
            } else {
                alert(res.payload.message);
            }
        })
        .catch((err) => {
            console.log(err)
        });
    };

        return (
            <div>
        <div className={props.classes.div}>
            <h3>Instagram</h3>
        <form className={props.classes.root} onSubmit={onSubmitHandler} noValidate autoComplete="off">
            <TextField id="id" label="ID" value={Id} onChange={onIdHandler} /><br/>
            <TextField id="pw" label="Password" value={Password} onChange={onPasswordHandler} /><br/>        
        </form>
        <Button variant="contained" color="primary" onClick={onSubmitHandler}>Login</Button>
        </div>
         <div className={props.classes.div}>
         <p>계정이 없으신가요?<Link to="#" className={props.classes.link}>가입하기</Link></p>
         </div>
         </div>
        );
    }


export default withRouter((withStyles)(style)(Home));
