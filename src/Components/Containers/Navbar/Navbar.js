import React from 'react';
import  "./Navbar.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine } from "react-icons/ri";
import {BiMessageSquareEdit} from "react-icons/bi";
import { useState } from 'react';


const Navbar = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <a href='#home'
      onClick={() => setActiveNav('#')}
       className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
        </a>

      <a href='#about'
       onClick={() => setActiveNav('#about')}
       className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineUser />
        </a>

      <a href='#experiences'>
        <BiBook />
      </a>

      <a href='#services'>
      <RiServiceLine />
      </a>

      <a href='#contact'>
      <BiMessageSquareEdit />
      </a>
    </nav>
  )
}

export default Navbar