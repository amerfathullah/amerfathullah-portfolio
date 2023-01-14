import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLinkedinLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7xhz1er', 'template_47qwjzf', form.current, 'CgEYGjhd--xlaJTHk')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>amerfathullah@gmail.com</h5>
            <a href="mailto:amerfathullah@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiLinkedinLine className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Amer Fathullah</h5>
            <a href="https://www.linkedin.com/in/amerfathullah/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+60105752992</h5>
            <a href="https://wa.me/60105752992" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='from_name' placeholder='Your Full Name' required />
          <input type="email" name='reply_to' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact