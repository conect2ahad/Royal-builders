import React from 'react';

interface SectionHeadingProps {
  number?: string;
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  actionText?: string;
  actionLink?: string;
  onActionClick?: () => void;
  align?: 'left' | 'center';
  lightText?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  badge,
  title,
  subtitle,
  actionText,
  actionLink,
  onActionClick,
  align = 'left'
}) => {
  return (
    <div className="section-header-wrap" style={{ textAlign: align }}>
      <div className="section-header-row">
        <div>
          <div className="section-top-indicator">
            {number && <span className="section-number" aria-hidden="true">{number}</span>}
            <span className="label-caps">{badge}</span>
          </div>
          <h2 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted" style={{ marginTop: '0.85rem', maxWidth: '640px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              {subtitle}
            </p>
          )}
        </div>

        {actionText && (
          <div>
            {actionLink ? (
              <a href={actionLink} className="btn btn-secondary btn-icon-pill" onClick={onActionClick}>
                <span>{actionText}</span>
                <span className="icon-bubble">→</span>
              </a>
            ) : (
              <button type="button" className="btn btn-secondary btn-icon-pill" onClick={onActionClick}>
                <span>{actionText}</span>
                <span className="icon-bubble">→</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
