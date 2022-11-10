import React from 'react';
//import classes from "./Hero.module.css";
import CTA from './CTA';
import Aux from '../../../hoc/Aux';
import me from "../../assets/image.png";
import HeaderSocial from './HeaderSocial';

const Hero = () => {
  return (
    <Aux>
    <header>
      <div>
        <h5> Hello I'm</h5>
        <h1> Nirgun Subedi </h1>
        <h5>Frontend Developer</h5>

      </div>
      <CTA />
      <HeaderSocial />

      <div className='me'>
        <img src={me} alt='me'/>
      </div>
    </header>
    

    </Aux>
  )
}

export default Hero