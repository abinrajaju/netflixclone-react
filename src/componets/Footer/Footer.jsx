import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={youtube} alt="" />
        <img src={twitter}alt="" />
        <img src={instagram} alt="" />
      </div>
      <ul>
        <li>Audio discription</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Job</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Leagal Notice</li>
        <li>Cookie Preference</li>
        <li>Contact</li>
      </ul>
      <p className='copyright-text'>dev.Abinraj since 2002</p>
    </div>
  )
}
