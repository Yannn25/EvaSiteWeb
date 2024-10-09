import React, { useState } from 'react';
import '../styles/navBarre.css'; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`site-container ${isOpen ? 'menu-open' : ''}`}>
      <header className="header">
        <div className="logo">Logo '✖' </div>
        <button className="menu-btn" onClick={toggleMenu}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </header>

      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <div className="center">
          <ul className="list-items">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

