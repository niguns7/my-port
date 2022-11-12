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
              <h5>Experiences</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>10+</small>
            </article>

            <article className='about_card'>
              <VscFolder className='about_icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled
              </p>

            <a href='#contact' className='btn btn-primary'> Contact me</a>
        </div>

      </div>
    </section>
  )
}

export default About