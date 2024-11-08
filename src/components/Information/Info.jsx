import React from 'react'
import './Info.css'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLibreofficewriter } from "react-icons/si";

const Info = () => {
  return (
    <div className='info'>

       <div className="info-left">
        <p> <FaPhone /> +123-456-7890</p>
        <p><MdEmail /> info@yourdomain.com</p>
       </div>

       <div className="info-right">
          <div className="social-logo">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
          </div>
          <div className="quote">
              <p><SiLibreofficewriter /> GET A QUOTE</p>
          </div>
         
       </div>
    </div>
  )
}

export default Info
