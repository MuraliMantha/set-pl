import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <div>
      {/* Google Maps Section */}
      <div className="map-container">
      <iframe
        title="Enterprise Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.0309204104456!2d78.48666539935995!3d17.474429500382243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a62b7763155%3A0x7766c9622cbdda32!2sSri%20Srinivasa%20Nivas%20Apmts!5e0!3m2!1sen!2sin!4v1724513244782!5m2!1sen!2sin"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>Flat #409, 4th Floor, Srinivasa Nivas Apartment, Sai Baba Colony, Old BowenPally, SECUNDERABAD - 11</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>kajay02@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 9959616199 / +91-40-40149561</p>
          </div>
        </div>

        {/* Email Form Section */}
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
