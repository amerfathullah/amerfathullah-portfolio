import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.webp'
import ME304 from '../../assets/me-304.webp'
import ME608 from '../../assets/me-608.webp'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amer Fathullah</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img
            srcSet={`
              ${ME304} 304w,
              ${ME608} 608w,
              ${ME} 1080w
            `}
            sizes="(min-width: 620px) 304px, (min-width: 420px) 272px, 66vw"
            src={ME}
            alt="Me"
            width="1080"
            height="auto"
          />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
