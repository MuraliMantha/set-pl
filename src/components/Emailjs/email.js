import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'; 

export const Email = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_krm299l', 'template_cpuaxl6', formRef.current, {
      publicKey: 'G5UzD9a9cdwUORCVQ',
    }).then(
      () => {
        // Reset form fields
        formRef.current.reset();
        alert('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };

  return (
    <div>
      <div className='contact-img-main'>
        <h1>Contact Us</h1>
        <p>"Reach Out to Enhance Your Plant Growth Solutions"</p>
      </div>
    
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h4>Address</h4>
            <p>Flat #409, 4th Floor, Srinivasa Nivas Apartment, Sai Baba Colony, Old BowenPally, SECUNDERABAD - 11</p>
          </div>
          <div className="info-item">
            <h4>Email</h4>
            <p>kajay02@gmail.com</p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+91 9959616199 / +91-40-40149561</p>
          </div>
        </div>
        
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <h4 className="contact-title">Contact Us</h4>
          <div className="contact-input-group">
            <label htmlFor="name" className="contact-label">Name</label>
            <input type="text" id="name" name="user_name" className="contact-input" />
          </div>
          <div className="contact-input-group">
            <label htmlFor="email" className="contact-label">Email</label>
            <input type="email" id="email" name="user_email" className="contact-input" />
          </div>
          <div className="contact-input-group">
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea id="message" name="message" className="contact-textarea"></textarea>
          </div>
          <input type="submit" value="Send Message" className="contact-submit-button" />
        </form>
      </div>

      <div className="map-container">
        <iframe
          title="Enterprise Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.0309204104456!2d78.48666539935995!3d17.474429500382243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a62b7763155%3A0x7766c9622cbdda32!2sSri%20Srinivasa%20Nivas%20Apmts!5e0!3m2!1sen!2sin!4v1724513244782!5m2!1sen!2sin"
          width="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
