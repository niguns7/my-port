import React from 'react';
//import classes from "./About.module.css"
import ME from "../../../assets/about.jpg";
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me'>
            <img src={ME} alt="about_image"/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_card'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experiences</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experiences</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experiences</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About