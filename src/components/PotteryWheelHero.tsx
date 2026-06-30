import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';

const PotteryWheelHero = () => {
  return (
    <section className="hero-wrapper">
      {/* Background rotating wheel */}
      <div className="pottery-wheel" aria-hidden="true"></div>
      
      {/* Floating labels */}
      <div className="clay-label label-1">土</div>
      <div className="clay-label label-2">火</div>
      <div className="clay-label label-3">釉薬</div>
      <div className="clay-label label-4">手仕事</div>
      <div className="clay-label label-5">器</div>
      
      <div className="hero-content container">
        <h1 className="hero-title">「土から生まれる、<br />静かなかたち。」</h1>
        <p className="hero-subtext">{siteData.description}</p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/works" className="btn-stamp">
            作品を見る
          </Link>
          <Link to="/workshop" className="btn-stamp outline">
            陶芸体験を知る
          </Link>
        </div>
      </div>
      
      {/* Bottom kiln fire strip */}
      <div className="kiln-fire-strip" aria-hidden="true"></div>
    </section>
  );
};

export default PotteryWheelHero;
