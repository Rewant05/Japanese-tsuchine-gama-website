import React from 'react';

interface WorkProps {
  work: {
    id: number;
    name: string;
    category: string;
    clayType: string;
    glazeType: string;
    firingMethod: string;
    usageScene: string;
    description: string;
    careNote: string;
    image?: string;
  };
}

const WorkCard: React.FC<WorkProps> = ({ work }) => {
  return (
    <div className="card">
      {work.image && (
        <div style={{ height: '200px', overflow: 'hidden', marginBottom: '1rem' }}>
          <img src={work.image} alt={work.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px 2px 0 0' }} />
        </div>
      )}
      <div className="card-tag">{work.category}</div>
      <h3 className="card-title">{work.name}</h3>
      <p className="card-desc">{work.description}</p>
      
      <div className="card-meta">
        <div className="meta-item">
          <span className="meta-label">土の種類</span>
          <span>{work.clayType}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">釉薬</span>
          <span>{work.glazeType}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">焼成</span>
          <span>{work.firingMethod}</span>
        </div>
        <div className="meta-item" style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed rgba(44, 41, 39, 0.1)' }}>
          <span className="meta-label">おすすめの場面</span>
          <span>{work.usageScene}</span>
        </div>
      </div>
      
      <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--color-copper)', backgroundColor: 'var(--color-beige)', padding: '0.75rem', borderRadius: '2px' }}>
        <strong>お取り扱い:</strong> {work.careNote}
      </div>
    </div>
  );
};

export default WorkCard;
