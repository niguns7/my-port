import React from 'react';
import classes from "./Hero.module.css";
import CTA from './CTA';
import Aux from '../../../hoc/Aux';
import photo from "../../assets/image.png";
import HeaderSocial from './HeaderSocial';

const Hero = () => {
  return (
    <Aux>
    
    <HeaderSocial />
    <header className={classes.Container}>
      <div>
        <h5> Hello I'm</h5>
        <h1> Nirgun Subedi </h1>
        <h5 className='text-light'>Frontend Developer</h5>

      </div>
      <CTA />
      

      <div className='me'>
        <img src={photo} alt='me'/>
      </div>
    </header>
    

    </Aux>
  )
}

export default Hero