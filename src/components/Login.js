import React, { Component } from "react";
import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./Register";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="loginForm">
          <Router>
            <form>
              <h1>Login</h1>
              <h3>Email</h3>
              <input type="email" placeholder="Email" minLength="2" required />
              <h3>Password</h3>
              <input
                type="password"
                placeholder="Password"
                minLength="2"
                required
              />
              <input type="submit" value="Login" />
              <center className="or">or login with</center>
              <a className="formLinks" href="https://www.facebook.com">Facebook</a>
              <a className="formLinks" href="https://www.google.com">Google</a>
            </form>
          </Router>

          <b style={p}>Not registered yet? </b>
          <NavLink style={navLinks} to="/Register">
            Register
          </NavLink>
          <Route path="/Register" component={Register} />
        </div>
      </React.Fragment>
    );
  }
}
const p = {
  marginTop: "5%",
  marginBottom: "5%",
  marginLeft: "20%",
  color: "#fff",
};
const navLinks = {
  textDecoration: "none",
  color: "#fff",
  fontSize: "15px",
  listStyle: "none",
};

export default Login;
