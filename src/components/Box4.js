import React from 'react'
import '../Tv.css';
import Feature2 from '../assets/images/feature-4.png';
export default function Box4() {
  return (
    <div className="container">
    <div className="left2">
    <img src={Feature2} alt="Feature 2" className='feature4' /></div>
    <div className="para2">
      <p className='text-bold'>Create profiles for kids</p>
      <p className='text'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
    </div>
    </div>
  )
}
