import React from 'react';
import { siteData } from '../config/siteData';

const Terms = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h1 className="title-jp">利用規約</h1>
          <p className="subtitle">Terms and Conditions</p>
        </div>
        
        <div className="legal-content">
          <p style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--color-ash)' }}>
            最終更新日: {new Date().getFullYear()}年{new Date().getMonth() + 1}月{new Date().getDate()}日
          </p>
          
          {siteData.terms.sections.map((section, index) => (
            <div key={index} className="legal-section">
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
