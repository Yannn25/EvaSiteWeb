import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import '../styles/accueil.css';

export const Accueil = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="accueil-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Nouveau à North Agboville</span>
            <h1 className="hero-title">
              EVA <span className="highlight">Cooking</span>
            </h1>
            <p className="hero-description">
              Votre nouveau spot brunch préféré arrive bientôt ! Découvrez une cuisine authentique 
              et savoureuse dans une atmosphère chaleureuse et conviviale.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                Nous contacter
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/services" className="btn-secondary">
                Nos services
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Plats délicieux</span>
              </div>
              <div className="stat">
                <span className="stat-number">5★</span>
                <span className="stat-label">Satisfaction client</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="Plat EVA Cooking"
                className="main-image"
              />
              <div className="floating-card">
                <i className="fas fa-utensils"></i>
                <span>Cuisine artisanale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={featuresRef}>
        <div className="container">
          <div className="section-header">
            <h2>Pourquoi choisir EVA Cooking ?</h2>
            <p>Une expérience culinaire unique vous attend</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Ingrédients frais</h3>
              <p>Nous utilisons uniquement des ingrédients locaux et de saison pour garantir la fraîcheur.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Service rapide</h3>
              <p>Commandez en ligne et récupérez votre repas en quelques minutes seulement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Fait avec amour</h3>
              <p>Chaque plat est préparé avec passion par notre équipe de chefs expérimentés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="social-section">
        <div className="container">
          <h3>Suivez-nous sur les réseaux sociaux</h3>
          <div className="social-links">
            <a href="#" className="social-link instagram">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="#" className="social-link youtube">
              <i className="fab fa-youtube"></i>
              <span>YouTube</span>
            </a>
            <a href="#" className="social-link facebook">
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );  
}