import React from 'react';
import { Phone, Calculator } from 'lucide-react';

interface FloatingActionsProps {
  onNavigate: (route: string) => void;
}

const WhatsAppIcon: React.FC<{ size?: number }> = ({ size = 28 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Universal Floating WhatsApp Button (Fixed Bottom-Right on All Pages) */}
      <div className="floating-whatsapp-wrap">
        <a
          href="https://wa.me/919566693760"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Direct WhatsApp Chat with Royal Builders (+91 95666 93760)"
          title="Chat with Royal Builders on WhatsApp"
        >
          <WhatsAppIcon size={30} />
          <span className="whatsapp-tooltip">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating Quote Trigger (Positioned alongside WhatsApp) */}
      <div className="floating-quote-btn">
        <button
          type="button"
          onClick={() => onNavigate('quotation')}
          className="btn btn-primary"
          style={{
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6), 0 0 24px rgba(143, 175, 155, 0.3)',
            padding: '0.9rem 1.4rem',
            fontSize: '0.85rem'
          }}
          data-cursor="pointer"
        >
          <Calculator size={17} />
          <span>QUOTE CALCULATOR</span>
        </button>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="mobile-sticky-action-bar">
        <a
          href="tel:+919566693760"
          className="mobile-bar-btn"
          aria-label="Call Royal Builders Chief Engineer"
        >
          <Phone size={18} />
          <span>CALL</span>
        </a>

        <a
          href="https://wa.me/919566693760"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn"
          aria-label="WhatsApp Royal Builders (+91 95666 93760)"
        >
          <WhatsAppIcon size={18} />
          <span>WHATSAPP</span>
        </a>

        <button
          type="button"
          onClick={() => onNavigate('quotation')}
          className="mobile-bar-btn mobile-bar-btn-primary"
        >
          <Calculator size={18} />
          <span>GET QUOTE</span>
        </button>
      </div>
    </>
  );
};
