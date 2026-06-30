import React from 'react';
import { siteData } from '../config/siteData';

const About = () => {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center">
          <h1 className="title-jp">私たちについて</h1>
          <p className="subtitle">About Us</p>
        </div>

        <div style={{ padding: '3rem', backgroundColor: 'var(--color-beige)', borderRadius: '4px', marginBottom: '3rem' }}>
          <h2 className="title-jp" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            {siteData.tagline}
          </h2>
          <div style={{ lineHeight: 2, color: 'var(--color-charcoal)' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              土音窯（つちねがま）は、京都・東山のふもとにひっそりと佇む小さな陶芸工房です。
              私たちは、特別な日のための美術品ではなく、毎日の食卓で気兼ねなく使える「日々の器」を作っています。
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              使うほどに手になじみ、色が育っていく。
              工業製品にはない、ひとつひとつの歪みや釉薬のムラを「景色」として楽しんでいただける器を目指しています。
            </p>
            <p>
              また、自ら土に触れ、器を作り出す喜びを多くの方に体験していただきたいという思いから、
              初心者の方から経験者の方まで楽しめる陶芸体験教室も開講しております。
              忙しい日常から少し離れ、土と向き合う静かな時間を過ごしてみませんか。
            </p>
          </div>
        </div>

        <div style={{ border: '1px solid rgba(44,41,39,0.1)', padding: '2rem', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px dashed rgba(44,41,39,0.2)', paddingBottom: '0.5rem' }}>
            工房概要
          </h3>
          <dl style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '1rem', fontFamily: 'var(--font-sans)', fontSize: '0.95rem' }}>
            <dt style={{ color: 'var(--color-ash)' }}>工房名</dt>
            <dd>{siteData.atelierName}</dd>
            
            <dt style={{ color: 'var(--color-ash)' }}>所在地</dt>
            <dd>{siteData.address}</dd>
            
            <dt style={{ color: 'var(--color-ash)' }}>営業時間</dt>
            <dd>{siteData.businessHours}</dd>
            
            <dt style={{ color: 'var(--color-ash)' }}>連絡先</dt>
            <dd><a href={`mailto:${siteData.email}`} style={{ textDecoration: 'underline' }}>{siteData.email}</a></dd>
          </dl>
        </div>

        <div style={{ marginTop: '4rem', fontSize: '0.85rem', color: 'var(--color-ash)', padding: '1rem', backgroundColor: 'rgba(44,41,39,0.05)' }}>
          <strong>免責事項:</strong> {siteData.craftDisclaimer}
        </div>
      </div>
    </section>
  );
};

export default About;
