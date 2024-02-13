import React from 'react'
import './contact.css'
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
// import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vws0llv', 'template_n00b2wu', form.current, {
        publicKey: 'SBrXPJgnyW-NnDqb6',

        
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section id = "contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
     <div className='contact__options'>
      <article className='contact__option'>
      <IoIosMail className='contact__option_icons'/>
      <h4>Email</h4>
      <h5>rituchouhan1508@gmail.com</h5>
        <a href='mailto:rituchouhan1508@gmail.com' target='_blank'>Send a message</a>
      </article>
      <article className='contact__option'>
      <IoCall  className='contact__option_icons' />
      <h4>Call</h4>
      <h5>+916387394823</h5>
        <a href='tel:+916387394823' target='_blank'>Tap to call</a>
      </article>
      <article className='contact__option'>
      <IoLogoWhatsapp  className='contact__option_icons' />
      <h4>Whatsapp</h4>
      <h5>+916387394823</h5>
        <a href='https://api.whatsapp.com/send?phone=916387394823' target='_blank'>Send a message</a>
      </article>
     </div>
        <form ref={form} onSubmit={sendEmail}>
          <input  type="text" name="name" placeholder="Your Full Name" required/>
          <input  type="email" name="email" placeholder="Your Email Address" required/>
          <textarea name='message' rows={7} placeholder="Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    </div>
    </section>
  )
}

export default Contact