import { useState } from 'react';
import './index.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)

    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div>
      <div className='section-title-container'>
        <h1 className='section-title'>Contact</h1>
        <h4 className='section-subtitle'>Want to reach out?  Fill out the form below or contact me via any of my social media platforms</h4>
      </div>

      <form onSubmit={handleSubmit} className='form-container'>

        <input type="email" value={email} placeholder="Email" name="email" onChange={(e) => { setEmail(e.target.value) }} className='input-bar' />

        <input type="text" value={subject} placeholder="Subject" name="subject" onChange={(e) => { setSubject(e.target.value) }} className='input-bar' />

        <textarea value={message} placeholder="Message" name="message" onChange={(e) => { setMessage(e.target.value) }} className='message-box' />

        <div className='submit-container'>
          <button type="submit" className='submit-button'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;