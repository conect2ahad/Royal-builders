import React, { useEffect, useRef } from 'react';
import { X, Clock, MapPin, Film } from 'lucide-react';
import { VideoReel } from '../data/mockData';

interface VideoModalProps {
  video: VideoReel | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (video) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  // Pause video on unmount
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [video]);

  if (!video) return null;

  return (
    <div
      className="modal-backdrop animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Playing construction reel: ${video.title}`}
    >
      <div
        className="modal-content-wrap animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close video player"
        >
          <X size={20} />
        </button>

        {/* Video Frame */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#050707', overflow: 'hidden' }}>
          {video.videoUrl ? (
            <video
              ref={videoRef}
              src={video.videoUrl}
              controls
              autoPlay
              playsInline
              className="modal-video-frame"
              style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000000' }}
            >
              Your browser does not support HTML5 video streaming.
            </video>
          ) : video.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              className="modal-video-frame"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--color-text-muted)', gap: '0.75rem' }}>
              <Film size={40} className="text-accent" />
              <span>Video reel preview unavailable</span>
            </div>
          )}
        </div>

        {/* Modal Video Metadata */}
        <div className="modal-info-panel">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge badge-accent">{video.milestone}</span>
              <span className="technical-coord">{video.date}</span>
              {video.videoUrl && (
                <span className="badge badge-dark" style={{ border: '1px solid var(--color-accent-primary)', color: 'var(--color-accent-primary)' }}>
                  HD DIRECT REEL
                </span>
              )}
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {video.title}
            </h3>
            <p className="text-muted" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.25rem' }}>
              <MapPin size={13} className="text-accent" />
              <span>{video.project} · {video.location}</span>
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', flexShrink: 0 }}>
            <Clock size={16} />
            <span>{video.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
