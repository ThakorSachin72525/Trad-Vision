import React from 'react'
import logo from "./logo.png"
import './index.css';

function Logo() {
  
  return (
    <div className='logo_img'>
        <img alt='logo' src={logo}/>
    </div>
  )
}

export default Logo