import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/ritu-kumari-448799206/' target='_blank'><BsLinkedin className="custom-icon"/></a>
    <a href='https://github.com/rituk2002' target='_blank'><FaGithub className="custom-icon" /></a>
    
    <a href='#' target='_blank'><FaCameraRetro className="custom-icon"/></a>
   
    </div>
  )
}

export default HeaderSocials