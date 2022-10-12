import React from 'react'
import CV from '../../assets/CV.pdf'

const HeaderBtns = () => {
  return (
    <div class="header__buttons">
      <a href={CV} className="btn" download>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default HeaderBtns