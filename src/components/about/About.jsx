import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
            <img src={ME} alt="About Me" />
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
          Full Stack Developer at fin-tech company TFX Islamic Sdn Bhd. Have developed the procurement module which is a part of the Enterprise Resource Planning (ERP) project 
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