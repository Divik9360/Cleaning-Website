import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import hero_1 from '../../Assets/hero_1.jpg'
import hero_2 from '../../Assets/hero_2.jpg'
import hero_3 from '../../Assets/hero_3.jpg'
import './Hero.css'


const Hero = () => {
  return (
  
    <div className="hero">
     <Carousel>
       <Carousel.Item>
         <img src={hero_1} alt=''/>
       </Carousel.Item>
       <Carousel.Item>
          <img src={hero_2} alt=''/>
       </Carousel.Item>
       <Carousel.Item>
          <img src={hero_3} alt=''/>
       </Carousel.Item>
     </Carousel>

     <div className="hero-content">
        <p>RENEW YOUR LOOK</p>
        <h1>A TRADITION OF</h1>
        <h1>QUALITY CLEANING</h1>
        <button>Contact Us</button>
     </div>
    </div>
    
  )
}

export default Hero
