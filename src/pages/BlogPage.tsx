import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/mockData';
import { Clock, Calendar, User, ArrowRight, X, Bookmark, Share2 } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <div className="section-padding-top" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-top-indicator">
            <span className="label-caps">ENGINEERING JOURNAL</span>
            <span className="technical-coord">TECHNICAL CIVIL PERSPECTIVES</span>
          </div>
          <h1 className="heading-xl" style={{ marginTop: '0.85rem' }}>
            INSIGHTS ON STRUCTURAL INTEGRITY.
          </h1>
          <p className="text-muted" style={{ maxWidth: '720px', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.65' }}>
            Whitepapers and technical commentary authored by our principal structural consultants on Mivan formwork, marine concrete corrosion, and soil mechanics.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="card-arch"
              style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              onClick={() => setActiveArticle(post)}
              data-cursor="pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter') setActiveArticle(post);
              }}
              aria-label={`Read engineering article: ${post.title}`}
            >
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="project-card-img"
                  loading="lazy"
                />
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span className="badge badge-accent">{post.category}</span>
                  <span className="technical-coord" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, lineHeight: '1.3', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                  {post.title}
                </h3>

                <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                  {post.excerpt}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {post.author}
                    </div>
                    <div className="technical-coord" style={{ fontSize: '0.7rem' }}>
                      {post.authorRole}
                    </div>
                  </div>

                  <span className="btn btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.75rem' }}>
                    READ →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Full Article Reader Modal */}
        {activeArticle && (
          <div
            className="modal-backdrop"
            onClick={() => setActiveArticle(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="modal-content-wrap"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '840px', padding: 'clamp(2rem, 5vw, 3.5rem)', maxHeight: '90vh', overflowY: 'auto', background: 'var(--color-bg-secondary)' }}
            >
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="modal-close-btn"
                aria-label="Close article reader"
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge badge-accent">{activeArticle.category}</span>
                <span className="technical-coord">{activeArticle.date}</span>
                <span className="technical-coord">· {activeArticle.readTime}</span>
              </div>

              <h1 className="heading-lg" style={{ marginBottom: '1.25rem', lineHeight: '1.2' }}>
                {activeArticle.title}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border-subtle)', marginBottom: '2rem' }}>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {activeArticle.author}
                  </div>
                  <div className="technical-coord">
                    {activeArticle.authorRole} · Royal Builders Structural Division
                  </div>
                </div>
              </div>

              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '320px', marginBottom: '2rem' }}>
                <img
                  src={activeArticle.coverImage}
                  alt={activeArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'rgba(244, 243, 238, 0.85)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {activeArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {activeArticle.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="badge badge-dark">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
