import React from 'react';
import "./About.css"
import ME from "../../../assets/about.jpg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolder} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="about_image"/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <div className='text'>
              <h5>Experiences</h5>
              <small>1 years+</small>
              </div>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>10+ in nepal</small>
            </article>

            <article className='about_card'>
              <VscFolder className='about_icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

          <p>I am a junior front end developer . not working as employe
im a freelancer developer.I’ve 1 years plus working experience with
10+ clients and 20+ projects.I’m React js developer
              </p>

            <a href='#contact' className='btn btn-primary'> Contact me</a>
        </div>

      </div>
    </section>
  )
}

export default About