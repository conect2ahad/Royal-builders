import React, { useState, useMemo } from 'react';
import { LightboxModal } from '../components/LightboxModal';
import { Maximize2, Camera } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      category: 'Commercial',
      title: 'Pallavaram Landmark 15,000 Sqft Facade',
      location: 'GST Road, Pallavaram, Chennai',
      url: '/projects/Completed/Pallavaram,15,000 sqft/outside.jpg'
    },
    {
      id: 2,
      category: 'Architecture',
      title: 'Jafrabad Modern Residence Elevation',
      location: 'Jafrabad, Vaniyambadi',
      url: '/projects/Ongoing/Jafrabad 1000Sqft/completed.png'
    },
    {
      id: 3,
      category: 'Site Progress',
      title: 'Jafrabad Active Site Superstructure Framing',
      location: 'Jafrabad, Vaniyambadi',
      url: '/projects/Ongoing/Jafrabad 1000Sqft/ongoing.jpg'
    },
    {
      id: 4,
      category: 'Commercial',
      title: 'Vnb Bus Stand Commercial Project Zain Plaza Elevation',
      location: 'Opposite Bus Stand, Vaniyambadi',
      url: '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/completed.jpg'
    },
    {
      id: 5,
      category: 'Architecture',
      title: 'Choolaimedu Premium Residences Render',
      location: 'Choolaimedu High Road, Chennai',
      url: '/projects/Upcoming/Choolai medu, Chennai,9000 Sqft/completed.jpg'
    },
    {
      id: 6,
      category: 'Construction',
      title: 'Pallavaram Structural Monolith Execution',
      location: 'Pallavaram, Chennai',
      url: '/projects/Completed/Pallavaram,15,000 sqft/IMG-20221207-WA0008.jpg'
    },
    {
      id: 7,
      category: 'Site Progress',
      title: 'Jafrabad Column Cage & Shuttering',
      location: 'Jafrabad Site Stage 04',
      url: '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260704084728.jpg'
    },
    {
      id: 8,
      category: 'Site Progress',
      title: 'Vnb Bus Stand Site Survey & Perimeter',
      location: 'Vaniyambadi Bus Stand Hub',
      url: '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/IMG-20260907-WA0003.jpg'
    },
    {
      id: 9,
      category: 'Construction',
      title: 'Pallavaram Concrete Finishing & Glazing',
      location: 'Pallavaram, Chennai',
      url: '/projects/Completed/Pallavaram,15,000 sqft/IMG-20260624-WA0096.jpg'
    }
  ];

  const categories = ['All', 'Architecture', 'Construction', 'Site Progress', 'Interiors', 'Commercial'];

  const filteredItems = useMemo(() => {
    return activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">VISUAL ARCHIVE</span>
            <span className="technical-coord">{filteredItems.length} HIGH-RESOLUTION PHOTOGRAPHS</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            ARCHITECTURAL & CIVIL GALLERY.
          </h1>
          <p className="text-muted" style={{ maxWidth: '720px', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
            A curated photographic repository documenting completed architectural landmarks, active structural concrete pours, interior craftsmanship, and heavy foundation engineering.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-pills-row" style={{ marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="card-arch"
              style={{ cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => openLightbox(idx)}
              data-cursor="pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter') openLightbox(idx);
              }}
              aria-label={`Open photo of ${item.title}`}
            >
              <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={item.url}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s var(--ease-cinematic)' }}
                  className="project-card-img"
                  loading="lazy"
                />
                <span className="badge badge-accent" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  {item.category}
                </span>
                <span
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(11,13,13,0.75)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--color-border-subtle)',
                    color: '#F4F3EE'
                  }}
                >
                  <Maximize2 size={16} />
                </span>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          images={filteredItems.map((i) => i.url)}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
          title={filteredItems[lightboxIndex]?.title}
        />
      </div>
    </div>
  );
};
