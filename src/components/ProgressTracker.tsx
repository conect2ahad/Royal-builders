import React, { useState } from 'react';
import { CheckCircle2, Clock, Calendar, ShieldCheck, FileCheck } from 'lucide-react';

interface ProgressTrackerProps {
  progressPercentage: number;
  currentStageName: string;
  completionDate: string;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  progressPercentage,
  currentStageName,
  completionDate
}) => {
  const [selectedStageIndex, setSelectedStageIndex] = useState(3);

  const stages = [
    { name: 'Planning & Feasibility', pct: 100, status: 'completed', date: 'Q1 2024', details: 'Geotechnical soil investigation, bore-hole SPT testing to 22m, and structural FSI sanction completed.' },
    { name: 'Architectural & BIM', pct: 100, status: 'completed', date: 'Q2 2024', details: 'Revit BIM Level-3 3D modeling, ETABS seismic structural simulation, and MEP clash-detection signed off.' },
    { name: 'Approvals & RERA', pct: 100, status: 'completed', date: 'Q3 2024', details: 'State RERA registration TN/01/Building/0382/2023, Fire NOC, and CMDA sanction order received.' },
    { name: 'Foundation & Raft', pct: 100, status: 'completed', date: 'Q4 2024', details: '1,400mm thick continuous raft pour with low heat hydration cement and dynamic pile integrity testing.' },
    { name: 'Superstructure Monolith', pct: 85, status: 'in-progress', date: 'Current (Q1 2026)', details: '18th floor slab casting with Mivan aluminium formwork; 7-day floor cycle maintained with laser alignment.' },
    { name: 'Masonry & Partitions', pct: 70, status: 'in-progress', date: 'Q2 2026', details: 'First-class chamber red brick walls and Porotherm acoustic partition blocks laid with zero-efflorescence mortar.' },
    { name: 'MEP Services', pct: 60, status: 'in-progress', date: 'Q3 2026', details: 'FRLS concealed copper conduit wiring, 15-bar hydraulic plumbing pressure tests, and acoustic drainage stacks.' },
    { name: 'Finishing & Glazing', pct: 30, status: 'upcoming', date: 'Q4 2026', details: 'Saint-Gobain double-glazed facade unitization, Italian marble book-matched flooring, and sanitaryware.' },
    { name: '240-Point QA Handover', pct: 0, status: 'upcoming', date: completionDate, details: 'Full snag-free laser audit, digital asset dossier handover, and commencement of 60-month structural warranty.' }
  ];

  const currentStage = stages[selectedStageIndex];

  return (
    <div className="progress-tracker-wrap">
      {/* Top Overview Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div style={{ padding: '1.25rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
          <span className="label-caps">CURRENT OVERALL STATUS</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.35rem', color: 'var(--color-accent-primary)' }}>
            {progressPercentage}% COMPLETED
          </div>
        </div>

        <div style={{ padding: '1.25rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
          <span className="label-caps">ACTIVE ENGINEERING PHASE</span>
          <div style={{ fontSize: '1.15rem', fontWeight: 700, marginTop: '0.35rem', color: 'var(--color-text-primary)' }}>
            {currentStageName}
          </div>
        </div>

        <div style={{ padding: '1.25rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
          <span className="label-caps">TARGET HANDOVER</span>
          <div style={{ fontSize: '1.15rem', fontWeight: 700, marginTop: '0.35rem', color: 'var(--color-text-primary)' }}>
            {completionDate}
          </div>
        </div>
      </div>

      {/* Main Linear Progress Bar */}
      <div style={{ background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
        <div className="flex-between" style={{ marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
            CONSTRUCTION LIFECYCLE PROGRESS
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
            {progressPercentage}% OF 100%
          </span>
        </div>

        <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${progressPercentage}%`,
              background: 'linear-gradient(90deg, #8FAF9B 0%, #B8C8BB 100%)',
              borderRadius: 'var(--radius-pill)',
              transition: 'width 1s ease'
            }}
          />
        </div>
      </div>

      {/* 9 Stage Navigation Pills */}
      <div className="stages-nav-list">
        {stages.map((stage, idx) => {
          const isSelected = selectedStageIndex === idx;
          const isCompleted = stage.status === 'completed';
          const isInProgress = stage.status === 'in-progress';

          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedStageIndex(idx)}
              className={`stage-nav-btn ${isSelected ? 'active' : ''}`}
            >
              <div className="flex-between" style={{ marginBottom: '0.25rem' }}>
                <span className="stage-nav-number">0{idx + 1}</span>
                {isCompleted ? (
                  <CheckCircle2 size={13} className="text-accent" />
                ) : isInProgress ? (
                  <Clock size={13} style={{ color: '#E2B98E' }} />
                ) : (
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                )}
              </div>
              <div className="stage-nav-title truncate">{stage.name}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Dossier */}
      <div className="stage-detail-card">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-accent">STAGE 0{selectedStageIndex + 1}</span>
            <span className={`badge ${currentStage.status === 'completed' ? 'badge-completed' : currentStage.status === 'in-progress' ? 'badge-construction' : 'badge-upcoming'}`}>
              {currentStage.status.toUpperCase()}
            </span>
          </div>

          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
            {currentStage.name}
          </h3>

          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            {currentStage.details}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={15} className="text-accent" />
              <span>TIMELINE: {currentStage.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={15} className="text-accent" />
              <span>QA GATE: IS COMPLIANT</span>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
          <div className="label-caps" style={{ marginBottom: '0.5rem' }}>ENGINEER VERIFICATION RECORD</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--color-text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileCheck size={14} className="text-accent" />
              <span>Laser Vertical Plumb Tolerance: Passed (±2mm)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileCheck size={14} className="text-accent" />
              <span>Cube Compressive Strength: 58.4 MPa @ 28 Days</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileCheck size={14} className="text-accent" />
              <span>Ultrasonic Rebar Cover Depth: 40mm uniform</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
