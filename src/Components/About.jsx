import React from 'react'
import './About.css'
import myPhoto from '../assets/me4.jpg'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__image-container'>
          <div className="about__image">
            <img src={myPhoto} alt="About Image" style={{ width: '100%' }} />
          </div>
        </div>

        <div className="about__content">
          <p>I am an Entry Level <span>Web Developer</span> searching for a fixed position in a modern company where I can utilize my creative, organizational and management skills to drive growth. My previous experience as a manager and coordinator of various projects with world-renowned Video Production companies taught me to always be aware of changes and needs that may arise, and take on new responsibilities as they come. I am a "people person" and enjoy working in a fast-paced environment by staying calm under pressure.</p>
          <div className='about__buttons'>
            <a href="#projects" className='btn'>Check Projects</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About