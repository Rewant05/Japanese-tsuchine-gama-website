import React from 'react';
import { Link } from 'react-router-dom';

interface WorkshopProps {
  workshop: {
    id: number;
    name: string;
    duration: string;
    difficulty: string;
    audience: string;
    whatVisitorsMake: string;
    whatToBring: string;
    safetyNote: string;
    inquiryCta: string;
  };
}

const WorkshopCard: React.FC<WorkshopProps> = ({ workshop }) => {
  return (
    <div className="card">
      <div className="card-tag">{workshop.duration}</div>
      <h3 className="card-title">{workshop.name}</h3>
      
      <div className="card-meta" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
        <div className="meta-item">
          <span className="meta-label">難易度</span>
          <span>{workshop.difficulty}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">対象</span>
          <span>{workshop.audience}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">作れるもの</span>
          <span>{workshop.whatVisitorsMake}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">持ち物</span>
          <span>{workshop.whatToBring}</span>
        </div>
      </div>
      
      <div style={{ marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--color-ash)', padding: '0.75rem', backgroundColor: 'rgba(44, 41, 39, 0.05)', borderRadius: '2px' }}>
        <strong>安全上の注意:</strong> {workshop.safetyNote}
      </div>

      <div className="text-center">
        <Link to="/contact?type=workshop" className="btn-stamp outline" style={{ width: '100%' }}>
          {workshop.inquiryCta}
        </Link>
      </div>
    </div>
  );
};

export default WorkshopCard;
