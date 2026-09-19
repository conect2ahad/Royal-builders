import React, { useState } from 'react';
import { ArrowUpRight, Phone, MessageCircle, X, Sparkles, CheckCircle, Maximize2 } from 'lucide-react';
import { INTERIORS_DATA, InteriorItem } from '../data/mockData';

interface InteriorsPageProps {
  onNavigate: (route: string) => void;
}

export const InteriorsPage: React.FC<InteriorsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Spaces');
  const [activeModalItem, setActiveModalItem] = useState<InteriorItem | null>(null);

  const categories = [
    'All Spaces',
    'Living & Salons',
    'Master Suites',
    'Modular Kitchens',
    'Ceilings & Lighting',
    'Commercial & Office'
  ];

  const filteredItems = selectedCategory === 'All Spaces'
    ? INTERIORS_DATA
    : INTERIORS_DATA.filter((item) => item.category === selectedCategory);

  const handleWhatsAppEnquiry = (itemTitle?: string) => {
    const text = itemTitle
      ? `Hello Royal Builders, I am interested in discussing an interior fit-out inspired by: "${itemTitle}".`
      : 'Hello Royal Builders, I would like to discuss an Interior Architecture & Turnkey Fit-out project.';
    window.open(`https://wa.me/919566693760?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="interiors-page">
      {/* 01 — HERO HEADER */}
      <section className="section-padding bg-secondary" style={{ paddingTop: '140px', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <div className="hero-badges-row" style={{ marginBottom: '1.25rem' }}>
              <span className="label-caps">ROYAL INTERIORS · BESPOKE FIT-OUTS</span>
              <span className="badge badge-accent">TURNKEY LUXURY ARCHITECTURE</span>
            </div>

            <h1 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: '1.02' }}>
              BESPOKE INTERIOR ARCHITECTURE.<br />
              <span className="text-shimmer">DEFINED BY PRECISION.</span>
            </h1>

            <p className="text-muted" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.2rem)', lineHeight: '1.7', marginTop: '1.5rem', maxWidth: '760px' }}>
              We bring structural discipline into living spaces. Royal Builders designs and executes turnkey bespoke interiors with Italian marble inlays, factory-precision timber joinery, concealed architectural lighting, and German modular hardware — delivering generational luxury in writing.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
              <button
                type="button"
                onClick={() => handleWhatsAppEnquiry()}
                className="btn btn-primary btn-icon-pill"
                data-cursor="pointer"
              >
                <span>CONSULT INTERIOR ENGINEER</span>
                <span className="icon-bubble">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('quotation')}
                className="btn btn-secondary"
                data-cursor="pointer"
              >
                <span>CALCULATE FIT-OUT ESTIMATE</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — KEY METRICS RIBBON */}
      <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem', marginBottom: '3.5rem' }}>
        <div className="stats-ribbon" style={{ margin: 0 }}>
          <div className="stat-item">
            <div className="stat-value">100<span className="stat-suffix">%</span></div>
            <div className="stat-label">Turnkey Execution</div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>From 3D renders to handover</p>
          </div>
          <div className="stat-item">
            <div className="stat-value">19<span className="stat-suffix">+</span></div>
            <div className="stat-label">Showcased Spaces</div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Real executed portfolio</p>
          </div>
          <div className="stat-item">
            <div className="stat-value">60<span className="stat-suffix">-mo</span></div>
            <div className="stat-label">Joinery Warranty</div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Written structural guarantee</p>
          </div>
          <div className="stat-item">
            <div className="stat-value">0<span className="stat-suffix">mm</span></div>
            <div className="stat-label">Tolerance Standard</div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Zero-defect German hardware</p>
          </div>
        </div>
      </div>

      {/* 03 — FILTER TABS & INTERACTIVE GALLERY */}
      <section className="section-padding" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            <span className="label-caps">PORTFOLIO DIRECTORY</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <h2 className="heading-lg">
                  Executed Interior Realities
                </h2>
                <p className="text-muted" style={{ fontSize: '0.95rem', marginTop: '0.35rem' }}>
                  Explore our real completed interiors. Click any project to inspect specifications, materials, and request layout blueprints.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                    style={{
                      padding: '0.55rem 1.1rem',
                      fontSize: '0.78rem',
                      borderRadius: 'var(--radius-pill)',
                      textTransform: 'uppercase',
                      fontWeight: 700
                    }}
                    data-cursor="pointer"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interior Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="card-arch"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-subtle)'
                }}
                onClick={() => setActiveModalItem(item)}
                data-cursor="pointer"
              >
                {/* Image Wrap */}
                <div style={{ position: 'relative', aspectRatio: '16 / 11', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="interior-card-img"
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      zIndex: 2
                    }}
                  >
                    <span className="badge badge-dark" style={{ backdropFilter: 'blur(10px)', fontSize: '0.7rem' }}>
                      {item.category}
                    </span>
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(11, 13, 13, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-primary)',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      <Maximize2 size={14} />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span className="technical-coord" style={{ color: 'var(--color-accent-primary)' }}>
                      {item.dimensions}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.35rem', color: 'var(--color-text-primary)', lineHeight: '1.3' }}>
                      {item.title}
                    </h3>
                    <p className="text-muted" style={{ fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                      {item.highlight}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                      {item.materials.slice(0, 2).map((m, i) => (
                        <span key={i} className="badge badge-dark" style={{ fontSize: '0.65rem' }}>
                          {m}
                        </span>
                      ))}
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-primary)' }}>
                      VIEW DETAILS →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — CRAFTSMANSHIP & MATERIAL PILLARS */}
      <section className="section-padding bg-secondary" style={{ borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem', maxWidth: '700px' }}>
            <span className="label-caps">DISCIPLINED MATERIAL SELECTION</span>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Materials Engineered for Longevity
            </h2>
            <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
              We refuse to use short-lived particle boards or low-density laminates. Every Royal Builders interior is locked to verifiable architectural grades:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            <div className="why-card">
              <div className="why-icon-box">
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Imported Marble & Quartz</h3>
              <p className="text-muted" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Hand-picked slabs of Italian Statuario, Botticino, Makrana white, and zero-stain engineered quartz. Expertly laid with epoxy jointing and zero-lippage laser leveling.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <CheckCircle size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Precision Joinery & Hardwoods</h3>
              <p className="text-muted" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                BWP Grade marine plywood (IS 710 certified), solid Burma teak trims, natural oak veneers, and CNC-cut acoustic fluting with zero formaldehyde off-gassing.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>German Blum & Hafele Hardware</h3>
              <p className="text-muted" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Concealed soft-close tandem runners, hydraulic lift-up systems, servo-drive drawers, and anti-corrosive hinges backed by a 10-year manufacturer warranty.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <CheckCircle size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Circadian Architectural Lighting</h3>
              <p className="text-muted" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Concealed indirect ceiling cove illumination (Philips 3000K warm tone), magnetic low-voltage track spotlights, and smart automation lighting scene controllers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — 4-STAGE TURNKEY WORKFLOW */}
      <section className="section-padding">
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="label-caps">FOUR-STAGE PROCESS</span>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              How We Deliver Turnkey Interiors
            </h2>
            <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
              From initial 3D volumetric design to final snag-free key handover, every milestone is auditable.
            </p>
          </div>

          <div className="methodology-grid">
            <div className="method-card">
              <span className="method-num">01</span>
              <span className="badge badge-accent" style={{ alignSelf: 'flex-start' }}>STAGE 01</span>
              <h3 className="method-title">3D Concept & Layout</h3>
              <p className="method-desc">
                On-site laser measurements, architectural 3D spatial modeling, moodboard approvals, and realistic VR render walk-throughs.
              </p>
            </div>

            <div className="method-card">
              <span className="method-num">02</span>
              <span className="badge badge-accent" style={{ alignSelf: 'flex-start' }}>STAGE 02</span>
              <h3 className="method-title">Material Selection & Locking</h3>
              <p className="method-desc">
                Physical marble slab inspections, veneer grain matching, fabric swatching, and written brand-lock contract guarantees.
              </p>
            </div>

            <div className="method-card">
              <span className="method-num">03</span>
              <span className="badge badge-accent" style={{ alignSelf: 'flex-start' }}>STAGE 03</span>
              <h3 className="method-title">Factory Joinery & Site MEP</h3>
              <p className="method-desc">
                Modular precision factory pre-fabrication alongside on-site electrical conduit routing, plumbing pressure checks, and ceiling frameworks.
              </p>
            </div>

            <div className="method-card">
              <span className="method-num">04</span>
              <span className="badge badge-accent" style={{ alignSelf: 'flex-start' }}>STAGE 04</span>
              <h3 className="method-title">Handover & 60-Month Warranty</h3>
              <p className="method-desc">
                240-point snagging inspection, white-glove industrial cleaning, hardware testing, and formal handover with legal warranty certificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — CONSULTATION BANNER */}
      <section className="section-padding bg-secondary" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div className="consultation-cta-banner">
            <div style={{ maxWidth: '780px' }}>
              <span className="label-caps">START YOUR FIT-OUT PROJECT</span>
              <h2 className="heading-xl" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
                READY TO ELEVATE YOUR <span className="text-shimmer">LIVING SANCTUARY?</span>
              </h2>
              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                Connect with our principal interior architect and chief civil engineering team. We review floor plans, provide itemized cost estimates, and prepare bespoke spatial renderings.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => handleWhatsAppEnquiry()}
                  className="btn btn-primary btn-icon-pill"
                  data-cursor="pointer"
                >
                  <span>CHAT ON WHATSAPP (+91 95666 93760)</span>
                  <span className="icon-bubble">
                    <MessageCircle size={16} />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="btn btn-secondary"
                  data-cursor="pointer"
                >
                  <Phone size={16} className="text-accent" />
                  <span>TALK TO OUR ENGINEER</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — FULLSCREEN LIGHTBOX MODAL */}
      {activeModalItem && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModalItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            background: 'rgba(7, 9, 9, 0.94)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            className="card-arch"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '960px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-accent)',
              borderRadius: 'var(--radius-xl)',
              padding: 0,
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)'
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem 2rem',
                borderBottom: '1px solid var(--color-border-subtle)'
              }}
            >
              <div>
                <span className="badge badge-accent">{activeModalItem.category}</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '0.35rem', color: 'var(--color-text-primary)' }}>
                  {activeModalItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="theme-toggle-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image */}
            <div style={{ position: 'relative', width: '100%', maxHeight: '550px', background: '#000000', overflow: 'hidden' }}>
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                style={{
                  width: '100%',
                  maxHeight: '550px',
                  objectFit: 'contain',
                  margin: '0 auto'
                }}
              />
            </div>

            {/* Modal Details */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <span className="technical-coord" style={{ color: 'var(--color-text-muted)' }}>DIMENSIONS & SCALE</span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.25rem' }}>
                    {activeModalItem.dimensions}
                  </div>
                </div>

                <div>
                  <span className="technical-coord" style={{ color: 'var(--color-text-muted)' }}>SCOPE OF FIT-OUT</span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.25rem' }}>
                    {activeModalItem.scope}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span className="technical-coord" style={{ color: 'var(--color-text-muted)' }}>SPECIFIED MATERIALS & BRANDS</span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  {activeModalItem.materials.map((mat, i) => (
                    <span key={i} className="badge badge-dark" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ padding: '1.25rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)', marginBottom: '1.75rem' }}>
                <span className="technical-coord" style={{ color: 'var(--color-accent-primary)' }}>ENGINEERING HIGHLIGHT</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', marginTop: '0.25rem', lineHeight: '1.6' }}>
                  {activeModalItem.highlight}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => handleWhatsAppEnquiry(activeModalItem.title)}
                  className="btn btn-primary btn-icon-pill"
                  data-cursor="pointer"
                >
                  <span>DISCUSS THIS DESIGN ON WHATSAPP</span>
                  <span className="icon-bubble">
                    <MessageCircle size={16} />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveModalItem(null);
                    onNavigate('quotation');
                  }}
                  className="btn btn-secondary"
                  data-cursor="pointer"
                >
                  <span>CALCULATE COST</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
