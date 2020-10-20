import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            <div>
                <form className="signUp">
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Choose a Password'/>
                    <input type="password" placeholder='Comfirm Password'/>
                    <input type="submit" placeholder='Submit'/>
                </form>
            </div>
        )
    }
}

export default SignUp
