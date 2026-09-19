import React from 'react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { Marquee } from '../components/Marquee';
import {
  PROJECTS_DATA,
  METHODOLOGY_STAGES,
  LIVE_REELS,
  MATERIALS_DATA,
  TESTIMONIALS,
  COMPANY_STATS,
  CERTIFICATIONS,
  VideoReel
} from '../data/mockData';
import {
  ShieldCheck,
  Award,
  Clock3,
  HardHat,
  ArrowUpRight,
  Play,
  CheckCircle2,
  Phone,
  FileCheck,
  Compass,
  Building2,
  Flame
} from 'lucide-react';

import { AnimatedCounter } from '../components/AnimatedCounter';

interface HomePageProps {
  onNavigate: (route: string, projectSlug?: string) => void;
  onPlayVideo: (video: VideoReel) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onPlayVideo }) => {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* 01 — HERO */}
      <Hero
        currentProject={PROJECTS_DATA[0]}
        onNavigate={onNavigate}
      />

      {/* STATS RIBBON WITH NUMBERS ANIMATION */}
      <section style={{ position: 'relative', zIndex: 30 }}>
        <div className="container">
          <div className="stats-ribbon">
            {COMPANY_STATS.slice(0, 4).map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-value">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
                <span className="technical-coord" style={{ fontSize: '0.68rem', marginTop: '0.2rem' }}>
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — THE COMPANY / TRUST INTRODUCTION */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="trust-intro-grid">
            <div>
              <div className="section-top-indicator">
                <span className="section-number" aria-hidden="true">01</span>
                <span className="label-caps">THE COMPANY & ETHOS</span>
              </div>

              <h2 className="heading-xl" style={{ marginTop: '0.85rem' }}>
                BUILT ON ENGINEERING.<br />
                <span className="text-shimmer">DEFINED BY QUALITY.</span>
              </h2>

              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7', marginTop: '1.25rem' }}>
                At Royal Builders & Infrastructure, we reject the conventional short-cut culture of modern property promotion. Every project we erect is designed from soil mechanics upward — employing monolithic aluminium formwork (Mivan), certified Fe 550D rebar, and multi-tier third-party structural testing.
              </p>

              <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.65', marginTop: '1rem' }}>
                We believe trust is not earned through promotional rhetoric, but through published bar bending schedules, verifiable cube compressive test records, and a legally binding 60-month structural warranty on every square foot delivered.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '2rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent-primary)' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>RERA Compliant</div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Bank escrow secured</p>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent-primary)' }}>60-Mo</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>Structural Warranty</div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Five years guaranteed</p>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="btn btn-secondary btn-icon-pill"
                  data-cursor="pointer"
                >
                  <span>LEARN OUR HERITAGE & PHILOSOPHY</span>
                  <span className="icon-bubble">→</span>
                </button>
              </div>
            </div>

            {/* Asymmetric Imagery */}
            <div className="trust-img-container">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                alt="Royal Builders senior structural civil engineers inspecting reinforcement rebar on site"
                loading="lazy"
              />
              <div className="trust-floating-badge">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent-primary)' }} />
                  <span className="label-caps" style={{ margin: 0 }}>ENGINEERING FIELD AUDIT</span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  Active Supervision by IIT / Anna University Senior Structural Consultants
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — SIGNATURE PROJECTS */}
      <section className="section-padding bg-secondary" style={{ borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <SectionHeading
            number="02"
            badge="SIGNATURE WORK"
            title={<>PROJECTS THAT <span className="text-shimmer">SPEAK FOR THEMSELVES.</span></>}
            subtitle="From ultra-luxury seaside residences to high-density commercial campuses and smart townships."
            actionText="VIEW ALL PROJECTS"
            onActionClick={() => onNavigate('projects')}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={(slug) => onNavigate('project-detail', slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 04 — CONSTRUCTION METHODOLOGY */}
      <section className="section-padding" id="process">
        <div className="container">
          <SectionHeading
            number="03"
            badge="CONSTRUCTION WORKFLOW"
            title={<>EIGHT STAGES. <span className="text-shimmer">ZERO GUESSWORK.</span></>}
            subtitle="Every Royal Builders project follows an auditable, published civil engineering workflow — inspected and documented from approval to final key handover."
          />

          <div className="methodology-grid">
            {METHODOLOGY_STAGES.map((stage) => (
              <div key={stage.number} className="method-card">
                <span className="method-num">{stage.number}</span>
                <span className="badge badge-accent" style={{ alignSelf: 'flex-start', fontSize: '0.68rem' }}>
                  {stage.duration}
                </span>
                <h3 className="method-title">{stage.title}</h3>
                <p className="method-desc">{stage.subtitle}</p>
                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.85rem' }}>
                  <span className="technical-coord" style={{ fontSize: '0.7rem' }}>
                    QA GATE: {stage.qualityGate.substring(0, 55)}...
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — LIVE SITE REELS */}
      <section className="section-padding bg-secondary" style={{ borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <SectionHeading
            number="04"
            badge="LIVE SITE REELS"
            title={<>REAL PROGRESS. <span className="text-shimmer">UNFILTERED SITE VIDEO.</span></>}
            subtitle="Watch actual construction pours, aluminium formwork cycling, rebar testing, and drone aerials directly from our active construction sites."
          />

          <div className="reels-grid">
            {LIVE_REELS.map((reel) => (
              <div
                key={reel.id}
                className="reel-card"
                onClick={() => onPlayVideo(reel)}
                data-cursor="pointer"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onPlayVideo(reel);
                }}
                aria-label={`Play site video: ${reel.title}`}
              >
                <img src={reel.thumbnail} alt={reel.title} className="reel-thumbnail" loading="lazy" />
                <div className="reel-overlay" />

                <div className="reel-play-btn" aria-hidden="true">
                  <Play size={22} fill="currentColor" />
                </div>

                <div className="reel-meta">
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span className="badge badge-dark">{reel.milestone}</span>
                    <span className="badge badge-accent">{reel.duration}</span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: '1.3' }}>
                    {reel.title}
                  </h4>
                  <p className="text-muted" style={{ fontSize: '0.78rem', marginTop: '0.25rem' }}>
                    {reel.project} · {reel.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — MATERIALS LIBRARY SECTION */}
      <section className="section-padding" id="materials">
        <div className="container">
          <SectionHeading
            number="05"
            badge="SPECIFICATIONS"
            title={<>CERTIFIED MATERIALS <span className="text-shimmer">SPECIFICATION.</span></>}
            subtitle="Every material is brand-locked at contract: UltraTech, OPC 53 Grade & ACC Coastal cements; AAC, Red & Hollow bricks; and Makrana, Italian & Sang-e-Marmar marbles."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {MATERIALS_DATA.map((mat) => (
              <div key={mat.id} className="card-arch" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{ width: 85, height: 85, borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={mat.image} alt={mat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <span className="technical-coord" style={{ color: 'var(--color-accent-primary)' }}>
                    {mat.category.toUpperCase()}
                  </span>
                  <h4 className="truncate" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                    {mat.name}
                  </h4>
                  <p className="text-muted truncate" style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>
                    {mat.brand} · {mat.grade}
                  </p>
                  <span className="badge badge-dark" style={{ marginTop: '0.5rem', fontSize: '0.65rem' }}>
                    {mat.qualityStandard}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — WHY CHOOSE US */}
      <section className="section-padding bg-secondary" style={{ borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <SectionHeading
            number="06"
            badge="WHY ROYAL BUILDERS"
            title={<>BUILT ON DISCIPLINE. <span className="text-shimmer">NOT PROMISES.</span></>}
            subtitle="Our structural engineering principles are non-negotiable across every project we take on."
          />

          <div className="why-us-grid">
            <div className="why-card">
              <div className="why-icon-box">
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Engineering-First Execution</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Every site decision is directed by qualified civil engineers and certified project managers — never by subcontracted shortcuts.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>60-Month Structural Warranty</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Five full years of legal structural indemnity covering foundations, shear walls, columns, and slabs against settlement or cracks.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <HardHat size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>54M Safe Man-Hours</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Rigorous daily toolbox talks, 100% PPE enforcement, and zero Lost Time Incidents across 24 consecutive operating months.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <Clock3 size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>96% On-Time Delivery Track</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Disciplined floor cycles, pre-ordered steel and cement stockpiles, and Primavera P6 scheduling keep our handovers on time.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <FileCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Complete Data Transparency</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Access concrete cube test certificates, rebar mill sheets, and waterproofing flood test videos via our digital client dashboard.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>ISO & Green Building Accreditations</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Certified under ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Safety), plus IGBC Platinum green standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — CERTIFIED CODES SECTION */}
      <section className="section-padding" id="quality">
        <div className="container">
          <SectionHeading
            number="07"
            badge="CERTIFIED ENGINEERING CODES"
            title={<>STANDARDS <span className="text-shimmer">CODIFIED BY LAW.</span></>}
            subtitle="Safety and structural longevity are guaranteed through strict adherence to certified Indian Standards."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="card-arch" style={{ padding: '2.25rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem', border: '1px solid var(--color-border-accent)', background: 'linear-gradient(135deg, rgba(21, 26, 26, 0.8) 0%, rgba(14, 18, 18, 0.95) 100%)' }}>
                <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'rgba(143, 175, 155, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--color-border-accent)' }}>
                  <Award size={28} className="text-accent" />
                </div>
                <div>
                  <span className="badge badge-accent" style={{ marginBottom: '0.5rem', fontSize: '0.7rem' }}>
                    {cert.name}
                  </span>
                  <div style={{ fontWeight: 800, fontSize: '1.35rem', color: 'var(--color-text-primary)' }}>
                    {cert.label}
                  </div>
                  <p className="text-muted" style={{ marginTop: '0.6rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {cert.authority}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — TESTIMONIALS */}
      <section className="section-padding bg-secondary" style={{ borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <SectionHeading
            number="08"
            badge="CLIENT TESTIMONIALS"
            title="TESTIMONIALS GROUNDED IN REALITY."
            subtitle="Read unfiltered feedback from homeowners, medical specialists, and corporate facility leaders."
          />

          <div className="testimonials-grid">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="testimonial-card">
                <div>
                  <div style={{ display: 'flex', gap: '0.25rem', color: 'var(--color-accent-primary)', marginBottom: '1rem' }}>
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <blockquote className="testimonial-quote">
                    "{test.quote}"
                  </blockquote>
                </div>

                <div className="testimonial-author">
                  <img src={test.avatar} alt={test.clientName} className="testimonial-avatar" loading="lazy" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                      {test.clientName}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
                      {test.designation}
                    </div>
                    <div className="technical-coord" style={{ fontSize: '0.7rem', color: 'var(--color-accent-primary)' }}>
                      {test.project} · {test.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — ARCHITECTURAL MARQUEE */}
      <Marquee />

      {/* 11 — CONSULTATION CALLOUT BANNER */}
      <section className="section-padding">
        <div className="container">
          <div className="consultation-cta-banner">
            <div style={{ maxWidth: '780px' }}>
              <span className="label-caps">START THE CONVERSATION</span>
              <h2 className="heading-xl" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
                LET'S BUILD SOMETHING <span className="text-shimmer">THE NEXT GENERATION</span> WILL INHERIT.
              </h2>
              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                Whether developing an independent coastal villa, an apartment building, or an industrial warehouse, connect directly with our principal structural team for an initial site feasibility and cost review.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('quotation')}
                  className="btn btn-primary btn-icon-pill"
                  data-cursor="pointer"
                >
                  <span>CALCULATE CONSTRUCTION ESTIMATE</span>
                  <span className="icon-bubble">→</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="btn btn-secondary"
                  data-cursor="pointer"
                >
                  <span>TALK TO OUR ENGINEER</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
