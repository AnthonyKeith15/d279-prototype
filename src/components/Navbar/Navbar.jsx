import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/PPPLogo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Paradigm Pet Professionals Logo" />
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/cat">Cats</NavLink></li>
        <li><NavLink to="/dog">Dogs</NavLink></li>
        <li><NavLink to="/fish">Fish</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}