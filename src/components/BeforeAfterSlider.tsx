import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'CONSTRUCTION',
  afterLabel = 'COMPLETION'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const positionPct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(positionPct);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="before-after-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      data-cursor="pointer"
      role="slider"
      aria-valuenow={sliderPosition}
      aria-label="Comparison slider between construction stage and finished architecture"
    >
      {/* Before Image (Base layer) */}
      <img
        src={beforeImage}
        alt="Raw construction and foundation stage"
        className="ba-image"
      />
      <div className="ba-badge ba-badge-left">
        {beforeLabel}
      </div>

      {/* After Image (Clipped layer) */}
      <div
        className="ba-after-wrapper"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <img
          src={afterImage}
          alt="Completed architectural building"
          className="ba-image"
        />
        <div className="ba-badge ba-badge-right">
          {afterLabel}
        </div>
      </div>

      {/* Draggable Divider Handle */}
      <div
        className="ba-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="ba-handle-btn" aria-hidden="true">
          <ChevronsLeftRight size={20} />
        </div>
      </div>
    </div>
  );
};
