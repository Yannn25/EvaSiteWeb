import React, { useEffect, useRef } from 'react';
import Navbar from './NavBar';
import '../styles/services.css';

export const Services = () => {
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);

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

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Nos Services</h1>
            <p>Découvrez notre gamme complète de services culinaires adaptés à tous vos besoins</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section" ref={servicesRef}>
        <div className="container">
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Restaurant sur place</h3>
              <p>Venez déguster nos spécialités dans notre restaurant chaleureux avec une ambiance unique.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Ambiance conviviale</li>
                <li><i className="fas fa-check"></i> Service de qualité</li>
                <li><i className="fas fa-check"></i> Menu varié</li>
              </ul>
              <div className="service-price">À partir de 15€</div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-motorcycle"></i>
              </div>
              <h3>Livraison rapide</h3>
              <p>Commandez en ligne et recevez vos plats préférés directement chez vous en moins de 30 minutes.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Livraison en 30min</li>
                <li><i className="fas fa-check"></i> Zone North Agboville</li>
                <li><i className="fas fa-check"></i> Emballage écologique</li>
              </ul>
              <div className="service-price">Frais de livraison 3€</div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <h3>À emporter</h3>
              <p>Commandez à l'avance et récupérez votre commande rapidement sans attendre.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Commande en ligne</li>
                <li><i className="fas fa-check"></i> Prêt en 15min</li>
                <li><i className="fas fa-check"></i> Sans frais supplémentaires</li>
              </ul>
              <div className="service-price">Gratuit</div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-birthday-cake"></i>
              </div>
              <h3>Événements privés</h3>
              <p>Organisez vos événements spéciaux avec notre service traiteur personnalisé.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Menu personnalisé</li>
                <li><i className="fas fa-check"></i> Service complet</li>
                <li><i className="fas fa-check"></i> Décoration incluse</li>
              </ul>
              <div className="service-price">Sur devis</div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>Paiement flexible</h3>
              <p>Payez comme vous le souhaitez avec nos multiples options de paiement sécurisées.</p>
              <ul className="service-features">
                <li><i className="fab fa-paypal"></i> PayPal</li>
                <li><i className="fas fa-credit-card"></i> Carte bancaire</li>
                <li><i className="fas fa-money-bill"></i> Espèces</li>
              </ul>
              <div className="service-price">Sécurisé</div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Engagement écologique</h3>
              <p>Nous nous engageons pour l'environnement avec des pratiques durables et responsables.</p>
              <ul className="service-features">
                <li><i className="fas fa-check"></i> Emballages biodégradables</li>
                <li><i className="fas fa-check"></i> Produits locaux</li>
                <li><i className="fas fa-check"></i> Zéro gaspillage</li>
              </ul>
              <div className="service-price">Écologique</div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Zone */}
      <section className="delivery-zone" ref={pricingRef}>
        <div className="container">
          <div className="zone-content">
            <div className="zone-text">
              <h2>Zone de livraison</h2>
              <p>Nous livrons dans toute la région de North Agboville et ses environs</p>
              <div className="zone-list">
                <div className="zone-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Centre-ville North Agboville</span>
                </div>
                <div className="zone-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Quartiers résidentiels</span>
                </div>
                <div className="zone-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Zone industrielle</span>
                </div>
                <div className="zone-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Campus universitaire</span>
                </div>
              </div>
            </div>
            <div className="zone-image">
              <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg" alt="Zone de livraison" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à commander ?</h2>
            <p>Découvrez nos délicieux plats et passez votre commande dès maintenant</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">
                Commander maintenant
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="tel:+225123456789" className="btn-secondary">
                <i className="fas fa-phone"></i>
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}