import React from 'react'

export default function Register() {
    return (
        <div>
          <form className="signUp">
            <h1>Register</h1>
            <h3>First Name</h3>
            <input type="text" placeholder="First Name" minLength="2" required />
            <h3>Last Name</h3>
            <input type="text" placeholder="Last Name" minLength="2" required />
            <h3>Email</h3>
            <input type="email" placeholder="Email" minLength="2" required />
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Password"
              minLength="8"
              required
            />
            <h3>Confirm Password</h3>
            <input
              type="password"
              placeholder="Confirm Password"
              minLength="8"
              required
            />
            <input type="submit" value="Register" />
            <center className="or">or register with</center>
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.google.com">Google</a>
          </form>
        </div>
      );
    }