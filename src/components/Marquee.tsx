import React from 'react';

interface MarqueeProps {
  items?: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({
  items = [
    'CIVIL ENGINEERING',
    'PRECISION CRAFTSMANSHIP',
    'STRUCTURAL SAFETY',
    '100% TRANSPARENCY',
    '60-MONTH WARRANTY',
    'MIVAN FORMWORK',
    'ON-TIME DELIVERY',
    'SUSTAINABLE TOWNSHIPS'
  ]
}) => {
  // Duplicate array for seamless infinite scroll
  const repeated = [...items, ...items, ...items];

  return (
    <div className="marquee-track-wrapper" aria-hidden="true">
      <div className="marquee-content">
        {repeated.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>{item}</span>
            <span className="marquee-dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
