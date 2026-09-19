import React, { useState, useMemo } from 'react';
import { MATERIALS_DATA, MaterialItem } from '../data/mockData';
import { ShieldCheck, CheckCircle2, FileText, X, Search, Sparkles } from 'lucide-react';

interface MaterialsPageProps {
  onNavigate: (route: string, projectSlug?: string) => void;
}

export const MaterialsPage: React.FC<MaterialsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMaterial, setActiveMaterial] = useState<MaterialItem | null>(null);

  const categories = [
    'All',
    'Structural',
    'Surfaces & Stone',
    'Joinery & Woodwork',
    'Windows & Glazing',
    'Waterproofing',
    'Electrical & MEP',
    'Plumbing & MEP',
    'Finishes & Fixtures'
  ];

  const filteredMaterials = useMemo(() => {
    return MATERIALS_DATA.filter((mat) => {
      const matchesCat = selectedCategory === 'All' || mat.category.includes(selectedCategory) || mat.category === selectedCategory;
      const matchesSearch =
        mat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mat.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mat.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mat.specification.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">MATERIAL SPECIFICATIONS</span>
            <span className="technical-coord">{MATERIALS_DATA.length} CERTIFIED SPECIFICATIONS</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            MATERIALS CHOSEN LIKE PRECISION INSTRUMENTS.
          </h1>
          <p className="text-muted" style={{ maxWidth: '720px', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Every raw material entering a Royal Builders construction site is subjected to NABL laboratory verification. We never substitute secondary re-rolled steel, unwashed river sand, or uncertified cement.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="projects-filter-bar">
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

          <div className="search-input-box" style={{ maxWidth: '420px' }}>
            <Search size={16} className="text-muted" />
            <input
              type="text"
              placeholder="Search by brand, IS code, or material (e.g. UltraTech, Fe 550D, Schüco)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search materials"
            />
          </div>
        </div>

        {/* Materials Grid */}
        <div className="materials-grid">
          {filteredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="material-card"
              onClick={() => setActiveMaterial(mat)}
              data-cursor="pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter') setActiveMaterial(mat);
              }}
              aria-label={`View full specification dossier for ${mat.name}`}
            >
              <div className="material-card-thumb">
                <img src={mat.image} alt={mat.name} loading="lazy" />
                <span
                  className="badge badge-accent"
                  style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}
                >
                  {mat.category}
                </span>
              </div>

              <div className="material-card-body">
                <div className="technical-coord" style={{ color: 'var(--color-accent-primary)' }}>
                  {mat.brand}
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {mat.name}
                </h3>

                <p className="text-muted" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {mat.specification}
                </p>

                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge badge-dark" style={{ fontSize: '0.68rem' }}>
                    {mat.qualityStandard}
                  </span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-accent-primary)' }}>
                    VIEW DOSSIER →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Material Detail Modal */}
        {activeMaterial && (
          <div
            className="modal-backdrop"
            onClick={() => setActiveMaterial(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="modal-content-wrap"
              onClick={(e) => e.stopPropagation()}
              style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', maxHeight: '90vh', overflowY: 'auto' }}
            >
              <button
                type="button"
                onClick={() => setActiveMaterial(null)}
                className="modal-close-btn"
                aria-label="Close material modal"
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge badge-accent">{activeMaterial.category}</span>
                <span className="badge badge-dark">{activeMaterial.qualityStandard}</span>
              </div>

              <h2 className="heading-lg" style={{ marginBottom: '0.5rem' }}>
                {activeMaterial.name}
              </h2>

              <p className="text-accent" style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Brand: {activeMaterial.brand} · Grade: {activeMaterial.grade}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '240px' }}>
                  <img
                    src={activeMaterial.image}
                    alt={activeMaterial.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <span className="label-caps">TECHNICAL SPECIFICATION</span>
                    <p style={{ marginTop: '0.35rem', fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                      {activeMaterial.specification}
                    </p>
                  </div>

                  <div>
                    <span className="label-caps">QUALITY TESTING REGIME</span>
                    <p style={{ marginTop: '0.35rem', fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                      {activeMaterial.testingProcess}
                    </p>
                  </div>

                  <div>
                    <span className="label-caps">PRIMARY STRUCTURAL APPLICATIONS</span>
                    <p style={{ marginTop: '0.35rem', fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                      {activeMaterial.applications}
                    </p>
                  </div>

                  <div>
                    <span className="label-caps">VERIFIABLE CERTIFICATES PROVIDED</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {activeMaterial.certificates.map((cert, cIdx) => (
                        <div key={cIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.85rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border-subtle)', fontSize: '0.8rem' }}>
                          <ShieldCheck size={14} className="text-accent" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="label-caps">EMPLOYED IN SIGNATURE PROJECTS</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {activeMaterial.projectsUsedIn.map((proj, pIdx) => (
                        <span key={pIdx} className="badge badge-dark">
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
