import { FaGit, FaGithub, FaJs, FaReact } from "react-icons/fa";
import './Skills.css';
import { FaCss3, FaHtml5 } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <div>
        <section id="skills">
      <h2>Technical Skill</h2>
        <div id="icons">
          <a href
          className="Github"
          style={{color: "white"}}>
            <FaGithub size={40} />
            <span className="percent">70%</span>
          </a>
          <a className="Html5"
          style={{color: 'red'}}>
            <FaHtml5 size={40}/>
            <span className="percent">90%</span>
          </a>
          <a className="Css3"
          style={{color: 'blue'}}>
            <FaCss3 size={40}/>
            <span className="percent">75%</span>
          </a>
          <a className="Js"
          style={{color: 'yellow'}}>
            <FaJs size={40}/>
            <span className="percent">70%</span>
          </a>
          <a 
          style={{color: 'green'}}>
            <SiMongodb size={40}/>
            <span className="percent">70%</span>
          </a>
          <a
          style={{color: 'red'}}>
            <FaGit size={40}/>
            <span className="percent">70%</span>
          </a>
          <a
          style={{color: 'lightblue'}}>
            <FaReact size={40}/>
            <span className="percent">60%</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Skills;