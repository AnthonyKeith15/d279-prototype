// src/components/HeroImage/HeroImage.jsx
import { NavLink } from 'react-router-dom';
import './HeroImage.css';

export default function HeroImage({ image, title, subtitle, buttonText = 'Book a New Pet Consultation' }) {
  return (
    <div className="hero-image" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <NavLink to="/contact" className="hero-button">
          {buttonText}
        </NavLink>
      </div>
    </div>
  );
}
