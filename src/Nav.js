// class based component
import React, {Component} from 'react'

//shell for class based component for navigation bar
export default class Nav extends Component{
    //render is a method for returning data
    render() {
        return(
            <nav className='navBar'>
                <ul>
                    <li>Movie Reviews</li>
                    <li>Sign In</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}