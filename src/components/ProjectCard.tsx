import React from 'react';
import { ArrowUpRight, MapPin, Play } from 'lucide-react';
import { Project } from '../data/mockData';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onSelectProject: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject
}) => {
  const getStatusBadgeClass = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'badge-completed';
      case 'Under Construction':
        return 'badge-construction';
      case 'Final Stages':
        return 'badge-accent';
      default:
        return 'badge-upcoming';
    }
  };

  return (
    <div
      className="project-card"
      onClick={() => onSelectProject(project.slug)}
      data-cursor="project"
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProject(project.slug);
        }
      }}
      aria-label={`View project details for ${project.name}`}
    >
      <div className="project-card-img-wrapper">
        <img
          src={project.heroImage}
          alt={project.name}
          className="project-card-img"
          loading="lazy"
        />

        {/* Top Floating Badges */}
        <div className="project-card-top-badges">
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className={`badge ${getStatusBadgeClass(project.status)}`}>
              {project.status}
            </span>
            <span className="badge badge-dark">
              {project.category}
            </span>
            {project.videoUrl && (
              <span className="badge badge-accent animate-pulse-subtle" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.675rem' }}>
                <Play size={10} fill="currentColor" /> VIDEO TOUR
              </span>
            )}
          </div>

          <span className="project-card-arrow-btn" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      {/* Structured Modern Content Body */}
      <div className="project-card-bottom">
        <h3 className="project-card-name">{project.name}</h3>

        <p className="project-card-location">
          <MapPin size={14} className="text-accent" style={{ flexShrink: 0 }} />
          <span>{project.location}, {project.city}</span>
        </p>

        {project.commercialOffering && (
          <div style={{ marginTop: '0.4rem', marginBottom: '0.4rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(143, 175, 155, 0.12)', border: '1px solid var(--color-accent-primary)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent-primary)' }}>
            <span>200 Sq.Ft Shop · For Sale ₹62L · Rent ₹40k</span>
          </div>
        )}

        <div className="project-card-footer-meta">
          <div className="project-card-progress">
            <div className="progress-labels">
              <span>Execution Progress</span>
              <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {project.progress}%
              </span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          <div className="project-card-handover">
            <span className="handover-label">Handover Timeline</span>
            <span className="handover-val">{project.completionDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
