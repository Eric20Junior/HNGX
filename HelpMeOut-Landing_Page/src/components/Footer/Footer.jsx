import React from 'react'
import FooterLogo from '../../images/footer-logo.svg'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer-container text-red-600'>
        <div class="-footerlogo">
            <img src={FooterLogo} alt="" />
            <h4>HelpMeOut</h4>
        </div>
        <div class="link">
            <h4>Menu</h4>
            <ul>
                <li>Home</li>
                <li>Converter</li>
                <li>How it Works</li>
            </ul>
        </div>
        <div class="link">
            <h4>About us</h4>
            <ul>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div class="link">
            <h4>Screen Record</h4>
            <ul>
                <li>Browser Window</li>
                <li>Desktop</li>
                <li>Application</li>
            </ul>
        </div>
    </footer>
  )
}
