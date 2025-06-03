import './Footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
<footer className="footer">
  <div className="footer-content">
    <div className="footer-column">
      <h4>🐾 Paradigm Pet Professionals</h4>
      <p>Evidence-based pet care advice for every pet lover</p>
      <p>
        123 Pet Care Lane<br />
        Petville, CA 90210<br />
        info@paradigmpets.com<br />
        (555) 123-4567
      </p>
    </div>

    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/cat">Cats</NavLink></li>
        <li><NavLink to="/dog">Dogs</NavLink></li>
        <li><NavLink to="/fish">Fish</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Our Services</h4>
      <ul>
        <li>Virtual Consultations</li>
        <li>Group Presentations</li>
        <li>Pet Care Resources</li>
        <li>Adoption Resources</li>
        <li>About Our Pexperts</li>

      </ul>
    </div>

    <div className="footer-column">
      <h4>Connect With Us</h4>
      <div className="social-icons">
        🐦
        📘
        📸
        ▶️
        📌
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 Paradigm Pet Professionals. All rights reserved.</p>
    <div className="footer-links">
      Privacy Policy
      Terms of Service
      Accessibility
      Sitemap
    </div>
  </div>
</footer>

  );
}
