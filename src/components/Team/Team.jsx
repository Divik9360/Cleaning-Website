import React from 'react'
import './Team.css'
import cleaner_1 from '../../Assets/cleaner_1.jpg'
import cleaner_2 from '../../Assets/cleaner_2.jpg'
import cleaner_3 from '../../Assets/cleaner_3.jpg'
const Team = () => {
  return (
    <div className='team'>
        <h2>MEET OUR</h2>
        <h1>Our Team</h1>
        <p>The member our highly experienced team is dedicted to providing you </p>
        <p>with only the best service we can possibly provide</p>

        <div className="team-bottom">
            <div className="team-cleaner">
                <img src={cleaner_1} alt="" />
                   <div className="team-cleaner-name">
                    <h2>Monica Garden</h2>
                    <p>House Cleaning</p>
                   </div>
            </div>
            <div className="team-cleaner">
                <img src={cleaner_2} alt="" />  
                <div className="team-cleaner-name">
                   <h2>Laura Jones</h2>
                   <p>Cleaner</p>
                </div>
                
            </div>
            <div className="team-cleaner">
                <img src={cleaner_3} alt="" />
                <div className="team-cleaner-name">
                   <h2>Sara Ryan</h2>
                   <p>House Cleaner</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Team
