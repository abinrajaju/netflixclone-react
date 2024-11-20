import React from 'react'
import './Home.css'
import Navbar from '../../Navbar/Navbar'
import hero_banner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import play_icon from '../../../assets/play_icon.png'
import info from '../../../assets/info_icon.png'
import TitleCards from '../../TitleCards/TitleCards'
import Footer from '../../Footer/Footer'
export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt=""  className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discover his ties to a secret ancient order, a young 
            man living in modern Istanbul 
          </p>
          <div className="hero-btn">
            <button className='btn'><img src={play_icon} alt=""  />play</button>
            <button className='btn dark'> <img src={info} alt="" />more info</button>
          </div> 
          
        </div>
        
      </div>
      <div className="more-card">
        <TitleCards title={"Blockbuster Movie"} category={"popular"}/> 
        <TitleCards title={"Only on netflix"} category={"top_rated"}/> 
        <TitleCards title={"Upcoming"} category={"upcoming"}/> 
        </div>
        <Footer/>
    </div>
  )
}
