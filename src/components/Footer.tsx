import React from 'react';
import { Compass, ArrowUpRight, ShieldCheck, MapPin, Mail, Phone, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
  theme?: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, theme = 'dark' }) => {
  const handleLink = (route: string) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div>
            <div className="navbar-brand" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-logo-wrap">
                <img
                  src={theme === 'dark' ? '/logo-black.png' : '/logo-white.png'}
                  alt="Royal Builders Logo"
                  className="brand-logo-img"
                />
              </div>
              <div className="brand-meta">
                <span className="brand-title">ROYAL BUILDERS</span>
                <span className="brand-sub">AND DEVELOPERS</span>
              </div>
            </div>

            <p className="text-muted" style={{ maxWidth: '380px', fontSize: '0.9rem', lineHeight: '1.65' }}>
              Premier modern Indian civil engineering and construction firm. 20+ years of structural precision (since 2003), 60+ landmark handovers, and a 60-month structural warranty on every project.
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div className="technical-coord">
                CHENNAI · VANIYAMBADI
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-primary)', fontSize: '0.8rem', fontWeight: 600 }}>
                <Award size={16} />
                <span>Certified for Concrete (IS 456) & Steel (IS 800)</span>
              </div>
            </div>
          </div>

          {/* Portfolio Links */}
          <div>
            <span className="label-caps">PORTFOLIO</span>
            <ul className="footer-links-list">
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleLink('projects'); }} className="footer-link">
                  All Signature Projects
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleLink('projects'); }} className="footer-link">
                  High-Rise Condominiums
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleLink('projects'); }} className="footer-link">
                  Luxury Coastal Villas
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleLink('projects'); }} className="footer-link">
                  Commercial Tech Parks
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleLink('projects'); }} className="footer-link">
                  Smart Townships
                </a>
              </li>
              <li>
                <a href="#interiors" onClick={(e) => { e.preventDefault(); handleLink('interiors'); }} className="footer-link">
                  Bespoke Interiors & Fit-Outs
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); handleLink('gallery'); }} className="footer-link">
                  Architectural Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Engineering Links */}
          <div>
            <span className="label-caps">ENGINEERING</span>
            <ul className="footer-links-list">
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); handleLink('home'); setTimeout(() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="footer-link">
                  8-Stage Construction Process
                </a>
              </li>
              <li>
                <a href="#materials" onClick={(e) => { e.preventDefault(); handleLink('home'); setTimeout(() => document.getElementById('materials')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="footer-link">
                  Certified Materials Specifications
                </a>
              </li>
              <li>
                <a href="#quality" onClick={(e) => { e.preventDefault(); handleLink('home'); setTimeout(() => document.getElementById('quality')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="footer-link">
                  IS 456 Concrete & IS 800 Steel
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => { e.preventDefault(); handleLink('blog'); }} className="footer-link">
                  Engineering Insights Blog
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); handleLink('faq'); }} className="footer-link">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#quotation" onClick={(e) => { e.preventDefault(); handleLink('quotation'); }} className="footer-link">
                  Instant Cost Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column: Both Branches & Direct Numbers */}
          <div>
            <span className="label-caps">OFFICE BRANCHES</span>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.82rem', lineHeight: '1.45' }}>
                <MapPin size={15} className="text-accent" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span><strong>Chennai:</strong> 23/B 2nd floor perianna maistry Street, Periamet Chennai -600003</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.82rem', lineHeight: '1.45', marginTop: '0.25rem' }}>
                <MapPin size={15} className="text-accent" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span><strong>Vaniyambadi:</strong> 489/3 jinnah Road Khaderpet Vaniyambadi -635751</span>
              </li>
              <li style={{ marginTop: '0.4rem' }}>
                <a href="tel:+919566693760" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} className="text-accent" />
                  <span>+91 95666 93760 (Primary / WhatsApp)</span>
                </a>
              </li>
              <li>
                <a href="tel:+919952544776" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} className="text-accent" />
                  <span>+91 99525 44776</span>
                </a>
              </li>
              <li>
                <a href="mailto:conect2ahad@gmail.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={14} className="text-accent" />
                  <span>conect2ahad@gmail.com</span>
                </a>
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => handleLink('quotation')}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.8rem', padding: '0.65rem 1rem' }}
                >
                  <span>CALCULATE CONSTRUCTION COST</span>
                  <ArrowUpRight size={14} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            <span>© 2003–{new Date().getFullYear()} Royal Builders & Infrastructure Pvt. Ltd. All rights reserved.</span>
            <span style={{ margin: '0 0.5rem', opacity: 0.4 }}>|</span>
            <span>RERA Registered Builder TN/01/2003</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="text-accent">●</span>
            <span>60-Month Structural Warranty Certified</span>
            <span className="text-accent">●</span>
            <span>54M Incident-Free Man-Hours</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
