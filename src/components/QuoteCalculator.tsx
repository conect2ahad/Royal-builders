import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, MessageSquare, Handshake, ArrowRight, Sparkles } from 'lucide-react';

interface PricingOption {
  id: 'residential' | 'commercial' | 'industrial';
  name: string;
  rate: number;
  description: string;
}

const PRICING_OPTIONS: PricingOption[] = [
  {
    id: 'residential',
    name: 'Residential in Chennai',
    rate: 1800,
    description: 'Independent villas, multi-family residences, and premium apartments across Chennai.'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    rate: 1600,
    description: 'Commercial plazas, multi-storey retail hubs, business arcades, and corporate spaces.'
  },
  {
    id: 'industrial',
    name: 'Industrial Project',
    rate: 1650,
    description: 'Transit houses, heavy engineering industrial plants, steel structures, and warehouses.'
  }
];

export const QuoteCalculator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'residential' | 'commercial' | 'industrial'>('residential');
  const [areaSqFt, setAreaSqFt] = useState<number>(1500);

  // Form submission state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const activeOption = useMemo(() => {
    return PRICING_OPTIONS.find((opt) => opt.id === selectedType) || PRICING_OPTIONS[0];
  }, [selectedType]);

  const totalEstimate = useMemo(() => {
    const validArea = Math.max(0, areaSqFt || 0);
    return validArea * activeOption.rate;
  }, [areaSqFt, activeOption]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleAreaChange = (val: number) => {
    setAreaSqFt(val);
  };

  const handleWhatsAppSend = () => {
    const lines = [
      `*Construction Quotation Inquiry - Royal Builders & Developers*`,
      `*Selected Option:* ${activeOption.name}`,
      `*Inbuilt Rate:* ₹${activeOption.rate.toLocaleString()} / sq.ft`,
      `*Built-Up Area:* ${areaSqFt.toLocaleString()} sq.ft`,
      `*Estimated Total:* ${formatCurrency(totalEstimate)}`,
      `*Status:* Opened for Negotiate`,
      formData.name ? `*Name:* ${formData.name}` : '',
      formData.phone ? `*Phone:* ${formData.phone}` : '',
      formData.location ? `*Site Location:* ${formData.location}` : ''
    ].filter(Boolean);

    const waUrl = `https://wa.me/919566693760?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(waUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    handleWhatsAppSend();
    setSubmitted(true);
  };

  return (
    <div className="quote-calc-card" id="calculator">
      {/* Step 1: Project Type Selection (Only the 3 Options) */}
      <div className="calc-step-header">
        <div className="calc-step-number">01</div>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
            SELECT PROJECT TYPE
          </h3>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>
            Choose from our three standard construction categories with transparent inbuilt rates.
          </p>
        </div>
      </div>

      <div className="calc-type-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {PRICING_OPTIONS.map((opt) => {
          const isSelected = selectedType === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedType(opt.id)}
              className={`calc-type-card ${isSelected ? 'selected' : ''}`}
              style={{
                textAlign: 'left',
                position: 'relative',
                padding: '1.75rem',
                border: isSelected ? '2px solid var(--color-accent-primary)' : '1px solid var(--color-border-subtle)',
                background: isSelected ? 'var(--color-bg-tertiary)' : 'var(--color-bg-secondary)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="badge badge-accent" style={{ fontSize: '0.85rem', fontWeight: 800, padding: '0.35rem 0.75rem' }}>
                  ₹{opt.rate.toLocaleString()} / Sq.Ft
                </span>
                {isSelected && <CheckCircle2 size={18} className="text-accent" />}
              </div>

              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                {opt.name}
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                {opt.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Step 2: Built-Up Area Input (User enters sq.ft) */}
      <div className="calc-step-header" style={{ marginTop: '2.5rem' }}>
        <div className="calc-step-number">02</div>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
            ENTER BUILT-UP AREA (SQ. FT.)
          </h3>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>
            Enter your planned area in square feet to calculate your instant estimate.
          </p>
        </div>
      </div>

      <div style={{ background: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
          <div>
            <label className="form-label" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Built-Up Area (in Sq. Ft.)
            </label>
            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <input
                type="number"
                min="100"
                max="500000"
                step="50"
                value={areaSqFt || ''}
                onChange={(e) => handleAreaChange(Number(e.target.value))}
                placeholder="e.g. 1500"
                className="form-input"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  padding: '0.85rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid var(--color-border-accent)',
                  color: 'var(--color-text-primary)'
                }}
              />
              <span style={{ position: 'absolute', right: '1.25rem', fontWeight: 700, color: 'var(--color-text-muted)', fontSize: '0.9rem', pointerEvents: 'none' }}>
                SQ. FT.
              </span>
            </div>
          </div>

          <div>
            <label className="form-label" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              Quick Presets:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[1000, 1500, 2000, 3000, 5000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handleAreaChange(preset)}
                  className={`btn ${areaSqFt === preset ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                >
                  {preset.toLocaleString()} sq.ft
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Range Slider for convenience */}
        <div style={{ marginTop: '1.75rem' }}>
          <input
            type="range"
            min="500"
            max="25000"
            step="100"
            value={Math.min(Math.max(areaSqFt || 500, 500), 25000)}
            onChange={(e) => handleAreaChange(Number(e.target.value))}
            className="calc-slider"
            aria-label="Built-up area slider"
          />
          <div className="flex-between" style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            <span>500 SQ. FT.</span>
            <span>10,000 SQ. FT.</span>
            <span>25,000+ SQ. FT.</span>
          </div>
        </div>
      </div>

      {/* Real-Time Calculation Results Panel */}
      <div className="calc-results-panel" style={{ marginTop: '2rem' }}>
        <div className="estimate-highlight-box" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
          <span className="label-caps" style={{ letterSpacing: '0.08em', color: 'var(--color-accent-primary)' }}>
            ESTIMATED CONSTRUCTION COST
          </span>
          <div className="estimate-number" style={{ fontSize: '3rem', fontWeight: 900, marginTop: '0.5rem', letterSpacing: '-0.03em' }}>
            {formatCurrency(totalEstimate)}
          </div>

          <div style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>
              Category: <strong style={{ color: 'var(--color-text-primary)' }}>{activeOption.name}</strong>
            </span>
            <span>·</span>
            <span>
              Inbuilt Price: <strong style={{ color: 'var(--color-accent-primary)' }}>₹{activeOption.rate.toLocaleString()} / Sq. Ft.</strong>
            </span>
            <span>·</span>
            <span>
              Area: <strong style={{ color: 'var(--color-text-primary)' }}>{areaSqFt ? areaSqFt.toLocaleString() : 0} Sq. Ft.</strong>
            </span>
          </div>

          {/* User's Exact Requirement: Below it should be mentioned "opened for negotiate" */}
          <div
            style={{
              marginTop: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              background: 'rgba(143, 175, 155, 0.15)',
              border: '1.5px solid var(--color-accent-primary)',
              borderRadius: 'var(--radius-pill)',
              padding: '0.55rem 1.4rem',
              color: 'var(--color-accent-primary)',
              boxShadow: '0 4px 20px rgba(143, 175, 155, 0.15)'
            }}
          >
            <Handshake size={20} />
            <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Opened for Negotiate
            </span>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.75rem', maxWidth: '560px', margin: '0.75rem auto 0', lineHeight: '1.5' }}>
            The calculated estimate is transparent and <strong>opened for negotiate</strong> based on specific site location, floor plate configuration, and personalized architectural requirements.
          </p>

          <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="btn btn-primary"
              style={{ padding: '0.95rem 1.8rem', fontSize: '0.95rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
            >
              <MessageSquare size={18} />
              <span>Discuss Estimate on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Request Itemized BOQ Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '2rem', marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--color-text-primary)' }}>
              LOCK IN THIS ESTIMATE · TALK TO OUR ENGINEER
            </h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Share your contact details to receive a detailed breakdown and schedule a site feasibility inspection.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mr. K. Rahman"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 95666 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Site / Plot Location</label>
                <input
                  type="text"
                  placeholder="e.g. Chennai / Vaniyambadi"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button type="submit" className="btn btn-primary btn-icon-pill" data-cursor="pointer">
                <span>SUBMIT ESTIMATE TO OUR ENGINEER</span>
                <span className="icon-bubble">
                  <ArrowRight size={16} />
                </span>
              </button>
              <span className="technical-coord">
                DIRECT TO CHIEF ENGINEER · +91 9566693760 · OPENED FOR NEGOTIATE
              </span>
            </div>
          </form>
        ) : (
          <div style={{ padding: '2rem', background: 'rgba(143, 175, 155, 0.15)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-accent)', textAlign: 'center', marginTop: '2rem' }}>
            <Sparkles size={36} className="text-accent" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
              ESTIMATE TRANSMITTED TO OUR PRINCIPAL ENGINEER
            </h4>
            <p className="text-muted" style={{ maxWidth: '540px', margin: '0.5rem auto 1.25rem', fontSize: '0.9rem' }}>
              Thank you, <strong>{formData.name}</strong>. Our Senior Project Director will review your {areaSqFt.toLocaleString()} sq.ft {activeOption.name} inquiry and connect with you at <strong>{formData.phone}</strong> shortly. All commercials are opened for negotiate.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem' }}
            >
              Modify Calculation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
