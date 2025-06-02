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
        <li><a href="#">Virtual Consultations</a></li>
        <li><a href="#">Group Presentations</a></li>
        <li><a href="#">Pet Care Resources</a></li>
        <li><a href="#">Adoption Resources</a></li>
        <li><a href="#">About Our Pexperts</a></li>

      </ul>
    </div>

    <div className="footer-column">
      <h4>Connect With Us</h4>
      <div className="social-icons">
        <a href="#">🐦</a>
        <a href="#">📘</a>
        <a href="#">📸</a>
        <a href="#">▶️</a>
        <a href="#">📌</a>
      </div>
      <p>Subscribe to Our Newsletter</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Your email" required />
        <button type="submit">Button</button>
      </form>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 Paradigm Pet Professionals. All rights reserved.</p>
    <div className="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Accessibility</a>
      <a href="#">Sitemap</a>
    </div>
  </div>
</footer>

  );
}
