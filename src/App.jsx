import React, { useEffect } from 'react'
import Home from './componets/pages/Home/Home'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './componets/pages/Login/Login'
import Player from './componets/pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
export default function App() {
const navigate=useNavigate()


  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
       if(user){
        console.log('logged in ');
        navigate('/')
       }else{
        console.log('logout');
        navigate('/login')
       }
    })
  },[])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      
    </div>
  )
}
 