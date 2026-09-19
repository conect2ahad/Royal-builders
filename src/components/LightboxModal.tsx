import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  title?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  title
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <button
        type="button"
        onClick={onClose}
        className="modal-close-btn"
        aria-label="Close image lightbox"
      >
        <X size={22} />
      </button>

      {/* Prev Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + images.length) % images.length);
        }}
        className="modal-close-btn"
        style={{ left: '1.5rem', top: '50%', transform: 'translateY(-50%)' }}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % images.length);
        }}
        className="modal-close-btn"
        style={{ right: '1.5rem', top: '50%', transform: 'translateY(-50%)' }}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div
        className="modal-content-wrap"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '1100px', background: 'transparent', border: 'none', boxShadow: 'none' }}
      >
        <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <img
            src={images[currentIndex]}
            alt={title || `Gallery view ${currentIndex + 1}`}
            style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block', margin: '0 auto' }}
          />
        </div>

        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#F4F3EE' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>
            {title || 'Architectural View'}
          </span>
          <span className="technical-coord">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};
