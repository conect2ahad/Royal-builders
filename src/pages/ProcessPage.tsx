import React, { useState } from 'react';
import { METHODOLOGY_STAGES, ProcessStage } from '../data/mockData';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, FileCheck, Layers } from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (route: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = METHODOLOGY_STAGES[activeStageIndex];

  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">CONSTRUCTION METHODOLOGY</span>
            <span className="technical-coord">7 PHASES · ZERO GUESSWORK</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            ENGINEERED DISCIPLINE FROM SOIL TO SKY.
          </h1>
          <p className="text-muted" style={{ maxWidth: '720px', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Every Royal Builders development runs on the same published civil engineering methodology. Inspected, logged on digital tablets, and delivered with zero compromises.
          </p>
        </div>

        {/* Interactive Stage Selector Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem', marginBottom: '3rem' }}>
          {METHODOLOGY_STAGES.map((st, idx) => (
            <button
              key={st.number}
              type="button"
              onClick={() => setActiveStageIndex(idx)}
              className={`filter-pill ${activeStageIndex === idx ? 'active' : ''}`}
              style={{ padding: '0.85rem 0.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}
            >
              <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>STAGE {st.number}</span>
              <span className="truncate" style={{ fontSize: '0.825rem', fontWeight: 700 }}>
                {st.title.split('&')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="card-arch" style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem)', background: 'var(--color-bg-secondary)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span className="section-number" style={{ fontSize: '3rem', color: 'var(--color-accent-primary)' }}>
                    {activeStage.number}
                  </span>
                  <div>
                    <span className="badge badge-accent">{activeStage.duration}</span>
                    <h2 className="heading-lg" style={{ marginTop: '0.25rem' }}>
                      {activeStage.title}
                    </h2>
                  </div>
                </div>

                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', fontWeight: 500, marginBottom: '1rem', lineHeight: '1.6' }}>
                  {activeStage.subtitle}
                </p>

                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  {activeStage.description}
                </p>

                {/* Quality Gate Box */}
                <div style={{ padding: '1.25rem', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-accent)', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    <ShieldCheck size={18} />
                    <span>MANDATORY QUALITY GATE</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', lineHeight: '1.5' }}>
                    {activeStage.qualityGate}
                  </p>
                </div>

                {/* Deliverables List */}
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                    KEY STAGE DELIVERABLES (DOCUMENTED IN HANDOVER DOSSIER)
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                    {activeStage.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)' }}>
                        <CheckCircle2 size={16} className="text-accent" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stage Photo Evidence Preview */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', maxHeight: '420px', border: '1px solid var(--color-border-subtle)' }}>
              <img
                src={activeStage.image}
                alt={`Stage ${activeStage.number} - ${activeStage.title}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Next Stage Navigation Action */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2.5rem' }}>
          <button
            type="button"
            onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeStageIndex === 0}
            className="btn btn-secondary"
            style={{ opacity: activeStageIndex === 0 ? 0.3 : 1 }}
          >
            ← PREVIOUS STAGE
          </button>

          <span className="technical-coord">
            PHASE {activeStageIndex + 1} OF {METHODOLOGY_STAGES.length}
          </span>

          <button
            type="button"
            onClick={() => setActiveStageIndex((prev) => Math.min(METHODOLOGY_STAGES.length - 1, prev + 1))}
            disabled={activeStageIndex === METHODOLOGY_STAGES.length - 1}
            className="btn btn-primary"
            style={{ opacity: activeStageIndex === METHODOLOGY_STAGES.length - 1 ? 0.3 : 1 }}
          >
            NEXT STAGE →
          </button>
        </div>

        {/* Process Guarantee Callout */}
        <div style={{ marginTop: '5rem', padding: '2.5rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Transparent Client Dashboard
          </h3>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
            Every Royal Builders client receives personal login credentials to view live weekly drone footage, concrete pour schedules, and slump test records as each phase is completed.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="btn btn-secondary"
          >
            Request Demo Client Portal Walkthrough
          </button>
        </div>
      </div>
    </div>
  );
};
