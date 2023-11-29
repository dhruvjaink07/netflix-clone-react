import React from 'react'
import '../Hero.css';
import logo from '../assets/images/logo.png'
function Hero() {
    return (
        <>
        <div className="heroPage">
            <nav className='navbar'>

                <img className="logo" src={logo} alt='' />

                <div class="dropdown">
                    <button class="dropbtn">English</button>
                    <div class="dropdown-content">
                        <a href="/">English</a>
                        <a href="/">Hindi</a>
                    </div>
                </div>
                <button className="signUpBtn">
                    SignUp
                </button>
            </nav>

            {/* NavBar Done */}

            <div className="content">
                <p className='bigText'>Enjoy Big Movie,hit series and more from ₹ 149.</p>
                <p className="normalText">Join today. Cancel anytime.</p>
                <p className="normalText">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="getStarted">
                <input className="emailInput" type='email' placeholder='Email address'></input>
                <button className='getStartBtn'>Get Started &gt;</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Hero