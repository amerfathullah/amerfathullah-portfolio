import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState,useEffect} from 'react'

const sections = ['about', 'skills', 'contact']
const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('')
  
  useEffect(() => {
      const handleScroll = () => {
          sections.forEach(sectionId => {
              const root = document.getElementById('root')
              const rootRect = root.getBoundingClientRect()
              const section = document.getElementById(sectionId)
              const sectionRect = section.getBoundingClientRect()
              if (sectionRect.top <= 1 && sectionRect.bottom >= 0) {
                setActiveNav('#' + sectionId)
              }
              else if (root && rootRect.top === 0) setActiveNav('#root')
          })
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
          window.removeEventListener("scroll", handleScroll)
      }
  }, [])

  return (
    <nav>
      <a href="#root" onClick={() => setActiveNav('#root')} className={activeNav === '#root' ? 'active' : ''} aria-label="root"><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} aria-label="about"><AiOutlineUser/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} aria-label="skills"><BiBook/></a>
      {/* <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} aria-label="experience"><RiServiceLine/></a> */}
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} aria-label="services"><RiServiceLine/></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} aria-label="contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
