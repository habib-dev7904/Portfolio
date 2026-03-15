import { FaGit, FaGithub, FaJs, FaReact } from "react-icons/fa";
import './Skills.css';
import { FaCss3, FaHtml5 } from "react-icons/fa6";


function Skills() {
  return (
    <div>
        <section id="skills">
      <h1>Technical Skill</h1>
        <div id="icons">
          <b  href=""
          className="Github"
          style={{color: "white"}}>
            <FaGithub size={40} />
            <span className="percent">70%</span>
          </b>
          <b
          className="Html5"
          style={{color: 'red'}}>
            <FaHtml5 size={40}/>
            <span className="percent">90%</span>
          </b>
          <b
          className="Css3"
          style={{color: 'blue'}}>
            <FaCss3 size={40}/>
            <span className="percent">75%</span>
          </b>
          <b
          className="Js"
          style={{color: 'yellow'}}>
            <FaJs size={40}/>
            <span className="percent">70%</span>
          </b>
         
          <b
          style={{color: 'red'}}>
            <FaGit size={40}/>
            <span className="percent">70%</span>
          </b>
          <b
          style={{color: 'lightblue'}}>
            <FaReact size={40}/>
            <span className="percent">60%</span>
          </b>
        </div>
      </section>
    </div>
  );
}

export default Skills;