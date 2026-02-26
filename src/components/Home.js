import React from 'react';
import './Home.css';
import profile from './imag/image.png';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';

function Home() {


  return (
    <div className='home'>
      <section id="home">
        
        {/* Social Icons */}
        <div className='social'>
          <a 
            href="https://www.linkedin.com/in/habib-m-065628385"
            target="_blank"
            rel="noreferrer"
            className='Linkdin'
          >
            <FaLinkedin />
          </a>

          <a 
            href="https://github.com/habib-dev7904"
            target="_blank"
            rel='noreferrer'
            className='Github'
          >
            <FaGithub/>
          </a>

          <a 
            href="https://t.me/Habumoh_beshir"
            target="_blank"
            rel='noreferrer'
            className='Telegram'
          >
            <FaTelegram/>
          </a>

          <a 
            href="https://wa.me/251908459639"
            target="_blank"
            rel='noreferrer'
            className='Whatsapp'
          >
            <FaWhatsapp/>
          </a>
        </div>

        {/* Intro Section */}
        <div className="intro">
          <img src={profile} alt="Habib" />

          <div className="text">
            <h1>Hi, I'm Habib Mohammed</h1>

            <div className='typing'>
              <h1>I'm Frontend Developer</h1>
            </div>

            <p className='P1'>
              I’m a Frontend Developer specializing in creating clean, responsive, 
              and interactive web interfaces using HTML, CSS, JavaScript, and React. 
              I love experimenting with animations, skill bars, and interactive designs.
            </p>
                <a href="/Habib.pdf" download="Habib_Resume.pdf">
  <button>Download My CV</button>
</a> 
   <a href="https://www.linkedin.com/in/habib-m-065628385" target="_blank" rel="noreferrer">
              <button>Connect</button>
            </a>

          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;