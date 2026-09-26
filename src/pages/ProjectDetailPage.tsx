import React, { useState } from 'react';
import { Project } from '../data/mockData';
import { MasterPlanViewer } from '../components/MasterPlanViewer';
import { ProgressTracker } from '../components/ProgressTracker';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { LightboxModal } from '../components/LightboxModal';
import {
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  ArrowLeft,
  ArrowUpRight,
  Maximize2,
  Phone,
  Sparkles,
  Play,
  MessageSquare
} from 'lucide-react';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
  onNavigate: (route: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onNavigate
}) => {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Site visit booking form state
  const [visitForm, setVisitForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '11:00 AM'
  });
  const [visitSubmitted, setVisitSubmitted] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitForm.name || !visitForm.phone) {
      alert('Please provide your name and phone number to schedule your site visit.');
      return;
    }

    const messageLines = [
      `*Site Visit Appointment - Royal Builders*`,
      `*Project:* ${project.name}`,
      `*Location:* ${project.location}, ${project.city}`,
      `*Visitor Name:* ${visitForm.name}`,
      `*Contact Phone:* ${visitForm.phone}`,
      `*Preferred Date:* ${visitForm.date || 'To be confirmed'}`,
      `*Time Slot:* ${visitForm.time}`
    ];

    const waUrl = `https://wa.me/919566693760?text=${encodeURIComponent(messageLines.join('\n'))}`;
    window.open(waUrl, '_blank');
    setVisitSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', color: 'var(--color-text-primary)' }}>
      {/* 01 — PROJECT HERO */}
      <section className="project-detail-hero">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img
            src={project.heroImage}
            alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(11,13,13,0.7) 0%, rgba(11,13,13,0.4) 40%, rgba(11,13,13,0.95) 90%, #0B0D0D 100%)'
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Back button */}
          <button
            type="button"
            onClick={onBack}
            className="btn btn-secondary"
            style={{ marginBottom: '2rem', padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
          >
            <ArrowLeft size={16} />
            <span>BACK TO PORTFOLIO</span>
          </button>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge badge-accent">{project.status}</span>
            <span className="badge badge-dark">{project.category}</span>
            <span className="technical-coord">RERA: {project.reraNumber}</span>
          </div>

          <h1 className="display-title" style={{ maxWidth: '980px' }}>
            {project.name}
          </h1>

          <p className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', fontSize: '1.05rem' }}>
            <MapPin size={18} className="text-accent" />
            <span>{project.location} · {project.city} ({project.coordinates})</span>
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
            <a href="#site-visit" className="btn btn-primary btn-icon-pill">
              <span>BOOK A PRIVATE SITE VISIT</span>
              <span className="icon-bubble">
                <ArrowUpRight size={14} />
              </span>
            </a>

            {project.videoUrl && (
              <a href="#site-video" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Play size={14} fill="currentColor" className="text-accent" />
                <span>WATCH SITE VIDEO</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => onNavigate('quotation')}
              className="btn btn-secondary"
            >
              <span>ESTIMATE SIMILAR PROJECT COST</span>
            </button>
          </div>
        </div>
      </section>

      {/* 02 — SPECIFICATION MATRIX */}
      <section className="container" style={{ position: 'relative', zIndex: 20 }}>
        <div className="project-specs-grid">
          <div className="spec-item">
            <span className="spec-label">PROJECT TYPE</span>
            <span className="spec-val">{project.category}</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">SITE PARCEL AREA</span>
            <span className="spec-val">{project.siteArea}</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">SUPER BUILT-UP AREA</span>
            <span className="spec-val">{project.builtUpArea}</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">TOTAL UNITS / CAPACITY</span>
            <span className="spec-val">{project.totalUnits}</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">STRUCTURAL SYSTEM</span>
            <span className="spec-val" style={{ fontSize: '0.95rem' }}>{project.structureType}</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">ARCHITECTURAL STYLE</span>
            <span className="spec-val" style={{ fontSize: '0.95rem' }}>{project.architecturalStyle}</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">COMPLETION TIMELINE</span>
            <span className="spec-val">{project.completionDate}</span>
          </div>

          <div className="spec-item">
            <span className="spec-label">STRUCTURAL WARRANTY</span>
            <span className="spec-val text-accent">60 Months Full Cover</span>
          </div>
        </div>
      </section>

      {/* 02.B — EXCLUSIVE COMMERCIAL OFFERING HIGHLIGHT */}
      {project.commercialOffering && (
        <section className="container" style={{ marginTop: '2.5rem', position: 'relative', zIndex: 20 }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(143, 175, 155, 0.12) 0%, rgba(20, 26, 25, 0.96) 100%)',
              border: '1px solid var(--color-accent-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div style={{ maxWidth: '640px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span className="badge badge-accent" style={{ background: 'var(--color-accent-primary)', color: '#090B0B', fontWeight: 800, padding: '0.35rem 0.85rem' }}>
                    PRIME COMMERCIAL INVESTMENT
                  </span>
                  <span className="technical-coord" style={{ color: 'var(--color-accent-muted)' }}>
                    HIGH-YIELD RETAIL PLAZA UNITS
                  </span>
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: '1.2' }}>
                  Each Shop 200 Sq. Ft. Super Built-Up Area for Sale
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.65' }}>
                  Prime commercial shops located directly opposite Vaniyambadi Bus Stand (Zain Plaza). Dual frontage access from CNA Road and Oosi Street, assuring maximum footfall and immediate high rental returns.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ background: 'var(--color-bg-primary)', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)', textAlign: 'center', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Unit Size</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-primary)', marginTop: '0.35rem' }}>200 Sq. Ft.</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>Super Built-Up Area</div>
                </div>

                <div style={{ background: 'var(--color-bg-primary)', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-accent-primary)', textAlign: 'center', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price For Sale</div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--color-accent-primary)', marginTop: '0.35rem' }}>₹62 Lakhs</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>Per Shop Unit</div>
                </div>

                <div style={{ background: 'var(--color-bg-primary)', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)', textAlign: 'center', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rental Income</div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--color-text-primary)', marginTop: '0.35rem' }}>₹40,000<span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>/mo</span></div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-muted)', marginTop: '0.15rem' }}>Rental Income 40k</div>
                </div>

                <a
                  href={`https://wa.me/919566693760?text=${encodeURIComponent('Hi Royal Builders, I am interested in inquiring about the 200 sq.ft commercial shop for sale at 62 lakhs (Rental income 40k) in Vnb Bus Stand Commercial Project Zain Plaza.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '1.1rem 1.75rem', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
                >
                  <MessageSquare size={18} />
                  Book Shop / Inquire
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 03 — PROJECT OVERVIEW & ARCHITECTURAL NARRATIVE */}
      <section className="detail-section-block">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            <div style={{ maxWidth: '840px' }}>
              <span className="label-caps">PROJECT OVERVIEW</span>
              <h2 className="heading-lg" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                Precision-engineered for structural endurance and timeless prestige.
              </h2>
              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                {project.description}
              </p>
            </div>

            {/* Key Amenities Grid */}
            <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '2.5rem' }}>
              <span className="label-caps">KEY ARCHITECTURAL HIGHLIGHTS & AMENITIES</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                {project.amenities.map((amenity, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
                    <CheckCircle2 size={16} className="text-accent" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — INTERACTIVE MASTER PLAN & ARCHITECTURAL BLUEPRINTS */}
      {(project.planImage || (project.masterPlanHotspots && project.masterPlanHotspots.length > 0)) && (
        <section className="detail-section-block">
          <div className="container">
            <div style={{ marginBottom: '2rem' }}>
              <span className="label-caps">ARCHITECTURAL BLUEPRINT & MASTER SCHEMATIC</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
                {project.planImage ? 'Sanctioned Architectural Blueprint & Layout' : 'Interactive Master Plan & Zoning'}
              </h2>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>
                {project.planImage
                  ? 'Official architectural AutoCAD floor plate and sanctioned schematic drawing. Click on the plan to inspect in full-resolution detail.'
                  : 'Hover or click on highlighted zones to inspect floor plates, structural classifications, and amenity locations.'}
              </p>
            </div>

            <MasterPlanViewer
              projectName={project.name}
              hotspots={project.masterPlanHotspots || []}
              planImage={project.planImage}
            />
          </div>
        </section>
      )}

      {/* 05 — CONSTRUCTION PROGRESS TRACKER */}
      <section className="detail-section-block">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="label-caps">CONSTRUCTION VERIFICATION</span>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
              Real-Time Construction Progress
            </h2>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              Audited stages from borehole soil investigation to pre-handover 240-point laser inspection.
            </p>
          </div>

          <ProgressTracker
            progressPercentage={project.progress}
            currentStageName={project.status === 'Completed' ? 'Handover & 60-Month Warranty' : 'Superstructure Monolith & Services'}
            completionDate={project.completionDate}
          />
        </div>
      </section>

      {/* 06 — BEFORE / AFTER COMPARISON SLIDER */}
      {project.beforeImage && project.afterImage && (
        <section className="detail-section-block">
          <div className="container">
            <div style={{ marginBottom: '2rem' }}>
              <span className="label-caps">STRUCTURAL TRANSFORMATION</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
                Before & After: The Engineering Evolution
              </h2>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>
                Drag the slider handle to inspect the transition from construction to completion.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel="CONSTRUCTION"
              afterLabel="COMPLETION"
            />
          </div>
        </section>
      )}

      {/* 07 — MATERIALS USED IN THIS PROJECT */}
      {project.materialsUsed && (
        <section className="detail-section-block">
          <div className="container">
            <div style={{ marginBottom: '2rem' }}>
              <span className="label-caps">BRAND-LOCKED SPECIFICATIONS</span>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
                Specified Structural & Finish Materials
              </h2>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>
                All materials are brand-locked at agreement with laboratory batch test certificates provided in the handover dossier.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {project.materialsUsed.map((mat, idx) => (
                <div key={idx} style={{ padding: '1.25rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <ShieldCheck size={18} className="text-accent" />
                    <span className="technical-coord">SPEC {idx + 1}</span>
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {mat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 07.5 — SITE VIDEO DOCUMENTATION */}
      {project.videoUrl && (
        <section className="detail-section-block bg-secondary" id="site-video" style={{ borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <div className="container">
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="label-caps" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Play size={12} className="text-accent" fill="currentColor" />
                  SITE VIDEO REEL & DOCUMENTATION
                </span>
                <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
                  {project.videoTitle || `${project.name} Construction Footage`}
                </h2>
              </div>
              <span className="badge badge-accent">AUTHENTIC SITE FOOTAGE</span>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border-subtle)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', background: '#050707' }}>
              <video
                src={project.videoUrl}
                controls
                playsInline
                poster={project.heroImage}
                style={{ width: '100%', maxHeight: '540px', objectFit: 'contain', display: 'block', background: '#000' }}
              >
                Your browser does not support HTML5 video streaming.
              </video>
            </div>
          </div>
        </section>
      )}

      {/* 08 — ARCHITECTURAL GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="detail-section-block">
          <div className="container">
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <span className="label-caps">HIGH-RESOLUTION ARCHIVE</span>
                <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>
                  Project Visual Dossier
                </h2>
              </div>
              <span className="technical-coord">CLICK ANY IMAGE FOR FULLSCREEN LIGHTBOX</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {project.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="card-arch"
                  style={{ aspectRatio: '16 / 10', cursor: 'pointer', position: 'relative' }}
                  data-cursor="pointer"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.name} photo view ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(11,13,13,0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid var(--color-border-subtle)'
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 09 — BOOK A SITE VISIT / ENQUIRY FORM */}
      <section className="section-padding" id="site-visit">
        <div className="container">
          <div className="contact-layout-grid">
            <div>
              <span className="label-caps">PRIVATE SITE APPOINTMENT</span>
              <h2 className="heading-lg" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
                Walk the site with our Principal Structural Engineer.
              </h2>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                Experience the structural mass, acoustic insulation, and precision MEP conduits in person. PPE (safety helmet and footwear) is provided on-site.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={18} className="text-accent" />
                  <span>Site Office: {project.location}, {project.city}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={18} className="text-accent" />
                  <span>Direct Site Coordinator: +91 99525 44776 / +91 95666 93760</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Calendar size={18} className="text-accent" />
                  <span>Site Visits: Mon–Sat, 10:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {!visitSubmitted ? (
                <form onSubmit={handleVisitSubmit}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
                    SCHEDULE SITE VISIT
                  </h3>

                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={visitForm.phone}
                      onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Preferred Date</label>
                      <input
                        type="date"
                        value={visitForm.date}
                        onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Time Slot</label>
                      <select
                        value={visitForm.time}
                        onChange={(e) => setVisitForm({ ...visitForm, time: e.target.value })}
                        className="form-select"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-icon-pill"
                    style={{ width: '100%', marginTop: '1rem' }}
                    data-cursor="pointer"
                  >
                    <span>CONFIRM PRIVATE VISIT BOOKING</span>
                    <span className="icon-bubble">→</span>
                  </button>
                </form>
              ) : (
                <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(143, 175, 155, 0.1)', borderRadius: 'var(--radius-md)' }}>
                  <Sparkles size={36} className="text-accent" style={{ margin: '0 auto 0.75rem' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    SITE VISIT SCHEDULED
                  </h4>
                  <p className="text-muted" style={{ margin: '0.5rem 0 1.25rem', fontSize: '0.875rem' }}>
                    Thank you, <strong>{visitForm.name}</strong>. Our site engineer for <strong>{project.name}</strong> has reserved your safety briefing and site inspection. Confirmation SMS sent to <strong>{visitForm.phone}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setVisitSubmitted(false)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem' }}
                  >
                    Book Another Slot
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        images={project.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        title={project.name}
      />
    </div>
  );
};
