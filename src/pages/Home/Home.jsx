import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Service from '../../components/Servicing/Service'
import Team from '../../components/Team/Team'
import Contact from '../../components/Contact/Contact'
import News from '../../components/News/News'

const Home = () => {
  return (
    <div>
       <Hero/>
       <About/>
       <Service/>
       <Team/>
       <Contact/>
       <News/>
    </div>
  )
}

export default Home
