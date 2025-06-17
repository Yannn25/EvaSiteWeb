import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBarre.css'; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">EVA Cooking</div>
        <button className="menu-btn" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={toggleMenu}>
                  <span className="nav-number">01</span>
                  <span className="nav-text">Accueil</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" onClick={toggleMenu}>
                  <span className="nav-number">02</span>
                  <span className="nav-text">Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={toggleMenu}>
                  <span className="nav-number">03</span>
                  <span className="nav-text">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="menu-footer">
            <div className="social-links">
              <h4>Suivez-nous</h4>
              <div className="social-icons">
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-youtube"></i>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
            
            <div className="contact-info">
              <h4>Contact</h4>
              <p>North Agboville</p>
              <p>eva.cooking@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;