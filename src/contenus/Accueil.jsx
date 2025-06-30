import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar'; 
import { Contact } from './Contact';

export const Accueil = () => {
  return (
    <div>
      <Navbar />
      <div className='site-container'>
        <div style={{ position: "relative"}}>
          <div style={{ width: "50%", float: "left", textAlign: "center"}}>
            <h1>EVA Cooking</h1>
            <p>Your new favorite brunch spot is coming to North Agboville! Join our mailing list to avail of all our early bird promos.</p>
            <a href="/contact">Contact us</a>
            <section id="emoticon">
              <h4>Nos Réseaux Sociaux</h4>
              <a href="/"><i class="fab fa-youtube"></i></a>
              <a href="/"><i class="fab fa-instagram"></i></a>
            </section>
          </div>
          <div style={{ width: "50%", float: "right" }}>
            <img
              src="https://1cd6sll7spmfn.cdn.shift8web.com/wp-content/uploads/2023/05/IMG-20230501-WA0018-1.jpg"
              id="fonddecran"
              className="fondecran"
              alt="Image SVG"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );  
}