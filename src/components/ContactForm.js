import React from 'react';

const ContactForm = () => (
  <div className="section contact-form">
    <h2>Contact Me</h2>
    <form action="https://formspree.io/f/mnqwrwqy" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="_replyto" placeholder="Your Email" required />
      <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default ContactForm;
