import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5cqe64d', 'template_u01tizl', form.current, 'Km117keUyXCnog6Ho')

    e.target.reset();
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>E-mail</h4>
            <h5>razvanccst@gmail.com</h5>
            <a href="mailto:razvanccst@gmail.com" target='_blank'>Send an e-mail</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon' />
            <h4>Call</h4>
            <h5>+40731818905</h5>
            <a href="tel:0731818905">Call Me</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+40731818905</h5>
            <a href="https://api.whatsapp.com/send?phone=0731818905" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact