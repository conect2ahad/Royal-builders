import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Compass, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  theme,
  onToggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const navItems = [
    { label: 'HOME', route: 'home' },
    { label: 'ABOUT', route: 'about' },
    { label: 'PROJECTS', route: 'projects' },
    { label: 'INTERIORS', route: 'interiors' },
    { label: 'GALLERY', route: 'gallery' },
    { label: 'CONTACT', route: 'contact' }
  ];

  const handleLinkClick = (route: string) => {
    onNavigate(route);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className="navbar-brand"
              aria-label="Royal Builders and Developers Homepage"
            >
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
            </a>

            {/* Desktop Navigation Links */}
            <nav className="nav-menu-desktop" aria-label="Main Navigation">
              {navItems.map((item) => (
                <a
                  key={item.route}
                  href={`#${item.route}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.route);
                  }}
                  className={`nav-link-item ${currentRoute === item.route ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions CTA Group */}
            <div className="navbar-cta-group">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                <a href="tel:+919566693760" className="nav-phone-link" style={{ padding: '2px 6px', fontSize: '0.8rem' }}>
                  <Phone size={12} className="text-accent" />
                  <span>+91 95666 93760</span>
                </a>
                <a href="tel:+919952544776" className="nav-phone-link" style={{ padding: '2px 6px', fontSize: '0.8rem', opacity: 0.85 }}>
                  <Phone size={12} className="text-accent" />
                  <span>+91 99525 44776</span>
                </a>
              </div>

              {/* Day / Night Theme Mode Toggle Button */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="theme-toggle-btn"
                title={theme === 'light' ? 'Switch to Night mode (Dark)' : 'Switch to Day mode (Light)'}
                aria-label={theme === 'light' ? 'Switch to Night mode' : 'Switch to Day mode'}
                data-cursor="pointer"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('quotation')}
                className="btn btn-primary btn-icon-pill"
                data-cursor="pointer"
              >
                <span>GET A QUOTE</span>
                <span className="icon-bubble">
                  <ArrowUpRight size={14} />
                </span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="mobile-toggle-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileOpen ? 'mobile-drawer-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <span className="label-caps" style={{ margin: 0 }}>THEME MODE</span>
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            style={{ width: 'auto', padding: '0.4rem 0.9rem', borderRadius: 'var(--radius-pill)', gap: '0.5rem', fontSize: '0.78rem', fontWeight: 700 }}
          >
            {theme === 'light' ? (
              <>
                <Moon size={16} />
                <span>NIGHT MODE</span>
              </>
            ) : (
              <>
                <Sun size={16} />
                <span>DAY MODE</span>
              </>
            )}
          </button>
        </div>

        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.route}
              href={`#${item.route}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.route);
              }}
              className={`mobile-nav-item ${currentRoute === item.route ? 'active' : ''}`}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={20} />
            </a>
          ))}
          <a
            href="#quotation"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('quotation');
            }}
            className="mobile-nav-item active"
          >
            <span>COST ESTIMATOR</span>
            <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="mobile-drawer-footer">
          <div className="label-caps">DIRECT ENGINEERING LINES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.4rem' }}>
            <a href="tel:+919566693760" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', textDecoration: 'none' }}>
              +91 95666 93760 (Primary / WhatsApp)
            </a>
            <a href="tel:+919952544776" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
              +91 99525 44776 (Direct Line)
            </a>
          </div>
          <p className="text-muted" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Mon–Sat, 09:00–19:00 IST · Chennai & Vaniyambadi
          </p>
        </div>
      </div>
    </>
  );
};
