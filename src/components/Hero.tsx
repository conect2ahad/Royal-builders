import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Shield, Award, Clock, Star } from 'lucide-react';
import { Project } from '../data/mockData';

interface HeroProps {
  currentProject: Project;
  onNavigate: (route: string, projectSlug?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentProject, onNavigate }) => {
  const [activeHudIndex, setActiveHudIndex] = useState(0);

  const hudProjects = [
    {
      name: 'Jafrabad Modern Residence',
      slug: 'jafrabad-project',
      location: 'Jafrabad, Vaniyambadi',
      status: 'UNDER CONSTRUCTION',
      progress: 68,
      completion: 'Q4 2026'
    },
    {
      name: 'Pallavaram Landmark Complex',
      slug: 'pallavaram-project',
      location: 'GST Road, Pallavaram',
      status: 'COMPLETED',
      progress: 100,
      completion: 'Delivered 2024'
    },
    {
      name: 'Vnb Bus Stand Commercial Project Zain Plaza',
      slug: 'vnb-bus-stand-project',
      location: 'Opposite Bus Stand, Vaniyambadi',
      status: 'UPCOMING',
      progress: 15,
      completion: 'Q4 2027'
    },
    {
      name: 'Choolaimedu Premium Residences',
      slug: 'choolaimedu-project',
      location: 'Choolaimedu High Road, Chennai',
      status: 'UPCOMING',
      progress: 12,
      completion: 'Q3 2027'
    }
  ];

  // Rotate HUD indicators smoothly every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHudIndex((prev) => (prev + 1) % hudProjects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [hudProjects.length]);

  const activeHud = hudProjects[activeHudIndex];

  return (
    <section className="hero-section" aria-label="Hero Introduction">
      {/* Background Image & Architectural Grids */}
      <div className="hero-background-wrapper">
        <img
          src="/projects/Completed/Pallavaram,15,000 sqft/outside.jpg"
          alt="Royal Builders Pallavaram Landmark modern architecture"
          className="hero-image"
        />
        <div className="hero-gradient-overlay" />
        <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content">
          {/* Top Label & Since Badge */}
          <div className="hero-badges-row animate-hero-badge">
            <span className="label-caps">CHENNAI · VANIYAMBADI</span>
            <span className="badge badge-accent animate-pulse-subtle">20+ YEARS MASTER BUILDERS (SINCE 2003)</span>
          </div>

          {/* Master Headline */}
          <h1 className="hero-title animate-hero-title">
            BUILDING WHAT LASTS.<br />
            <span className="accent-word">DEFINED BY ENGINEERING.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-description animate-hero-desc">
            We do not build minimum viable structures. Royal Builders designs and executes high-tolerance monolithic residential high-rises, bespoke coastal estates, and commercial tech campuses with verifiable materials, 54M safe man-hours, and a 60-month structural warranty in writing.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group animate-hero-cta">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="btn btn-primary btn-icon-pill"
              data-cursor="pointer"
            >
              <span>EXPLORE SIGNATURE WORK</span>
              <span className="icon-bubble">
                <ArrowUpRight size={16} />
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="btn btn-secondary"
              data-cursor="pointer"
            >
              <span>TALK TO OUR ENGINEER</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('quotation')}
              className="btn btn-secondary"
              style={{ borderStyle: 'dashed' }}
              data-cursor="pointer"
            >
              <span>INSTANT COST ESTIMATOR</span>
            </button>
          </div>
        </div>

        {/* Live Project HUD Bar */}
        <div className="hero-hud-bar animate-hero-hud">
          <div className="hud-item">
            <span className="hud-label">CURRENT ACTIVE SITE</span>
            <button
              type="button"
              onClick={() => onNavigate('project-detail', activeHud.slug)}
              className="hud-value truncate text-left"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
              data-cursor="pointer"
            >
              {activeHud.name} →
            </button>
          </div>

          <div className="hud-item">
            <span className="hud-label">LOCATION & CITY</span>
            <span className="hud-value truncate">{activeHud.location}</span>
          </div>

          <div className="hud-item">
            <span className="hud-label">STATUS</span>
            <span className="hud-value text-accent">{activeHud.status}</span>
          </div>

          <div className="hud-item">
            <div className="flex-between">
              <span className="hud-label">PROGRESS</span>
              <span className="hud-label text-accent">{activeHud.progress}%</span>
            </div>
            <div className="hud-progress-bar">
              <div className="hud-progress-fill" style={{ width: `${activeHud.progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
