import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'project'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer / desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest('[data-cursor="project"]');
      if (projectTarget) {
        setCursorType('project');
        return;
      }

      const interactive = target.closest('a, button, input, select, textarea, [data-cursor="pointer"]');
      if (interactive) {
        setCursorType('hover');
        return;
      }

      setCursorType('default');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${
        cursorType === 'hover'
          ? 'custom-cursor-hover'
          : cursorType === 'project'
          ? 'custom-cursor-project'
          : ''
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      {cursorType === 'project' && <span>VIEW<br/>PROJECT →</span>}
    </div>
  );
};
