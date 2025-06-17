import React, { useState, useEffect, useRef } from 'react';
import Navbar from './NavBar';
import '../styles/contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  
  const contactRef = useRef(null);
  const infoRef = useRef(null);

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

    if (contactRef.current) observer.observe(contactRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="contact-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contactez-nous</h1>
            <p>Nous sommes là pour répondre à toutes vos questions et prendre vos commandes</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section" ref={contactRef}>
              <div className="form-header">
                <h2>Envoyez-nous un message</h2>
                <p>Remplissez le formulaire ci-dessous et nous vous répondrons rapidement</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="commande">Passer une commande</option>
                    <option value="reservation">Réservation</option>
                    <option value="evenement">Événement privé</option>
                    <option value="feedback">Avis/Suggestion</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre demande en détail..."
                    rows="6"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Envoyer le message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    Message envoyé avec succès ! Nous vous répondrons bientôt.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section" ref={infoRef}>
              <div className="info-card">
                <h3>Informations de contact</h3>
                
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Adresse</h4>
                    <p>North Agboville<br />Côte d'Ivoire</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-content">
                    <h4>Téléphone</h4>
                    <p>+225 123 456 789</p>
                    <small>Lun-Dim: 8h-22h</small>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>eva.cooking@email.com</p>
                    <small>Réponse sous 24h</small>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="info-content">
                    <h4>Horaires d'ouverture</h4>
                    <p>Lundi - Dimanche<br />8h00 - 22h00</p>
                  </div>
                </div>
              </div>
              
              <div className="quick-actions">
                <h3>Actions rapides</h3>
                <div className="action-buttons">
                  <a href="tel:+225123456789" className="action-btn call">
                    <i className="fas fa-phone"></i>
                    <span>Appeler maintenant</span>
                  </a>
                  <a href="https://wa.me/225123456789" className="action-btn whatsapp">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                  <a href="mailto:eva.cooking@email.com" className="action-btn email">
                    <i className="fas fa-envelope"></i>
                    <span>Envoyer un email</span>
                  </a>
                </div>
              </div>
              
              <div className="social-section">
                <h3>Suivez-nous</h3>
                <div className="social-links">
                  <a href="#" className="social-link instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" className="social-link facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Questions fréquentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Quels sont vos délais de livraison ?</h4>
              <p>Nous livrons en moyenne sous 30 minutes dans la zone de North Agboville.</p>
            </div>
            <div className="faq-item">
              <h4>Acceptez-vous les réservations ?</h4>
              <p>Oui, vous pouvez réserver une table en nous appelant ou via le formulaire de contact.</p>
            </div>
            <div className="faq-item">
              <h4>Proposez-vous des menus végétariens ?</h4>
              <p>Absolument ! Nous avons une large sélection de plats végétariens et végétaliens.</p>
            </div>
            <div className="faq-item">
              <h4>Organisez-vous des événements privés ?</h4>
              <p>Oui, nous proposons un service traiteur pour tous vos événements spéciaux.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};