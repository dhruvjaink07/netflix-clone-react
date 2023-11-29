/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../PageEnd.css';

function PageEnd() {
  return (
    <div className='area'>
        <a href="/" className='questions'>Question? Call 000-800-919-1594</a>
        <div className="links">
        <ul>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Investor Relations</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">SpeedTest</a></li>
        </ul>
        <ul>
          <li><a href="/">Help Centre</a></li>
          <li><a href="/">Jobs</a></li>
          <li><a href="/">Cookie Preference</a></li>
          <li><a href="/">Legal Notice</a></li>
        </ul>
        <ul>
          <li><a href="/">Account</a></li>
          <li><a href="/">Ways to Watch</a></li>
          <li><a href="/">Corporate Information</a></li>
          <li><a href="/">Only on Netflix</a></li>
        </ul>
        <ul>
          <li><a href="/">Media Centre</a></li>
          <li><a href="/">Terms of use</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
        </div>
        
        <div class="dropdown1">
              <button class="dropbtn1">English</button>
                <div class="dropdown-content1">
                  <a href="/">English</a>
                  <a href="/">Hindi</a>
        </div>
        </div>
          <p className='netInd'>Netflix India</p>
        
    </div>
  )
}

export default PageEnd;