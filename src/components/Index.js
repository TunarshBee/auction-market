import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Items from './Items'
import Apsp from './LifeCycle'
import Pick from './Pick'
import Services from './Services'


export class Index extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <ul className="list" style={thisStyle}>
                        <li className="list-item">  <Home/> </li>
                        <li className="list-item">  <Items/> </li>
                        <li className="list-item">  <Services /> </li>
                        <li className="list-item">  <About/></li>
                        <li className="list-item">  <Pick/></li>
                    </ul>
                    <form style={formStyle}>
                        <input type="search" placeholder="Search Your Favorite"/>
                        <input type="submit" placeholder="Search "/>
                    </form>
                </nav>
                <Apsp />
            </div>
        )
    }
}
const thisStyle={
    display:"flex",
    float:"right",
    marginRight:"15%",
}
const formStyle={
    margin:"auto",
    marginTop:"1%",
}

export default Index
