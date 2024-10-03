import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Your Name" />

        <label>Your Email</label>
        <input type="email" placeholder="Your Email" />

        <label>Your Message</label>
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
