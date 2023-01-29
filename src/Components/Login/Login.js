import React from 'react'
import './StyleLogin.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='center'>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <div className="log-btn">
        <button className='login' type="submit">Login</button>
      </div>
      <label>
        <input type="checkbox" name="remember" /> Remember me
      </label>
      <div className='signin'>
        <p>Create account? 
          <Link className='link' to="/register">  Regiser.</Link>
        </p>
        
      </div>
    </div>
  )
  
}

export default Login