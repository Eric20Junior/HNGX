import React from 'react'
import './navbar.css'
import Logo from '../../images/helpLogo.svg'

export default function Navbar() {
  return (
    <nav class="nav-container">
        <div class="logo">
            <img src={Logo} alt="" />
            <h4>HelpMeOut</h4>
        </div>
        <div>
            <ul class="nav-links">
                <li>Features</li>
                <li>How it Works</li>
            </ul>
        </div>
        <div class="call-to-action">
            <a href="">Get Started</a>
        </div>
    </nav>
  )
}
