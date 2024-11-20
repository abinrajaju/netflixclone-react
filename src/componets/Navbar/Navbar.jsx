import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
export default function Navbar() {
  return ( 
    <div className='navbar'>
    <div className="navbar-left">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Tv Show</li>
        <li>Movie</li>
        <li>New & Populer</li>
        <li>Mylist</li>
        <li>Browser by Language</li>
      </ul>
    </div>
    <div className="navbar-right">
      <img src={search} alt="" className='icon'/>
      <p>Children</p>
      <img src={bell_icon} alt="" className='icon'/>
      <div className="navbar-profile">
      <img src={profile_img} alt="" className='profile'/>
      <img src={caret_icon} alt="" />
      <div className="dropdown">
        <p onClick={()=>{logout()}}>Sign out on netflix</p>
      </div>
      </div>
    </div>
    </div>
  )
}
