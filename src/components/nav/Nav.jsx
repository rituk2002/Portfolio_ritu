import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
// import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     <a href='#' onClick={() => setActiveNav('#')} className={activeNav == '#' ? 'active' : ''}><FaHome/></a>
     <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}><FaUser/></a>
     <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav == '#services' ? 'active' : ''}><MdWorkHistory /></a>
     <a href='#experience' onClick={() => setActiveNav('#')} className={activeNav == '#experience' ? 'active' : 'experience'}><FaBook /></a>
     <a href='#contact' onClick={() => setActiveNav('#about')} className={activeNav == '#contact' ? 'active' : ''}><MdOutlineMessage /></a>

    </nav>
  )
}

export default Nav