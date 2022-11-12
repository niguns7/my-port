import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have </h5>
      <h2> My Experience </h2>

      <div className='skills-bar'>
        <div className='bar'>
          <div className='info'>
            <span>HTML</span>
            <div className='progress-line'><span></span></div>
          </div>
          <div className='info'>
            <span>CSS</span>
            <div className='progress-line'><span></span></div>
          </div>
          <div className='info'>
            <span>JAVASCRIPT</span>
            <div className='progress-line'><span></span></div>
          </div>
          <div className='info'>
            <span>REACT.JS</span>
            <div className='progress-line'><span></span></div>
          </div>
          <div className='info'>
            <span>TAILWIND</span>
            <div className='progress-line'><span></span></div>
          </div>
          <div className='info'>
            <span>PHOTOSHOP</span>
            <div className='progress-line'><span></span></div>
          </div>

          
        </div>

      </div>
    </section>
  )
}

export default Experience