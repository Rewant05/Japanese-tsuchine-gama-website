import React from 'react';
import { Link } from 'react-router-dom';
import PotteryWheelHero from '../components/PotteryWheelHero';
import WorkCard from '../components/WorkCard';
import WorkshopCard from '../components/WorkshopCard';
import { siteData } from '../config/siteData';

const Home = () => {
  const featuredWorks = siteData.works.slice(0, 3);
  const featuredWorkshops = siteData.workshops.slice(0, 2);

  return (
    <>
      <PotteryWheelHero />
      
      {/* Featured Works */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="title-jp">日々の器</h2>
            <p className="subtitle">Featured Works</p>
          </div>
          
          <div className="grid">
            {featuredWorks.map(work => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/works" className="btn-stamp outline">すべての作品を見る</Link>
          </div>
        </div>
      </section>

      {/* Craft Philosophy Preview */}
      <section className="section" style={{ backgroundColor: 'var(--color-beige)' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 className="title-jp" style={{ marginBottom: '2rem' }}>土の声を聴く</h2>
          <p style={{ lineHeight: 2, marginBottom: '2rem', fontSize: '1.1rem' }}>
            土と向き合い、対話するように形を作り出す。
            炎に委ねられ、思いがけない景色を見せる器たち。
            私たちは、そんな不完全で美しい手仕事の温もりを
            皆さまの食卓へお届けしたいと願っています。
          </p>
          <Link to="/about" className="btn-stamp outline">土音窯について</Link>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="title-jp">陶芸体験</h2>
            <p className="subtitle">Workshops</p>
          </div>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {featuredWorkshops.map(workshop => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/workshop" className="btn-stamp outline">体験一覧を見る</Link>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="section" style={{ borderTop: '1px solid rgba(44,41,39,0.1)' }}>
        <div className="container text-center">
          <h2 className="title-jp">器ができるまで</h2>
          <p className="subtitle">Craft Process</p>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--color-ash)' }}>
            土作りから窯出しまで、いくつもの工程を経てひとつの器が完成します。
            ゆっくりと進む時間の中で、器は少しずつ表情を変えていきます。
          </p>
          <Link to="/process" className="btn-stamp">制作工程を覗く</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
