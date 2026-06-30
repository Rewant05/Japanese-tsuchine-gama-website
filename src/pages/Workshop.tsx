import React from 'react';
import WorkshopCard from '../components/WorkshopCard';
import { siteData } from '../config/siteData';

const Workshop = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h1 className="title-jp">陶芸体験</h1>
          <p className="subtitle">Ceramic Workshop</p>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
          <p style={{ textAlign: 'center', color: 'var(--color-charcoal)', lineHeight: 2, marginBottom: '2rem' }}>
            土に触れ、自分の手で形を作る時間は、日常の喧騒を忘れさせてくれます。
            初めての方でも安心してご参加いただけるよう、スタッフが丁寧にサポートいたします。
            世界にひとつだけの、あなた自身の器を作ってみませんか。
          </p>
          
          <div style={{ padding: '1.5rem', backgroundColor: 'rgba(217, 107, 39, 0.1)', borderLeft: '4px solid var(--color-kiln-orange)', borderRadius: '2px' }}>
            <h4 style={{ color: 'var(--color-kiln-orange)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>ご参加にあたっての注意事項</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
              {siteData.safetyNotice}
              また、汚れてもよい服装でお越しいただき、爪は短く切っておくことをお勧めします。
            </p>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
          {siteData.workshops.map(workshop => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-ash)' }}>
          {siteData.craftDisclaimer}
        </div>
      </div>
    </section>
  );
};

export default Workshop;
