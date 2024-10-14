import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navbar.css';

function Navbar() {

  return (
    <div className='navbar'>
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvO_wUKVviIUfzJGq9mXtqiNRdSa9jJqYDw&s" alt="" />
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link'  href='#home'> <p >Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p >About</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p >Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p >Work</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p >Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar