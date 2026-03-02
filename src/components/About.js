import React from 'react'

import './About.css';

function About() {
  return (
    <div>
      <section id="about">
        <div className='about'>
          <h1>About Me</h1>

          <div className='about-card'>
            <div className='text-section'>
              <p className='p1'>
                Hi! I’m Habib Mohammed, a passionate Frontend Developer.
                I specialize in building clean, responsive, and user-friendly
                websites using HTML, CSS, JavaScript, and React.
      
                I enjoy learning new technologies, improving my skills,
                and creating modern web experiences. My goal is to become a
                professional developer and contribute to real-world projects.
              </p>
            </div>

            <div className='image-container'>
              <img src='./image.png' alt="Profile" />
              <div className='image-text'>passionate to Frontend Dev</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;