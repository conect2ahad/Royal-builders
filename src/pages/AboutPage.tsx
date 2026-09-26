import React from 'react';
import { LEADERSHIP_TEAM, COMPANY_MILESTONES, COMPANY_STATS } from '../data/mockData';
import { Award, Compass, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

import { AnimatedCounter } from '../components/AnimatedCounter';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">ABOUT ROYAL BUILDERS</span>
            <span className="technical-coord">ESTABLISHED 2003 · CHENNAI · VANIYAMBADI</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            ENGINEERING ENDURANCE.<br />
            CRAFTING ARCHITECTURAL HERITAGE.
          </h1>
          <p className="text-muted" style={{ maxWidth: '780px', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Royal Builders & Infrastructure was founded on a straightforward engineering conviction: buildings should be built to endure for centuries, with every structural column, shear wall, and foundation raft verified by empirical science.
          </p>
        </div>

        {/* Editorial Story Split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', marginBottom: '5rem', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '440px', border: '1px solid var(--color-border-subtle)' }}>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                alt="Royal Builders engineering directors reviewing structural blueprint calculations"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className="label-caps">OUR GENESIS</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                Rejecting the Short-Cut Culture
              </h2>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                In 2003, civil engineer Er. Alexander Rajendran recognized that residential and commercial construction was plagued by lack of standardization — unwashed sand, uncalibrated concrete batching, and zero post-handover accountability.
              </p>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Royal Builders was created to bring industrial infrastructure discipline into property development. We implemented monolithic aluminium formwork (Mivan), strict NABL material batch testing, and a legally binding 60-month structural warranty on every square foot.
              </p>

              <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent-primary)' }}>
                    <AnimatedCounter value={20} suffix="+" />
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Years in Operation</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent-primary)' }}>
                    <AnimatedCounter value={60} suffix="+" />
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Landmark Handovers</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent-primary)' }}>
                    <AnimatedCounter value={3.8} suffix="M" />
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Sq. Ft. Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          <div className="card-arch" style={{ padding: '2.5rem' }}>
            <Compass size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>Our Engineering Creed</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.65' }}>
              To deliver structures characterized by zero deflection, acoustic silence, and verified seismic resilience — where construction data is shared openly with the client from soil boring to key handover.
            </p>
          </div>

          <div className="card-arch" style={{ padding: '2.5rem' }}>
            <Award size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>Our Craftsmanship Promise</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.65' }}>
              No compromise on materials. We partner solely with primary producers like UltraTech, Tata Tiscon, Saint-Gobain, and Kohler to guarantee that the materials inside your walls match the luxury on their surface.
            </p>
          </div>

          <div className="card-arch" style={{ padding: '2.5rem' }}>
            <ShieldCheck size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>Our Safety Ethos</h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.65' }}>
              Zero compromise on human life. Over 54 million incident-free man-hours achieved through rigorous 7-point PPE mandates and daily morning hazard briefings across all our sites.
            </p>
          </div>
        </div>

        {/* Principal Leadership Team — Founders & Owners */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="label-caps">FOUNDERS & EXECUTIVE OWNERSHIP</span>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Owners & Principal Engineering Leadership
            </h2>
            <p className="text-muted" style={{ fontSize: '1rem', maxWidth: '680px' }}>
              Royal Builders & Infrastructure is directed directly by its founding partners — combining over three decades of commercial acumen with high-tolerance civil engineering mastery.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Owner 1 */}
            <div
              className="card-arch"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: '1px solid var(--color-border-accent)',
                background: 'var(--color-bg-secondary)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge badge-accent">FOUNDER & DIRECTOR</span>
                  <span className="technical-coord" style={{ color: 'var(--color-text-muted)' }}>01 / LEADERSHIP</span>
                </div>
                
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                  Trichy Mohamed Waheedullah
                </h3>

                <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-accent-primary)' }}>
                    B.Com
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                    30+ Years Experience in this field
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.25rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    Over three decades of visionary industry leadership steering commercial operations, land acquisition, project finance, regulatory approvals, and client trust across South India.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-dark">30+ Years Mastery</span>
                <span className="badge badge-dark">Generational Trust</span>
                <span className="badge badge-dark">Commercial Governance</span>
              </div>
            </div>

            {/* Owner 2 */}
            <div
              className="card-arch"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: '1px solid var(--color-border-accent)',
                background: 'var(--color-bg-secondary)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge badge-accent">CO-FOUNDER & PRINCIPAL ENGINEER</span>
                  <span className="technical-coord" style={{ color: 'var(--color-text-muted)' }}>02 / TECHNICAL</span>
                </div>
                
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                  Trichy Mohamed Abdul Ahad
                </h3>

                <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-accent-primary)' }}>
                    B.E Civil Engineering
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                    Completed Multi Storey Projects
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.25rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    Specialized civil engineering director with an established track record executing high-tolerance monolithic multi-storey developments, deep raft foundations, seismic dampening, and strict IS code compliance.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-dark">B.E Civil</span>
                <span className="badge badge-dark">Multi Storey Specialist</span>
                <span className="badge badge-dark">IS 456 / 800 Authority</span>
              </div>
            </div>

            {/* Member 3 */}
            <div
              className="card-arch"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: '1px solid var(--color-border-accent)',
                background: 'var(--color-bg-secondary)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge badge-accent">ARCHITECTURAL DESIGN & PLANNING</span>
                  <span className="technical-coord" style={{ color: 'var(--color-text-muted)' }}>03 / PLANNING</span>
                </div>
                
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                  Trichy Mohamed Abdul Samad
                </h3>

                <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-accent-primary)' }}>
                    B.Arch
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                    Skilled in Planning & 3D Design
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.25rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    Architectural strategist driving spatial master planning, AutoCAD blueprints, photorealistic 3D visualization, and structural elevations across commercial plazas and bespoke residential developments.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-dark">B.Arch</span>
                <span className="badge badge-dark">Master Planning</span>
                <span className="badge badge-dark">3D Design & Viz</span>
              </div>
            </div>
          </div>
        </div>

        {/* 20-Year Milestone Timeline */}
        <div>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="label-caps">CHRONOLOGY OF EXCELLENCE</span>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Milestones: 2003 to Present
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {COMPANY_MILESTONES.map((m, idx) => (
              <div
                key={m.year}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '2rem',
                  padding: '1.75rem 2rem',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  alignItems: 'center'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent-primary)' }}>
                  {m.year}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                    {m.title}
                  </h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
