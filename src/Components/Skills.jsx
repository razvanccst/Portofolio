import React from 'react'
import './Skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container">
        <div className="experience__container">
          <div className="frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>React</h4>
                <small className="text-primary">Beginner</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>Javascript</h4>
                <small className="text-primary">Intermediate</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>HTML</h4>
                <small className="text-primary">Intermediate</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>CSS</h4>
                <small className="text-primary">Intermediate</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>Tailwind</h4>
                <small className="text-primary">Intermediate</small>
              </article>
            </div>
          </div>
          <div className="backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>NodeJS</h4>
                <small className="text-primary">Beginner</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>REST APIs</h4>
                <small className="text-primary">Beginner</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>USING APIs</h4>
                <small className="text-primary">Intermediate</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>SQL</h4>
                <small className="text-primary">Beginner</small>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='content__details-icon' />
                <h4>MONGO DB</h4>
                <small className="text-primary">Beginner</small>
              </article>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills