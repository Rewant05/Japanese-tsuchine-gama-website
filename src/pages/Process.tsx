import React from 'react';
import ProcessTimeline from '../components/ProcessTimeline';

const Process = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h1 className="title-jp">制作工程</h1>
          <p className="subtitle">Craft Process</p>
        </div>
        
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--color-charcoal)', lineHeight: 2 }}>
          ひとつの器ができあがるまでには、多くの時間と手間がかかります。
          土音窯では、効率を求めるのではなく、土の声に耳を傾けながら
          それぞれの工程を丁寧に手作業で進めています。
          ここでは、その静かな手仕事のプロセスをご紹介します。
        </p>

        <ProcessTimeline />
      </div>
    </section>
  );
};

export default Process;
