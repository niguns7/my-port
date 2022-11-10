import React from 'react';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import classes from "./Hero.module.css"



const HeaderSocial = () => {
  return (
    <div className={classes.Icon} >
        <a href='https://github.com/niguns7' target='_blank' rel="noreferrer"> <BsGithub /> </a>
        <a href='https://www.facebook.com/nirguns.7/' target='_blank' rel="noreferrer"> <BsFacebook /> </a>
        <a href='https://www.instagram.com/nirguns.7/' target='_blank' rel="noreferrer"> <BsInstagram /> </a>
    </div>
  )
}

export default HeaderSocial;