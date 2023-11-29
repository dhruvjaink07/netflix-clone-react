import React from 'react';
import '../Tv.css';
import tv from '../assets/images/setup.png';
import video from '../assets/videos/setupVid.m4v';

function Box3() {
  return (
    <div class='container'>
    <div class="text-align">
      <p class='text-bold'>Watch everywhere</p>
      <p class='text'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
    </div>
    <div class="tvbox">
      <img src={tv}alt="Tv" class="tv1" />

        <video autoPlay muted playsInline loop class='tv-video1'>
          <source src={video} type="video/mp4" />
        </video>

    </div>
  </div>
  );
}

export default Box3;
