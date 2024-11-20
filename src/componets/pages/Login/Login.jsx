import React, { useState } from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import { login,signup } from '../../../firebase'
export default function Login() {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const[signState,setSignState]=useState("Sign In")


const user_auth=async(e)=>{
  e.preventDefault();
  if(signState==="Sign In"){
    await login(email,password)
  }else{
    
    await signup(name,email,password)
  }
}


  return (
    <div className='login'>
      <img src={logo} alt="" className=' login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up"?<input type="text" value={name} onChange={(e)=>{
            setname(e.target.value)
          }} placeholder='Your Name' />:<> </>}
          
          <input type="email" value={email} onChange={(e)=>{
            setemail(e.target.value)
          }} placeholder='Enter Email'/>
          <input type="password" value={password} onChange={(e)=>{
            setpassword(e.target.value)
          }} placeholder='password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Helps</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"? <p>new to netflix?<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
          <p>Already have account?<span onClick={()=>{setSignState("Sign In")}}>Sign in</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}
