import React from 'react'
import './contact.css'
import {MdOutlineEmail} from'react-icons/md'
import {BsMessenger} from'react-icons/bs'
import {FaTelegramPlane} from'react-icons/fa'
import { useRef } from 'react';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import Button from '@mui/material/Button';

// import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // emailjs.sendForm('service_q99gr6a', 'template_fruojvo', form.current, 'XkMkLapwlOoeVrPO5')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };
  return (
    <section  id='contact'>
      <h1 className='mx-auto'>Get In Touch</h1>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dtgkhang99@gmail.com</h5>
            <a href="mailto:dtgkhang99@gmail.com">Send a Mail</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Khang Đỗ</h5>
            <a href="https://m.me/khang.do.5623" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@dtgk9</h5>
            <a href="https://t.me/dtgk9" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <FormControl >
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl >
      <InputLabel htmlFor="my-input">Your name</InputLabel>
      <Input name="name" id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
              <FormControl >
      <InputLabel htmlFor="my-input">Your Phone</InputLabel>
      <Input name="phone" id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your phone.</FormHelperText>
      <TextareaAutosize name="message"></TextareaAutosize>
      </FormControl>
          {/* <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" cols="30" rows="10"></textarea> */}
          
          <Button variant="contained"  type='submit' className='btn btn-primary'>Send Message</Button>
        </form>

      </div>
    </section>
  )
}

export default Contact