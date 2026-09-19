import React from 'react';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { ShieldCheck, FileCheck, Award, Clock } from 'lucide-react';

export const QuotationPage: React.FC = () => {
  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">TRANSPARENT COMMERCIALS</span>
            <span className="technical-coord">ZERO HIDDEN ESCALATION</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            LET'S BUILD SOMETHING REAL.
          </h1>
          <p className="text-muted" style={{ maxWidth: '720px', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Accurate, transparent civil engineering pricing. Calculate your approximate construction budget in real-time, or request an itemized Bill of Quantities (BOQ) with brand specification sheets.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div style={{ padding: '1.5rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
            <ShieldCheck size={22} className="text-accent" style={{ marginBottom: '0.5rem' }} />
            <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Brand-Locked Agreements</div>
            <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
              Specific cement, steel, and sanitaryware brands are written into your contract with zero substitution clauses.
            </p>
          </div>

          <div style={{ padding: '1.5rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
            <Clock size={22} className="text-accent" style={{ marginBottom: '0.5rem' }} />
            <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Milestone-Linked Payments</div>
            <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
              Release funds only after structural slab casting and QA engineer inspection clearance at each stage.
            </p>
          </div>

          <div style={{ padding: '1.5rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
            <Award size={22} className="text-accent" style={{ marginBottom: '0.5rem' }} />
            <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>60-Month Warranty Included</div>
            <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
              All structural components backed by a 5-year written legal warranty and bank indemnification.
            </p>
          </div>
        </div>

        {/* Interactive Calculator Component */}
        <QuoteCalculator />
      </div>
    </div>
  );
};
