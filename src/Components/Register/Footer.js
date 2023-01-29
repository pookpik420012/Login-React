import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
      <div className='signin'>
          <p>Already have an account?
             
          </p>
          <Link className='link' to="/"> Login.</Link>
      </div>
  )
}

export default Footer