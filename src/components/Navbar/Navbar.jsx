import React from 'react'
import './navbar.scss'

const Navbar = ({isMenuOpen}) => {
    return (
        
            <ul className={`navlist ${isMenuOpen && "active"}`} >
                <li className={"navItem"}>À Propos</li>
                <li className={"navItem"}>item 1</li>
                <li className={"navItem"}>item 2</li>
                <li className={"navItem"}>item 3</li>
            </ul>
        
    )
}

export default Navbar
