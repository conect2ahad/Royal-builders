import React, { useState } from 'react';
import { Compass, CheckCircle2, Maximize2, X, ZoomIn } from 'lucide-react';

interface Hotspot {
  id: string;
  label: string;
  type: string;
  description: string;
  x: number;
  y: number;
}

interface MasterPlanViewerProps {
  projectName: string;
  hotspots?: Hotspot[];
  planImage?: string;
}

export const MasterPlanViewer: React.FC<MasterPlanViewerProps> = ({
  projectName,
  hotspots = [],
  planImage
}) => {
  const [activeSpot, setActiveSpot] = useState<Hotspot | null>(hotspots[0] || null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="masterplan-container">
      {/* Blueprint Top Ribbon */}
      <div className="flex-between" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Compass size={20} className="text-accent" />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.04em' }}>
            {planImage ? 'SANCTIONED ARCHITECTURAL BLUEPRINT' : 'ARCHITECTURAL MASTER PLAN'} · {projectName.toUpperCase()}
          </span>
        </div>
        <div className="technical-coord">
          {planImage ? 'AUTOCAD BIM ARCHITECTURAL DRAWING · HIGH-PRECISION SCHEMATIC' : 'SCALE: 1:500 · TRUE NORTH ALIGNED · AUTOCAD BIM LOD 400'}
        </div>
      </div>

      {/* Plan Display: Real Blueprint Image OR SVG Canvas */}
      {planImage ? (
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '420px',
            maxHeight: '620px',
            background: '#090B0B',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--color-border-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={() => setIsLightboxOpen(true)}
        >
          {/* Blueprint Grid Texture Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(143,175,155,0.12) 1px, transparent 0)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none'
            }}
          />

          <img
            src={planImage}
            alt={`Architectural Plan Drawing - ${projectName}`}
            style={{
              maxWidth: '100%',
              maxHeight: '580px',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              padding: '1rem',
              position: 'relative',
              zIndex: 2,
              filter: 'contrast(1.05)'
            }}
          />

          {/* Hover / Click to Enlarge Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              right: '1.25rem',
              background: 'rgba(9, 11, 11, 0.88)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--color-accent-primary)',
              borderRadius: 'var(--radius-md)',
              padding: '0.6rem 1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--color-accent-primary)',
              zIndex: 10,
              boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
            }}
          >
            <ZoomIn size={16} />
            <span>Click to Enlarge / Inspect Drawing</span>
          </div>

          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.25rem',
              background: 'rgba(9, 11, 11, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.4rem 0.85rem',
              fontSize: '0.75rem',
              color: 'var(--color-text-secondary)',
              zIndex: 10
            }}
          >
            SANCTIONED STRUCTURAL PLAN
          </div>
        </div>
      ) : (
        /* SVG Blueprint Canvas fallback */
        <div style={{ position: 'relative', width: '100%', background: '#090B0B', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          <svg
            viewBox="0 0 1000 600"
            className="masterplan-svg-canvas"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            {/* Blueprint Grid Lines */}
            <defs>
              <pattern id="planGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(143, 175, 155, 0.08)" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="1000" height="600" fill="#0A0D0D" />
            <rect width="1000" height="600" fill="url(#planGrid)" />

            {/* Site Boundary Outline */}
            <polygon
              points="80,100 880,80 940,520 120,540"
              fill="none"
              stroke="rgba(143, 175, 155, 0.3)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />

            {/* Peripheral Access Roads */}
            <path
              d="M 40,60 L 960,40 M 100,560 L 960,540 M 50,50 L 100,550 M 940,40 L 960,550"
              fill="none"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="14"
            />

            {/* Architectural Building Footprints */}
            <rect
              x="200"
              y="150"
              width="200"
              height="140"
              rx="12"
              fill="rgba(20, 26, 25, 0.9)"
              stroke={activeSpot?.id === 'spot-1' ? '#8FAF9B' : 'rgba(143, 175, 155, 0.35)'}
              strokeWidth={activeSpot?.id === 'spot-1' ? '3' : '1.5'}
            />
            <text x="300" y="225" fill="#F4F3EE" fontSize="13" fontWeight="700" textAnchor="middle">
              TOWER A · RESIDENTIAL
            </text>

            <rect
              x="550"
              y="140"
              width="200"
              height="140"
              rx="12"
              fill="rgba(20, 26, 25, 0.9)"
              stroke={activeSpot?.id === 'spot-2' ? '#8FAF9B' : 'rgba(143, 175, 155, 0.35)'}
              strokeWidth={activeSpot?.id === 'spot-2' ? '3' : '1.5'}
            />
            <text x="650" y="215" fill="#F4F3EE" fontSize="13" fontWeight="700" textAnchor="middle">
              TOWER B · RESIDENTIAL
            </text>

            <circle
              cx="480"
              cy="350"
              r="80"
              fill="rgba(27, 31, 31, 0.85)"
              stroke={activeSpot?.id === 'spot-3' ? '#8FAF9B' : 'rgba(255, 255, 255, 0.2)'}
              strokeWidth={activeSpot?.id === 'spot-3' ? '3' : '1.5'}
            />
            <text x="480" y="355" fill="#F4F3EE" fontSize="12" fontWeight="700" textAnchor="middle">
              THE ROYAL CLUB
            </text>

            <rect
              x="360"
              y="450"
              width="180"
              height="50"
              rx="8"
              fill="rgba(143, 175, 155, 0.15)"
              stroke="rgba(143, 175, 155, 0.4)"
              strokeWidth="1.5"
            />
            <text x="450" y="480" fill="#8FAF9B" fontSize="11" fontWeight="600" textAnchor="middle">
              50M OLYMPIC POOL
            </text>

            <ellipse
              cx="750"
              cy="400"
              rx="120"
              ry="75"
              fill="rgba(143, 175, 155, 0.08)"
              stroke="rgba(143, 175, 155, 0.25)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <text x="750" y="405" fill="#B8C8BB" fontSize="11" fontWeight="600" textAnchor="middle">
              BIO-CANOPY NATURE RESERVE
            </text>

            {/* Interactive Clickable Hotspots */}
            {hotspots.map((spot) => {
              const svgX = (spot.x / 100) * 1000;
              const svgY = (spot.y / 100) * 600;
              const isSelected = activeSpot?.id === spot.id;

              return (
                <g
                  key={spot.id}
                  className="hotspot-group"
                  onClick={() => setActiveSpot(spot)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    cx={svgX}
                    cy={svgY}
                    r={isSelected ? 18 : 12}
                    fill="rgba(143, 175, 155, 0.25)"
                    className="hotspot-outer-ring"
                  />
                  <circle
                    cx={svgX}
                    cy={svgY}
                    r="7"
                    fill={isSelected ? '#8FAF9B' : '#F4F3EE'}
                    stroke="#0B0D0D"
                    strokeWidth="2"
                  />
                  <text
                    x={svgX}
                    y={svgY - 14}
                    fill="#F4F3EE"
                    fontSize="11"
                    fontWeight="700"
                    textAnchor="middle"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
                  >
                    {spot.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Dynamic Detail Tooltip */}
          {activeSpot && (
            <div className="masterplan-tooltip">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge badge-accent">{activeSpot.type}</span>
                <span className="technical-coord">ZONE {activeSpot.id.toUpperCase()}</span>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--color-text-primary)' }}>
                {activeSpot.label}
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                {activeSpot.description}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Hotspot Selection Buttons / Zone Overview (if hotspots present) */}
      {hotspots && hotspots.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem', fontWeight: 600 }}>
            DESIGNATED ARCHITECTURAL ZONES & SPECIFICATIONS:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {hotspots.map((spot) => (
              <button
                key={spot.id}
                type="button"
                onClick={() => setActiveSpot(spot)}
                className={`btn btn-secondary ${activeSpot?.id === spot.id ? 'btn-primary' : ''}`}
                style={{ fontSize: '0.78rem', padding: '0.45rem 1rem' }}
              >
                <CheckCircle2 size={13} />
                <span>{spot.label}</span>
              </button>
            ))}
          </div>

          {planImage && activeSpot && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem 1.25rem',
                background: 'var(--color-bg-secondary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <span className="badge badge-accent" style={{ marginBottom: '0.35rem' }}>{activeSpot.type}</span>
                <h5 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>{activeSpot.label}</h5>
                <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>{activeSpot.description}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Fullscreen Lightbox Modal for Blueprint Inspection */}
      {isLightboxOpen && planImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 7, 7, 0.94)',
            backdropFilter: 'blur(12px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem'
          }}
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              color: '#F4F3EE'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                {projectName} · Architectural Plan Drawing
              </div>
              <div className="technical-coord" style={{ color: 'var(--color-accent-primary)' }}>
                HIGH RESOLUTION BLUEPRINT INSPECTION · SANCTIONED SCHEMATIC
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              aria-label="Close drawing viewer"
            >
              <X size={18} />
              <span>Close View</span>
            </button>
          </div>

          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'auto',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-accent)',
              background: '#090B0B',
              padding: '1rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={planImage}
              alt={`Full resolution blueprint - ${projectName}`}
              style={{
                maxWidth: '95vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
