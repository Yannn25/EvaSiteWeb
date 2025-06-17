import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';

export const Accueil = () => {
  return (
    <div>
      <Navbar />
      <div className='site-container'>
        <div style={{ position: "relative", paddingTop: "80px"}}>
          <div style={{ width: "50%", float: "left", textAlign: "center", padding: "40px 20px"}}>
            <h1>EVA Cooking</h1>
            <p>Your new favorite brunch spot is coming to North Agboville! Join our mailing list to avail of all our early bird promos.</p>
            <Link to="/contact" style={{ 
              display: "inline-block", 
              marginTop: "20px", 
              padding: "12px 24px", 
              backgroundColor: "#8b4513", 
              color: "#f5f5dc", 
              textDecoration: "none", 
              borderRadius: "5px",
              transition: "all 0.3s ease"
            }}>
              Contact us
            </Link>
            <section id="emoticon" style={{ marginTop: "40px" }}>
              <h4>Nos Réseaux Sociaux</h4>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </section>
          </div>
          <div style={{ width: "50%", float: "right" }}>
            <img
              src="https://1cd6sll7spmfn.cdn.shift8web.com/wp-content/uploads/2023/05/IMG-20230501-WA0018-1.jpg"
              id="fonddecran"
              className="fondecran"
              alt="Image SVG"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );  
}