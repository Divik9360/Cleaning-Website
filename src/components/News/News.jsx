import React from 'react'
import './News.css'
import hero_4 from '../../Assets/hero_4.jpg'
import profile from '../../Assets/profile.png'

const News = () => {
  return (
    <div className='news'>
       <div className="news-top">
          <h3>WHY CHOOSE US</h3>
          <h1>Recent News</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis beatae dicta adipisci eum eius reiciendis?</p>
       </div>
       <div className="news-bottom">
          <div className="news-bottom-img">
             <img src={hero_4} alt="" />
                <div className="date">
                    <h2>12</h2>
                    <p>Nov</p>
                </div>
                <div className="news-bottom-img-content">
                    <h3>Cleaning</h3>
                    <h1>Temporary Ruling Issue</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum totam dignissimos ipsa commodi cupiditate voluptates.</p>
                      <div className="img-profile">
                         <img src={profile} alt="" />
                         <h2>Mertha Smith</h2>
                         <p>Washla CEO</p>
                      </div>
                      
                </div>
          </div>

          <div className="news-bottom-img">
             <img src={hero_4} alt="" />
                <div className="date">
                    <h2>12</h2>
                    <p>Nov</p>
                </div>
                <div className="news-bottom-img-content">
                    <h3>Cleaning</h3>
                    <h1>Temporary Ruling Issued</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum totam dignissimos ipsa commodi cupiditate voluptates.</p>
                      <div className="img-profile">
                         <img src={profile} alt="" />
                         <h2>Mertha Smith</h2>
                         <p>Washla CEO</p>
                         <span></span>
                      </div>
                </div>
          </div>

          <div className="news-bottom-img">
             <img src={hero_4} alt="" />
                <div className="date">
                    <h2>12</h2>
                    <p>Nov</p>
                </div>
                <div className="news-bottom-img-content">
                    <h3>Cleaning</h3>
                    <h1>Temporary Ruling Issued</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum totam dignissimos ipsa commodi cupiditate voluptates.</p>
                      <div className="img-profile">
                         <img src={profile} alt="" />
                         <h2>Mertha Smith</h2>
                         <p>Washla CEO</p>
                      </div>
                </div>
          </div>
            
       </div>
    </div>
  )
}

export default News
