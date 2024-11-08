import React from 'react'
import './Service.css'
import hero_4 from '../../Assets/hero_4.jpg'
import backround_2 from '../../Assets/backround_2.jpeg'
import { SiCcleaner } from "react-icons/si";
import { MdOutlineCleanHands } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { MdDryCleaning } from "react-icons/md";
import { ImOffice } from "react-icons/im";


const Service = () => {
  return (
    <>
   <div className="service-top">
      <div className="service-top-left">
        <img src={hero_4} alt="" />
      </div>
      <div className="service-top-right">
         <h3>MAID FOR YOU</h3>
         <h1>A Cleaner Place is a Safer Place</h1>
         <p>Washla cleaning service. Wea are company dedicated to giving our customers back thr time they deserve to enjoy the things they love</p>
         <div className="service-top-right-bottom"> 

             <div className="service-top-right-bottom-content">
                <SiCcleaner className='service-logo'/>
                <h2>Profession Cleaning</h2>
                <p>Housekeeping is responsible for minor security</p>
             </div>
             <div className="service-top-right-bottom-content">
                <MdOutlineCleanHands className='service-logo'/>
                <h2>Fast and Efficient</h2>
                <p>Both of us take a lot of time in getting cleaned Home.</p>
             </div>

         </div>
      </div>
   </div>
   <div className="service-img">
      <img src={backround_2} alt="" />
   </div>
   
   <div className="service-bottom">
       <h3>WHY CHOOSE US</h3>
       <h1>Our Great Service</h1>
       <p>Restoring the beauty and freshness of all your upholstread fabrics and take the</p>
       <p>work out of housework for you</p>

      <div className="service-bottom-boxes">
            <div className="service-bottom-box">
                <IoHomeSharp className='service-logo'/> 
                <h1>Home Cleaning</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tempore minus nisi itaque quia ullam necessitatibus! Recusandae tenetur non praesentium temporibus minus, ?</p>
            </div>
            <div className="service-bottom-box">
                <MdDryCleaning className='service-logo'/>  
                <h1>Windows Cleaning</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tempore minus nisi itaque quia ullam necessitatibus! Recusandae tenetur non praesentium t?</p>
            </div>
            <div className="service-bottom-box">
                <ImOffice className='service-logo'/>
                <h1>Office Cleaning</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tempore minus nisi itaque quia ullam necessitatibus! Recusandae tenetur non praesentium temporibus minus?</p>
            </div>
      </div>
   </div>
  </>
  )
}

export default Service
