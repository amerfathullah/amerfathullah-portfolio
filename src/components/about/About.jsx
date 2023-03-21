import React from 'react'
import './about.css'
import ME from '../../assets/me-about.webp'
import ME256 from '../../assets/me-about-256.webp'
import ME790 from '../../assets/me-about-790.webp'
import ME1120 from '../../assets/me-about-1120.webp'
import ME1370 from '../../assets/me-about-1370.webp'
import ME1580 from '../../assets/me-about-1580.webp'
import {FaAward} from 'react-icons/fa'
import {FiGitCommit} from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img
            srcSet={`
              ${ME256} 256w,
              ${ME790} 790w,
              ${ME1120} 1120w,
              ${ME1370} 1370w,
              ${ME1580} 1580w,
              ${ME} 3203w
            `}
            sizes="(min-width: 1040px) 26.28vw, (min-width: 640px) 43.16vw, (min-width: 420px) calc(10.5vw + 202px), calc(16vw + 170px)"
            src={ME}
            alt="About Me"
            width="100%"
            height="auto"
          />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiGitCommit className='about__icon'/>
              <h5>Contributions</h5>
              <small>500+ Commits</small>
            </article>

            {/* <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article> */}
          </div>

          <p>
          Full Stack Developer and currently working at TFX Islamic Sdn Bhd, a local fin-tech company. Have developed the procurement module which is a part of the Enterprise Resource Planning (ERP) project 
          in the company. 2+ years of diverse software engineering experience such as front-end development, back-end development, mobile development and machine learning.
          </p>
          <p>
          Love to work in a team, continuous learning and agile environment. Interested in writing cleaner code, devising a better problem-solving method for challenging tasks,
           and learning new technologies and tools.
          </p>

          <div className='about__button'>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
