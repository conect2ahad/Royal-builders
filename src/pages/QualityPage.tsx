import React, { useState } from 'react';
import { QA_CHECKLIST_DOMAINS, CERTIFICATIONS } from '../data/mockData';
import {
  Award,
  ShieldCheck,
  HardHat,
  ChevronDown,
  CheckCircle2,
  FileCheck,
  Flame,
  Activity,
  AlertTriangle
} from 'lucide-react';

export const QualityPage: React.FC = () => {
  const [openAccordions, setOpenAccordions] = useState<number[]>([0, 1]);

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">QUALITY & SAFETY MANAGEMENT</span>
            <span className="technical-coord">ZERO-DEFECT PROTOCOLS</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            PROOF, NOT PROMISES.
          </h1>
          <p className="text-muted" style={{ maxWidth: '720px', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Quality and safety at Royal Builders are not aspirations; they are scientific systems measured, audited, and certified by international registries including ISO 9001:2015 and ISO 45001:2018.
          </p>
        </div>

        {/* Triple ISO Certification Banners */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="card-arch" style={{ padding: '1.75rem' }}>
              <Award size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                {cert.name}
              </h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                {cert.label}
              </p>
              <div className="technical-coord" style={{ marginTop: '0.75rem' }}>
                {cert.authority}
              </div>
            </div>
          ))}
        </div>

        {/* Safety Culture Section */}
        <div style={{ padding: 'clamp(2rem, 5vw, 4rem)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-subtle)', marginBottom: '4.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            <div>
              <span className="label-caps">SAFETY AS IDENTITY</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                54 Million Safe Man-Hours. Zero Lost-Time Incidents.
              </h2>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Every worker entering a Royal Builders construction zone undergoes mandatory induction. We enforce 100% Personal Protective Equipment (PPE), certified safety netting, hydraulic edge protection, and daily morning toolbox hazard analyses.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.25rem', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
                  <HardHat size={22} className="text-accent" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>7-Point Mandatory PPE</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                    Helmets, steel-toe boots, double-lanyard safety harnesses, high-visibility vests, and eye protection.
                  </p>
                </div>

                <div style={{ padding: '1.25rem', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
                  <Activity size={22} className="text-accent" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>Daily Toolbox Briefings</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                    15-minute daily site hazard discussions conducted before crane lifting or concrete pumping operations.
                  </p>
                </div>

                <div style={{ padding: '1.25rem', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
                  <ShieldCheck size={22} className="text-accent" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>Certified Scaffolding</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                    Cuplock tubular steel systems inspected weekly by third-party certified safety scaffolding auditors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 240-Point QA Checklist Accordion Explorer */}
        <div>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="label-caps">AUDITABLE QUALITY MATRIX</span>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              The 240-Point Handover Inspection Checklist
            </h2>
            <p className="text-muted" style={{ fontSize: '1rem' }}>
              Click each construction domain to explore the rigorous checks required before any unit is cleared for resident handover.
            </p>
          </div>

          <div className="qa-checklist-accordions">
            {QA_CHECKLIST_DOMAINS.map((domain, index) => {
              const isOpen = openAccordions.includes(index);
              return (
                <div key={index} className="qa-accordion-item">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="qa-accordion-trigger"
                    aria-expanded={isOpen}
                  >
                    <span>{domain.title}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform var(--transition-fast)'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div className="qa-accordion-body">
                      {domain.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="qa-check-row">
                          <CheckCircle2 size={18} className="qa-check-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Structural Testing Laboratory Equipment */}
        <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-subtle)' }}>
          <span className="label-caps">ON-SITE TESTING REGIME</span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Laboratory Verification Conducted on Every Project
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.25rem', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-accent-primary)' }}>
                Universal Testing Machine (UTM)
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                Tensile strength and 180° bend testing performed on rebar samples per lot to ensure Fe 550D elongation compliance.
              </p>
            </div>

            <div style={{ padding: '1.25rem', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-accent-primary)' }}>
                Concrete Cube Compressive Tests
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                6 cubes cast per 50m³ concrete pour; crushed at 7 days and 28 days to verify structural compressive strength.
              </p>
            </div>

            <div style={{ padding: '1.25rem', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-accent-primary)' }}>
                Ultrasonic Pulse Velocity (UPV)
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                Non-destructive acoustic wave velocity testing through columns and shear walls to confirm zero internal honeycombs.
              </p>
            </div>

            <div style={{ padding: '1.25rem', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-accent-primary)' }}>
                Hydrostatic Pressure Testing (15 bar)
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                24-hour continuous pressure holding on all concealed CPVC and copper water pipes before wall plastering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
