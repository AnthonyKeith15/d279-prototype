import './CallToAction.css';
import { NavLink } from 'react-router-dom';

export default function CallToAction({ title, subtext, image }) {
  return (
    <div className="cta-block" id="unique-call-to-action">
      <div className="cta-text">
        <h3>{title}</h3>
        <p>{subtext}</p>
        <NavLink to="/contact" className="cta-button">Book a Consultation</NavLink>
      </div>
      <div className="cta-image">
        <img src={image} alt="Call to action visual" />
      </div>
    </div>
  );
}
