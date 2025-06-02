import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/">🐾 Paradigm Pets</NavLink>
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