import React from 'react'
import '../Tv.css';
import Feature2 from '../assets/images/feature-2.png';
export default function Box2() {
  return (
    <div className="container">
    <div className="left2">
    <img src={Feature2} alt="Feature 2" className='feature2' /></div>
    <div className="para">
      <p className='text-bold'>Download your shows to watch offline</p>
      <p className='text'>Save your favourites easily and always have something to watch.</p>
    </div>
    </div>
  )
}
