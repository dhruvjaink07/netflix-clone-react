import React from 'react';
import '../Tv.css';
import tv from '../assets/images/tv.png';
import video from '../assets/videos/tvVid.m4v';

function Tv() {
  return (
    <div className='container'>
      <div className="text-align">
        <p className='text-bold'>Enjoy on your TV</p>
        <p className='text'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>
      <div className="tvbox">
      <img src={tv} alt="Tv" />
        <div className="video-overlay">
    <video autoPlay muted playsInline loop>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

      </div>
    </div>
  );
}

export default Tv;
