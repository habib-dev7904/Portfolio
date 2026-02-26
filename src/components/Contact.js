import React from "react";

import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import './Contact.css';

// Contact Form Component
function ContactForm() {
  const [state, handleSubmit] = useForm("xkovygar");

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <lable htmlFor= "name"></lable>
      <input 
      id="name"
      type="text"
      name="name"
      placeholder="Your Name"
      required/>
       <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email"></label>

      <input
      placeholder=" Email"
        id="email"
        type="email"
        name="email"
        required
      />

      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <textarea
        id="message"
        name="message"
        placeholder="Type your message"
        required
      />

      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
}


// Main App Component
function App() {
  return (
    <div className="contact">
      <section id="contact">

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <ContactForm />
      </section>


      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">

          <div className="footer-social">

            <a
              href="https://www.linkedin.com/in/habib-m-065628385"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/habib-dev7904"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://t.me/Habumoh_beshir"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram />
            </a>

            <a
              href="https://wa.me/251908459639"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>

          <p>
            © {new Date().getFullYear(2026)} Habib Mohammed. All rights reserved.
          </p>

        </div>
      </footer>
  </section>
    </div>
  );
}

export default App;