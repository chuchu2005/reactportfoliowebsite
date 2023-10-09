import { React, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "../contact/Contact.scss";
import contactProfile from "../../images/bitmoji-5.png";
import Aos from 'aos';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    alert("Your mail was successfully sent");
    e.preventDefault();
    emailjs.sendForm('ahmad.dev', 'template_4o0m3kr', form.current, 'fVrI6IsoPEo41b4re');
    e.target.reset();
  }

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <h1>Work with Peter</h1>
        <h2>Trust me, he's loads of fun to work with</h2>
      </div>

      <div className="contact__details">
        <img
          src={contactProfile}
          alt="contact profile"
          data-aos="fade-right"
          data-aos-once="true"
        ></img>

        <form ref={form} onSubmit={sendEmail}>
          <input
            name="name"
            type="text"
            placeholder="Your Name *"
            required
          ></input>
          <input
            name="email"
            type="email"
            placeholder="Your Email *"
            required
          ></input>
          <textarea
            name="message"
            cols="33"
            rows="6"
            placeholder="Your message here *"
            textarea="true"
            required
          ></textarea>
          <button
            className="submit__button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
