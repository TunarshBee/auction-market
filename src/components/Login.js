import React, { Component } from 'react'
import {NavLink, Route, BrowserRouter as  Router} from 'react-router-dom'
import SignUp from './SignUp'

class Login extends Component {
    render() {
        return (
            <React.Fragment className="forms">
                <Router>
                <form className="loginForm">
                    <h1>Login</h1>
                    <h3>Email</h3>
                    <input type="email" placeholder="Email" minLength="2" required/>
                    <h3>Password</h3>
                    <input type="password" placeholder="Password" minLength="2" required />
                    <input type="submit" value="Login" />
                    <center className="or">or login with</center>
                    <a href="https://www.facebook.com">Facebook</a>
                    <a href="https://www.google.com">Google</a>
                </form>
                </Router>
                <p style={p}>Not registered yet? </p>
                <SignUp/>
            </React.Fragment>
        )
    }
}
const p ={
    marginTop:"3%",
    marginLeft:"45%",
    color:"#fff",
}

export default Login;
