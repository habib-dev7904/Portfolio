import React from 'react'
import './Projects.css'
import { FaBook, FaBriefcase, FaCode, FaGlobe } from 'react-icons/fa6';
import { FaChalkboardTeacher } from 'react-icons/fa';




function Projects() {
 
  return (

    
    <div >
      <section id='exprience'>
        <h1>experience</h1>
        
        <div className='project'>
          
       
          <p className='habu'><FaBriefcase size={30}/>While I do not yet have formal professional experience, I have dedicated time to practical learning.</p>
          <p className='anu'><FaCode size={30}/>Building personal static websites to practice structure (HTML) and styling (CSS).</p>
          <p className='ashu'><FaGlobe size={30}/>Creating interactive web elements and simple applications (e.g., calculators, to-do lists) using JavaScript.</p>
          <p className='hiku'><FaChalkboardTeacher size={30}/>Following online tutorials and coding challenges to solidify understanding and problem-solving skills.</p>
        </div>
        </section>
        </div>
       
    
  )
}
export default Projects;