import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>RITU KUMARI</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#services'>Experience</a></li>
        <li><a href='#experience'>Services</a></li>
        {/* <li><a href='#portfolio'>Projects</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/ritu-kumari-448799206/' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com/rituk2002'><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer