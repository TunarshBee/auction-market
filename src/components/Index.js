import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Items from './Items'
import Services from './Services'


export class Index extends Component {
    render() {
        return (
            <div>
              <h1>
                    i am the header tag here
                </h1>
                <nav className="nav">
                    <ul className="list" style={thisStyle}>
                        <li className="list-item">  <Home/> </li>
                        <li className="list-item">  <Items/> </li>
                        <li className="list-item">  <Services /> </li>
                        <li className="list-item">  <About/></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
const thisStyle={
    display:"flex",
    // backgroundColor:"purple",
}

export default Index
