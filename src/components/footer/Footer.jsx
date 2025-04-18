import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <a href="#root" className='footer__logo'>AMER FATHULLAH</a>

      <ul className='permalinks'>
        <li><a href="#root">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        {/* <li><a href="#experience">Experience</a></li> */}
        {/* <li><a href="#services">Services</a></li> */}
        {/* <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/amer.fathullah" aria-label="Facebook"><FaFacebookF/></a>
        <a href="https://www.instagram.com/amer_fathullah/" aria-label="Instagram"><FiInstagram/></a>
        <a href="https://twitter.com/AmerFathullah" aria-label="Twitter"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Copyright ©️ {currentYear} Amer Fathullah. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
