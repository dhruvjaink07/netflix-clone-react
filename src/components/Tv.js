import React from 'react';
import '../Tv.css';
import tv from '../assets/images/tv.png';
import video from '../assets/videos/tvVid.m4v';

function Tv() {
  return (
    <div class='container'>
    <div class="text-align">
      <p class='text-bold'>Enjoy on your TV</p>
      <p class='text'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
    </div>
    <div class="tvbox">
      <img src={tv}alt="Tv" class="tv" />

        <video autoPlay muted playsInline loop class='tv-video'>
          <source src={video} type="video/mp4" />
        </video>

    </div>
  </div>
  );
}

export default Tv;
