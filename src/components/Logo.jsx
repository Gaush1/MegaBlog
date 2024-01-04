import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '70px'}) {
  return (
    <div>
      <img src={logo} alt="" style={{width: width}}/>
    </div>
  )
}

export default Logo
