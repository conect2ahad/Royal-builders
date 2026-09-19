import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { FloatingActions } from './components/FloatingActions';
import { VideoModal } from './components/VideoModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { QuotationPage } from './pages/QuotationPage';
import { AboutPage } from './pages/AboutPage';
import { InteriorsPage } from './pages/InteriorsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';

import { PROJECTS_DATA, VideoReel } from './data/mockData';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoReel | null>(null);

  // Day (Light) and Night (Dark) Theme state — default is 'dark' (Night mode)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('royal_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  // Apply data-theme attribute on <html> element whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('royal_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Synchronize route with URL hash for back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === 'home') {
        setCurrentRoute('home');
        setSelectedProjectSlug(null);
      } else if (hash === 'process' || hash === 'materials' || hash === 'quality') {
        setCurrentRoute('home');
        setSelectedProjectSlug(null);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash.startsWith('projects/')) {
        const slug = hash.replace('projects/', '');
        setCurrentRoute('project-detail');
        setSelectedProjectSlug(slug);
      } else {
        setCurrentRoute(hash);
        setSelectedProjectSlug(null);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: string, projectSlug?: string) => {
    if (route === 'project-detail' && projectSlug) {
      window.location.hash = `projects/${projectSlug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (route === 'home') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (route === 'process' || route === 'materials' || route === 'quality') {
      if (currentRoute !== 'home') {
        window.location.hash = '';
        setCurrentRoute('home');
      }
      setTimeout(() => {
        const el = document.getElementById(route);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.location.hash = route;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Find currently selected project
  const currentProject = selectedProjectSlug
    ? PROJECTS_DATA.find((p) => p.slug === selectedProjectSlug) || PROJECTS_DATA[0]
    : PROJECTS_DATA[0];

  return (
    <div className="app-root">
      {/* Subtle architectural film grain */}
      <div className="film-grain" />

      {/* Desktop custom architectural cursor */}
      <CustomCursor />

      {/* Primary Sticky Header with Theme Mode Controls */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content View Switcher */}
      <main id="main-content">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onPlayVideo={(video) => setActiveVideo(video)}
          />
        )}

        {currentRoute === 'projects' && (
          <ProjectsPage
            onSelectProject={(slug) => navigateTo('project-detail', slug)}
          />
        )}

        {currentRoute === 'project-detail' && (
          <ProjectDetailPage
            project={currentProject}
            onBack={() => navigateTo('projects')}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'interiors' && (
          <InteriorsPage
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'quotation' && (
          <QuotationPage />
        )}

        {currentRoute === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'gallery' && (
          <GalleryPage />
        )}

        {currentRoute === 'blog' && (
          <BlogPage />
        )}

        {currentRoute === 'contact' && (
          <ContactPage />
        )}

        {currentRoute === 'faq' && (
          <FAQPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Monolithic Dark Architectural Footer */}
      <Footer onNavigate={navigateTo} theme={theme} />

      {/* Desktop & Mobile Floating Actions */}
      <FloatingActions onNavigate={navigateTo} />

      {/* Fullscreen Video Player Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}

export default App;
