import React, { useState } from 'react';
import { siteData } from '../config/siteData';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '作品について',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to backend here.
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div style={{ padding: '3rem', backgroundColor: 'var(--color-beige)', textAlign: 'center', borderRadius: '4px' }}>
        <h3 className="title-jp" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>お問い合わせを受け付けました</h3>
        <p style={{ color: 'var(--color-ash)', marginBottom: '2rem' }}>
          ご連絡ありがとうございます。内容を確認次第、担当者より折り返しご連絡いたします。<br />
          ※本サイトは架空のポートフォリオであるため、実際のご連絡は行われません。
        </p>
        <button onClick={() => setIsSubmitted(false)} className="btn-stamp outline">
          戻る
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">お名前</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          className="form-control" 
          required 
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email" className="form-label">メールアドレス</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="form-control" 
          required 
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="type" className="form-label">お問い合わせ種別</label>
        <select 
          id="type" 
          name="type" 
          className="form-control" 
          value={formData.type}
          onChange={handleChange}
        >
          <option value="作品について">作品について</option>
          <option value="陶芸体験について">陶芸体験について</option>
          <option value="取材・掲載について">取材・掲載について</option>
          <option value="コラボレーションについて">コラボレーションについて</option>
          <option value="その他">その他</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">メッセージ</label>
        <textarea 
          id="message" 
          name="message" 
          className="form-control" 
          required 
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <div style={{ fontSize: '0.8rem', color: 'var(--color-ash)', marginBottom: '2rem' }}>
        ※ご入力いただいた情報は、お問い合わせ対応のみに使用いたします。<br/>
        詳しくは<a href="/privacy-policy" style={{ textDecoration: 'underline' }}>プライバシーポリシー</a>をご確認ください。
      </div>

      <div className="text-center">
        <button type="submit" className="btn-stamp">送信する</button>
      </div>
    </form>
  );
};

export default ContactForm;
