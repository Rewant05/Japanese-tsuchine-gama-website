import React from 'react';
import { siteData } from '../config/siteData';

const ProcessTimeline = () => {
  return (
    <div className="timeline">
      {siteData.processSteps.map((step) => (
        <div key={step.step} className="timeline-item">
          <div className="timeline-step">{step.step}</div>
          <div className="timeline-content">
            <h3 className="timeline-title">{step.title}</h3>
            <p className="timeline-desc">{step.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-ash)' }}>
              <span><strong>所要時間:</strong> {step.timeRequired}</span>
            </div>
            <div className="timeline-insight">
              <strong>作り手の声:</strong> {step.craftNote}<br/>
              <strong>初めての方へ:</strong> {step.beginnerInsight}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTimeline;
