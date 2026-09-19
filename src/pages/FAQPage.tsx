import React, { useState, useMemo } from 'react';
import { FAQ_ITEMS, FAQItem } from '../data/mockData';
import { Search, ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (route: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-01', 'faq-02']);

  const categories = [
    'All',
    'Approvals & RERA',
    'Materials & Quality',
    'Timelines & Progress',
    'Pricing & Payment',
    'Warranty & Aftercare'
  ];

  const filteredFAQs = useMemo(() => {
    return FAQ_ITEMS.filter((faq) => {
      const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">FREQUENTLY ASKED QUESTIONS</span>
            <span className="technical-coord">TRANSPARENCY & CLARITY</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            CIVIL ENGINEERING QUESTIONS ANSWERED.
          </h1>
          <p className="text-muted" style={{ maxWidth: '720px', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Direct answers regarding RERA sanctions, the 60-month structural warranty, material batch testing, payment milestone escrow, and site visits.
          </p>
        </div>

        {/* Filter Bar & Search */}
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
              placeholder="Search questions (e.g. warranty, RERA, concrete)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search FAQ"
            />
          </div>
        </div>

        {/* Accordions */}
        <div className="qa-checklist-accordions">
          {filteredFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div key={faq.id} className="qa-accordion-item">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="qa-accordion-trigger"
                  aria-expanded={isOpen}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="badge badge-accent" style={{ fontSize: '0.65rem' }}>
                      {faq.category}
                    </span>
                    <span style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-fast)',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="qa-accordion-body">
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-subtle)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Have a Specific Architectural or Structural Question?
          </h3>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 1.75rem', fontSize: '0.95rem' }}>
            Our structural engineering team is happy to review your property drawings, FSI calculations, or soil reports without obligation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="btn btn-primary btn-icon-pill"
            >
              <span>CONNECT WITH AN ENGINEER</span>
              <span className="icon-bubble">→</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('quotation')}
              className="btn btn-secondary"
            >
              <span>ESTIMATE CONSTRUCTION COST</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
