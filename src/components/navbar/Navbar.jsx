import React from 'react';
import "./navbar.css";
import {Link} from "react-scroll"
import {SlSocialLinkedin, SlSocialGithub, SlSocialGoogle} from 'react-icons/sl'
function Navbar(){

return (
    <>
      <header>
        <nav className="navbar" >
            <ul className='nav-menu'>
            <img src="logo.png" className='logo' alt="" />
                <li><Link to='home' spy={true} className='page'>Home</Link></li>
                <li><Link to='about' spy={true} className='page'>About Me</Link></li>
                <li><Link to='stuff' spy={true} className='page'>The Good Stuff</Link></li>
                <li><Link to='music' spy={true} className='page'>Music & Me</Link></li>
                <li><Link to='contact' spy={true} className='page'>Get In Touch</Link></li>
                <span className='credit'>WebApp © Made By Me 
                <div className="socials">
                  <li><a href="https://www.linkedin.com/in/aymaanshahzad23/" target='_blank' rel='noreferrer'><SlSocialLinkedin className='social linkedin'/></a></li>
                  <li><a href="https://github.com/aymaanshahzad23" target='_blank' rel='noreferrer'><SlSocialGithub className='social github'/></a></li>
                  <li><a href="mailto:aymaanshahzad23@gmail.com" target='_blank' rel='noreferrer'><SlSocialGoogle className='social gmail'/></a></li>
                </div>
                </span>
                <li><br /><a href="https://github.com/aymaanshahzad23/webpage" target='_blank' rel='noreferrer' className='source'>View Source</a></li>
            </ul> 
          </nav>
      </header>
    </>
  );
};

export default Navbar;