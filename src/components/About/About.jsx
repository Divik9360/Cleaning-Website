import React from 'react'
import './About.css'
import { FaHandsWash } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { TbClock24 } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
import { TbSettingsCheck } from "react-icons/tb";

const About = () => {
  return (
    <div className='about'>
      <div className="container-1">
       <div className='about-top'>
           <div className="content-1">
              <h1><FaHandsWash /></h1>
              <h2>Professional Cleaning</h2>
              <p>Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through</p>
           </div>

           <div className="content-1">
              <h1><MdCleaningServices /></h1>
              <h2>Professional Cleaning</h2>
              <p>Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through</p>
           </div>

           <div className="content-1">
               <h1><FaHome /></h1>
               <h2>Professional Cleaning</h2>
               <p>Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through</p>
           </div>
       </div>

       <div className="about-down">
          <div className="para-1" id='para'>
              <h1>A Clean House is a Happy Place !</h1>
              <h3>Washla has met the demands of a growing world</h3>
          </div>

          <div className="para-2" id='para'>
              <p><span>W</span>ashla customers has a tremendous opportunity to answer the call of logistic needs across the globe .Has 26 afflicated state soybean associations representing 30 soybean-producing state .</p>
          </div>

          <div className="para-2" id='para'>
               <p>Wold's leading non-asset-based supply chain management companies, we design and implement industry-leding.We specilise in inteligent & effective search and believes in the power of partnership to grow business .</p>
          </div>
       </div>
       </div>

       <div className="container-2">
           <div className="title">
              <h3>WHY CHOOSE US</h3>
              <h1>Tradition of Trust</h1>
              <p>We specilise inteligent & effective Search and believes in the power of partnerships to grow business</p>
            
           </div>

           <div className="services">
               <div className="service">
                 <h1><MdCleanHands /></h1>
                 <h2>Professional Team</h2>
                 <p>Our team uses a sanitizing solution to wipe downb light switches doorknob</p>
               </div>
               <div className="service">
                 <h1><TbClock24 /></h1>
                 <h2>24/7 Services</h2>
                 <p>We encourage our customers to let us know in advance of an appointment</p>
               </div>
               <div className="service">
                 <h1><TbSettingsCheck /></h1>
                 <h2>Service Guarantee</h2>
                 <p>We are telling our team members to switch out all cleaning cloths and mopheads.</p>
               </div>
           </div>
       </div>

    </div>
  )
}

export default About
