import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteData } from '../config/siteData';

const CraftNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          {siteData.websiteName}
        </Link>

        <div className="nav-links">
          {siteData.navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-stamp" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
            体験を予約相談
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {siteData.navLinks.map((link) => (
          <Link key={link.path} to={link.path} className="nav-link" onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="btn-stamp" onClick={closeMenu}>
          体験を予約相談
        </Link>
      </div>
    </>
  );
};

export default CraftNavbar;
