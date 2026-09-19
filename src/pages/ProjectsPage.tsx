import React, { useState, useMemo } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { PROJECTS_DATA, Project } from '../data/mockData';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (slug: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'progress' | 'name'>('default');

  const categories = [
    'All',
    'Commercial',
    'Villa',
    'Apartment',
    'Industrial'
  ];

  const statuses = [
    'All',
    'Completed',
    'Under Construction',
    'Upcoming'
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesStatus =
        selectedStatus === 'All' || project.status === selectedStatus;
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.city.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesStatus && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'progress') return b.progress - a.progress;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [selectedCategory, selectedStatus, searchQuery, sortBy]);

  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">PORTFOLIO EXPLORER</span>
            <span className="technical-coord">{filteredProjects.length} OF {PROJECTS_DATA.length} PROJECTS DISPLAYED</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            PROJECTS THAT DEFINE THE SKYLINE.
          </h1>
          <p className="text-muted" style={{ maxWidth: '680px', marginTop: '0.75rem', fontSize: '1.05rem' }}>
            Explore our delivered and active portfolio across high-rise residential towers, private coastal villas, Grade-A IT campuses, and integrated smart townships.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {/* Category Tabs */}
          <div>
            <div style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.08em' }}>
              FILTER BY TYPOLOGY
            </div>
            <div className="filter-pills-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Status Tabs & Search Controls */}
          <div className="search-sort-row">
            <div>
              <div style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.08em' }}>
                EXECUTION STATUS
              </div>
              <div className="filter-pills-row">
                {statuses.map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedStatus(st)}
                    className={`filter-pill ${selectedStatus === st ? 'active' : ''}`}
                    style={{ fontSize: '0.75rem', padding: '0.45rem 1rem' }}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input & Sort Dropdown */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <div className="search-input-box">
                <Search size={16} className="text-muted" />
                <input
                  type="text"
                  placeholder="Search project or location (e.g. OMR, ECR, Guindy)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search projects by name or location"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="filter-pill"
                style={{ cursor: 'pointer', background: 'var(--color-bg-secondary)', color: 'var(--color-text-primary)' }}
                aria-label="Sort projects"
              >
                <option value="default">Sort: Default</option>
                <option value="progress">Sort: Progress %</option>
                <option value="name">Sort: Project Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-masonry-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
              />
            ))}
          </div>
        ) : (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              No projects found matching your criteria.
            </h3>
            <p className="text-muted" style={{ margin: '0.5rem 0 1.5rem', fontSize: '0.9rem' }}>
              Try clearing filters or adjusting your search query.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStatus('All');
                setSearchQuery('');
              }}
              className="btn btn-secondary"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
