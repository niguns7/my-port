import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have </h5>
      <h2> My Experience </h2>

      <div className='container'>
        <p>I am ambitious and driven. I thrive on challenge and 
          constantly set goals for myself, so I have something to
          strive toward. I’m not comfortable with settling, and
          I’m always looking for an opportunity to do better and 
          achieve greatness. </p>
      <div className='skills-bar'>
        <div className='bar'>
          <div className='info'>
            <span>HTML</span>
            <div className='progress-line html'><span></span></div>
          </div>

          <div className='bar'>
            <div className='info'>
              <span>CSS</span>
              <div className='progress-line css'><span></span></div>
            </div>
          </div>

          <div className='bar'>
            <div className='info'>
              <span>JAVASCRIPT</span>
              <div className='progress-line javascript'><span></span></div>
            </div>
          </div>
          <div className='bar'>
            <div className='info'>
              <span>REACT.JS</span>
              <div className='progress-line react'><span></span></div>
            </div>
          </div>
          <div className='bar'>
            <div className='info'>
              <span>TAILWIND</span>
              <div className='progress-line tailwind'><span></span></div>
            </div>
          </div>
          <div className='bar'>
            <div className='info'>
              <span>PHOTOSHOP</span>
              <div className='progress-line photoshop'><span></span></div>
            </div>
          </div>

        </div>

      </div>
      </div>
    </section>
  )
}

export default Experience