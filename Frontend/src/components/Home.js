

import React from 'react';
import { NavLink } from 'react-router-dom'


export default function Home() {

  return (<div className='left-login home'>

  <div className='content-home'>
  <h1 className='title-login'>Laundry Service</h1>
  <p className='para-login'>Doorstep Wash & Dryclean service</p>
  <div className='btn-sec'>
      <p>Please Sign In </p>
      <NavLink className="li" to={"/"} ><button className='reg-btn'>Sign In</button></NavLink>
  </div>

  </div>
</div>)
}
