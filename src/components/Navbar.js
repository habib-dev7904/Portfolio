// import React from "react";
// import './Nav.css';

// function Navbar() {
//   return (
//     <nav>
//       <ul className="nav-menu">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About Me</a></li>
//         <li><a href="#exprience">experiences</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import './Nav.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo"></div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#exprience">Experiences</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;