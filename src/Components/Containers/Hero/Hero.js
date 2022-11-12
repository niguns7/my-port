import React from 'react';
import classes from "./Hero.module.css";
import CTA from './CTA';
import Aux from '../../../hoc/Aux';
import HeaderSocial from './HeaderSocial';
import Modal from './Modal';

const Hero = () => {
  return (
    <Aux>
    
    <HeaderSocial />
    <header>
      <div className={classes.Container}>
        <h5> Hello I'm</h5>
        <h1> Nirgun Subedi </h1>
        <h5 className='text-light'>Frontend Developer</h5>

      </div>
      <CTA />      
    </header>
    <Modal />

    </Aux>
  )
}

export default Hero