import React, { Component, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequest } from "../actions/userAction";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../reducers/reducer'


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
            user_id: Id,
            password: Password,
        };
        dispatch(loginRequest(body))
        .then((res) => {
            console.log("ID + password : " + Id, Password);
            if(res.payload.loginSuccess) {
                props.history.push("/");
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

    const mapStateToprops = (state) => {
        return {
            isLoginPending: state.isLoginPending,
            isLoginSuccess: state.isLoginSuccess,
            loginError: state.loginError
        };
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            login: (user_id, password) => dispatch(login(user_id, password))
        };
    }

export default withRouter((withStyles)(style)(Home));
