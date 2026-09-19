import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Sparkles, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Bespoke Luxury Villa',
    location: '',
    plotArea: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName || !formState.phone) {
      alert('Please fill out your name and telephone number.');
      return;
    }

    const messageLines = [
      `*New Consultation Inquiry - Royal Builders*`,
      `*Full Name:* ${formState.fullName}`,
      `*Phone Number:* ${formState.phone}`,
      `*Email Address:* ${formState.email || 'Not provided'}`,
      `*Project Typology:* ${formState.projectType}`,
      `*Site Location:* ${formState.location || 'Not specified'}`,
      `*Site / Plot Area:* ${formState.plotArea || 'Not specified'}`,
      `*Project Requirements:* ${formState.message || 'None'}`
    ];

    const waUrl = `https://wa.me/919566693760?text=${encodeURIComponent(messageLines.join('\n'))}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">CONNECT DIRECTLY</span>
            <span className="technical-coord">CHENNAI · VANIYAMBADI</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            TALK TO OUR ENGINEER.
          </h1>
          <p className="text-muted" style={{ maxWidth: '720px', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Skip sales intermediaries. Our Chief Structural Consultants and Senior Project Directors are available to analyze your plot survey, architectural concepts, and budgetary milestones.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-layout-grid">
          {/* Left Column: Office Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Primary Contacts & Communication Card */}
            <div className="card-arch" style={{ padding: '2rem' }}>
              <span className="badge badge-accent" style={{ marginBottom: '1rem' }}>DIRECT ENGINEERING HOTLINES</span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                Direct Site & Technical Board
              </h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Reach our principal engineering and project coordination team directly:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.25rem' }}>
                <a href="tel:+919566693760" className="nav-phone-link" style={{ display: 'flex', fontSize: '0.95rem' }}>
                  <Phone size={16} className="text-accent" />
                  <span>+91 95666 93760 (Primary / WhatsApp)</span>
                </a>

                <a href="tel:+919952544776" className="nav-phone-link" style={{ display: 'flex', fontSize: '0.95rem' }}>
                  <Phone size={16} className="text-accent" />
                  <span>+91 99525 44776 (Direct Line)</span>
                </a>

                <a
                  href="https://wa.me/919566693760?text=Hello%20Royal%20Builders%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-phone-link"
                  style={{ display: 'flex', fontSize: '0.95rem' }}
                >
                  <MessageCircle size={16} className="text-accent" />
                  <span>WhatsApp Principal Engineer: +91 95666 93760</span>
                </a>

                <a href="mailto:conect2ahad@gmail.com" className="nav-phone-link" style={{ display: 'flex', fontSize: '0.95rem' }}>
                  <Mail size={16} className="text-accent" />
                  <span>conect2ahad@gmail.com</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                  <Clock size={16} className="text-accent" />
                  <span>Working Hours: Mon–Sat, 09:00 – 19:00 IST</span>
                </div>
              </div>
            </div>

            {/* Two Office Branches */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {/* Branch 1: Chennai Office */}
              <div className="card-arch" style={{ padding: '1.5rem', border: '1px solid var(--color-border-accent)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={16} className="text-accent" />
                  <span className="label-caps" style={{ margin: 0 }}>CHENNAI BRANCH</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Periamet Office
                </h4>
                <p className="text-muted" style={{ fontSize: '0.88rem', marginTop: '0.35rem', lineHeight: '1.5' }}>
                  23/B 2nd floor perianna maistry Street,<br />
                  Periamet Chennai -600003
                </p>
              </div>

              {/* Branch 2: Vaniyambadi Office */}
              <div className="card-arch" style={{ padding: '1.5rem', border: '1px solid var(--color-border-accent)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={16} className="text-accent" />
                  <span className="label-caps" style={{ margin: 0 }}>VANIYAMBADI BRANCH</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Khaderpet Office
                </h4>
                <p className="text-muted" style={{ fontSize: '0.88rem', marginTop: '0.35rem', lineHeight: '1.5' }}>
                  489/3 jinnah Road Khaderpet,<br />
                  Vaniyambadi -635751
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Consultation Form */}
          <div className="contact-form-wrap">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <span className="label-caps">DIRECT INQUIRY</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '0.35rem', marginBottom: '1.5rem' }}>
                  Initiate Construction Consultation
                </h3>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sivakumar"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99525 XXXXX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Project Typology</label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="form-select"
                    >
                      <option value="Bespoke Luxury Villa">Bespoke Luxury Villa</option>
                      <option value="Residential Apartment">Residential Apartment</option>
                      <option value="Commercial Campus">Commercial Campus</option>
                      <option value="Township Development">Township Development</option>
                      <option value="Industrial Facility">Industrial Facility</option>
                      <option value="Heritage Renovation">Heritage Renovation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Site / Plot Area</label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Grounds / 5,000 sq.ft"
                      value={formState.plotArea}
                      onChange={(e) => setFormState({ ...formState, plotArea: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Site Location (City & Area)</label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai, Vaniyambadi"
                    value={formState.location}
                    onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Project Scope & Specific Requirements</label>
                  <textarea
                    placeholder="Describe your architectural vision, target handover timeline, or specific structural questions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-icon-pill"
                  style={{ width: '100%', marginTop: '0.75rem' }}
                  data-cursor="pointer"
                >
                  <span>SUBMIT & CHAT ON WHATSAPP</span>
                  <span className="icon-bubble">→</span>
                </button>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <span className="technical-coord">
                    <ShieldCheck size={13} style={{ display: 'inline', marginRight: 4 }} />
                    ALL CORRESPONDENCE DIRECTLY FORWARDED TO +91 95666 93760
                  </span>
                </div>
              </form>
            ) : (
              <div style={{ padding: '3rem 2rem', textAlign: 'center', background: 'rgba(143, 175, 155, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-accent)' }}>
                <Sparkles size={40} className="text-accent" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  INQUIRY TRANSMITTED TO SENIOR ENGINEER
                </h3>
                <p className="text-muted" style={{ maxWidth: '480px', margin: '0 auto 1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Thank you, <strong>{formState.fullName}</strong>. Your project details have been prepared and sent directly to our Principal Engineer on WhatsApp at <strong>+91 95666 93760</strong>. We will also reach out to you directly at <strong>{formState.phone}</strong>.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href="https://wa.me/919566693760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Open WhatsApp Chat Now
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
