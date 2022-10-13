import React from 'react'
import './Header.css'
import Btns from './HeaderBtns'
import myPhoto from '../../assets/me-about.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section >
      <header id="header">
        <div className="container header__container">
          <h3 className='text-light'>Hello, nice to meet you! I'm</h3>
          <h2 className='name'>Razvan Constantin</h2>
          <h5 className="text-light">Web Developer</h5>
          <Btns></Btns>
          <HeaderSocials />
          <div className="me">
            <img src={myPhoto} alt="" className='photo' />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </section>
  )
}

export default Header