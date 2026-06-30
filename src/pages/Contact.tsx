import React from 'react';
import ContactForm from '../components/ContactForm';
import { siteData } from '../config/siteData';

const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h1 className="title-jp">お問い合わせ</h1>
          <p className="subtitle">Contact Us</p>
        </div>
        
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--color-ash)', lineHeight: 1.8 }}>
          作品や陶芸体験に関するご質問、取材等のご依頼は、
          以下のフォームよりお気軽にお問い合わせください。
          <br /><br />
          ※本サイトは架空のポートフォリオサイトです。実際の送信機能は実装されておりません。
        </p>

        <ContactForm />
        
        <div style={{ marginTop: '5rem', borderTop: '1px solid rgba(44,41,39,0.1)', paddingTop: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem' }}>
          <div>
            <h4 style={{ color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>アトリエ所在地</h4>
            <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-charcoal)' }}>{siteData.address}</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>営業時間</h4>
            <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-charcoal)' }}>{siteData.businessHours}</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-terracotta)', marginBottom: '0.5rem' }}>メール</h4>
            <p style={{ fontFamily: 'var(--font-sans)' }}><a href={`mailto:${siteData.email}`}>{siteData.email}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
