import React from 'react';
import  "./Navbar.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine } from "react-icons/ri";
import {BiMessageSquareEdit} from "react-icons/bi";


const Navbar = () => {
  return (
    <nav>
      <a href='#home' className='active'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experiences'><BiBook /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><BiMessageSquareEdit /></a>
    </nav>
  )
}

export default Navbar