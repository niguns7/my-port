import React from 'react';
import classes from "./Hero.module.css";

const CTA = () => {
  return (
    <div className={classes.Cta}>
        <a href='#contact' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA