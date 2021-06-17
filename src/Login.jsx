import React from 'react'
import './Login.css';
import logo from './Slack_Mark_Web.png';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => {
            alert(error.message);
        });
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src={logo} alt='Slack Image' />
                <h1>Sign in to Ganesh's Slack</h1>
                <p>ganeshsindagi.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;
