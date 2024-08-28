import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Importing images
import OwekeLogo from '../../assets/oweke-logo.png';  // Updated logo
import HeroImage from '../../assets/hero-image.png';
import EventImage from '../../assets/event-image.png';
import UsageImage from '../../assets/usage-image.png';
import FooterImage from '../../assets/footer-image.png'; // Importing footer image

// Importing social media icons
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-text">
          Oweke
        </div>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/events">Community Events</Link></li>
          <li><Link to="/counseling">Conseiller Love</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="get-app-button">Get App</button>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Une Rencontre <br /><span className="underline">Depuis Ta Webcam</span></h1>
          <p>Oweke : Votre Destination Pour L'Amour Et La Romance. <br />
            Connectez-Vous Avec Votre Partenaire Idéal Sur Oweke.</p>
          <button className="cta-button">En Profiter</button>
          
          {/* Social Media Links */}
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:info@oweke.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </header>

      {/* Envolée Section */}
      <section className="envolee-section">
        <h2>Envolez-vous à la rencontre de <br /><span className="underline">Votre âme sœur</span></h2>
        <p>
          L'amour est une aventure qui mérite d'être vécue, peu importe où on la trouve.
          Quel que soit le chemin que vous choisissez pour trouver l'amour, c'est une décision personnelle qui peut vous apporter beaucoup de joie et de bonheur.
          C'est une aventure qui peut vous amener dans des endroits inattendus et vous permettre de vivre des moments magiques.
          N'ayez pas peur de prendre le risque de trouver l'amour et de suivre votre cœur - vous pourriez bien trouver quelque chose de merveilleux.
          Alors, qu'attendez-vous ? Entrez dans l'aventure de la recherche de l'amour et vivez les plus beaux moments de votre vie avec Vizmeet.
        </p>
        <button className="cta-button">Participer À Un Événement</button>
      </section>

      {/* Community Events Section */}
      <section className="community-events">
        <div className="content">
          <h2>Faites partie de notre prochain <br /><span className="underline">Community Events.</span></h2>
          <p>
            Participez à nos prochains événements communautaires et rencontrez d’autres personnes comme vous. 
            <br /><strong>Partagez, discutez et trouvez peut-être votre partenaire de vie !</strong>
          </p>
          <button className="cta-button">Découvrez nos Community Events</button>
        </div>
        <img src={EventImage} alt="Community Events" className="section-image" />
      </section>

      {/* Simple to Use Section */}
      <section className="simple-use">
        <h3>Et c’est Simple à Utiliser!</h3>
        <p>Grâce à Oweke ! <br />Vitalizez votre vie amoureuse.</p>
        <img src={UsageImage} alt="Simple to Use" className="section-image" />
        <button className="cta-button">Accéder à Oweke Online</button>
      </section>

      <footer class="footer">
    <div class="footer-content">
        <h4>Community</h4>
        <div class="footer-links">
            <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Live Dating</a></li>
                <li><a href="#">Community Events</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul>
                <h4>Collaborateurs</h4>
                <li><a href="#">Se connecter</a></li>
                <li><a href="#">Espace Partenaires</a></li>
                <li><a href="#">S’inscrire</a></li>
            </ul>
            <ul>
                <h4>Politique de confidentialité & CGV</h4>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><a href="#">CGV</a></li>
            </ul>
        </div>
        <p>Copyright © 2023 Vizmeet</p>
    </div>
    <img src="path_to_footer_image.png" alt="Footer Decoration" class="footer-image">
</footer>
    </div>
  );
};
a
export default HomePage;