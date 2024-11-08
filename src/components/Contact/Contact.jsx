import React from 'react'
import './Contact.css'
import backround_2 from '../../Assets/backround_2.jpeg'
import { FaPlayCircle } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineDryCleaning } from "react-icons/md";
import { FaAward } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact'>
        <img src={backround_2} alt="" />
        <div className="contact-top">
            <FaPlayCircle className='contact-logo'/>
            <p>Cleaning your Worries Away</p>
            <h1>Need Help With Cleaning ?</h1>
            <button>Request Call Back</button>
        </div>
        
        <div className="contact-bottom">
            <div className="contact-bottom-content">
                <div className="contact-bottom-content-flex">
                  <FaRegSmileBeam className='contact-bottom-logo' />
                  <div className="contact-bottom-content-1">
                     <h1>385</h1>
                     <h3>Happy Customer</h3>
                    </div>
                </div>
                <p className='line'>|</p>
                <div className="contact-bottom-content-flex">
                 <FaHouseChimney className='contact-bottom-logo'/>
                   <div className="contact-bottom-content-1">
                      <h1>842</h1>
                         <h3>House Cleaned</h3>
                        </div> 
                </div>
                <p className='line'>|</p>
                <div className="contact-bottom-content-flex">
                  <FaAward className='contact-bottom-logo'/>
                  <div className="contact-bottom-content-1">
                     <h1>489</h1>
                      <h3>Award Recieved</h3>
                    </div>
                </div>
                <p className='line'>|</p>
                <div className="contact-bottom-content-flex">
                  <MdOutlineDryCleaning className='contact-bottom-logo'/>
                  <div className="contact-bottom-content-1">
                     <h1>1344</h1>
                     <h3>Glass Cleaned</h3>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
