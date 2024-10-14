import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './hero.css'
import image3 from '/src/assets/image3.jpg'
function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={image3} alt="" />
        <h1><span>I'm Chandana Hari,</span> Full Stack Developer</h1>
        <p>I am a full-stack fresher developer skilled in HTML, CSS, JavaScript, React, and Node.js, capable of building responsive web applications.</p>
        <div className="hero-action">
            <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink>
            </div>
            <div className="hero-resume">
            <a style={{color:'white'}} href="/public/ChandanaHariCHResume_.pdf" download="Chandana_Resume.pdf">
        My Resume
    </a>
            </div>
        </div>
    </div>
  )
}

export default Hero