import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">{siteData.websiteName}</div>
            <p className="footer-desc">
              {siteData.tagline}<br />
              {siteData.address}<br />
              {siteData.businessHours}<br />
              <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
            </p>
          </div>
          <div className="footer-links">
            {siteData.footerLinks.map((link) => (
              <Link key={link.path} to={link.path} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="disclaimer">
          {siteData.craftDisclaimer}
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} {siteData.romanizedName}. All Rights Reserved. This is a fictional website.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
