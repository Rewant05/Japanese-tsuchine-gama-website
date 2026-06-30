import React from 'react';
import WorkCard from '../components/WorkCard';
import { siteData } from '../config/siteData';

const Works = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h1 className="title-jp">作品</h1>
          <p className="subtitle">Works & Collections</p>
        </div>
        
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem', color: 'var(--color-ash)', lineHeight: 1.8 }}>
          土音窯で制作している定番の器たちです。
          ひとつひとつ手作業で仕上げているため、色合いや形に個体差があります。
          それも手仕事ならではの味わいとしてお楽しみください。
        </p>

        <div className="grid">
          {siteData.works.map(work => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
        
        <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--color-beige)', textAlign: 'center', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-terracotta)' }}>ご購入について</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)', marginBottom: '1.5rem' }}>
            ※本サイトは架空のポートフォリオであるため、実際のオンラインストアは存在しません。
            作品の購入やご予約は承っておりませんのでご了承ください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
