import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-content-1">
                <h1>amiso</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus aperiam quasi nesciunt perspiciatis corporis?</p>
            </div>
            <div className="footer-top-content-2">
                <h2>Get in Touch</h2>
                <p>8273 NW 56th ST Miami, Florida,</p>
                <p>info@amiso.com</p>
                <h3>052 5401 3322</h3>
            </div>
            <div className="footer-top-links">
                <h1>Quick Links</h1>
                <div className="footer-top-links-flex">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Team</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>Gallery</li>
                    <li>Blogs</li>
                </ul>
                </div>
             
            </div>
            <div className="footer-top-newsletter">
                <h1>Our Newsletter</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ipsam magnam quae alias enim architecto.</p>
                <div className="search">
                    <input type="text"  placeholder='Your email address'/>
                    <button>SIGN UP</button>
                </div>
            </div>
        </div>
        
        <hr />

        <div className="footer-copyright">
            <div className="footer-copyright-left">
               <p>Copyright @ 2024 - All Rights Reserved.</p>
            </div>
            <div className="footer-copyright-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <div className="icon-up">
                <FaAngleUp className='up'/>
               </div>
            </div>
          
       </div>
    </div>
  )
}

export default Footer
