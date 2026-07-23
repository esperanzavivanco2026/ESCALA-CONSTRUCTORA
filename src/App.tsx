import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { StatsSection } from './components/StatsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { InteractiveMap } from './components/InteractiveMap';
import { AboutUs } from './components/AboutUs';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { Project } from './types';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string>('');
  const [quotePreselectedCity, setQuotePreselectedCity] = useState<string>('');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const handleOpenQuoteModal = (service?: string, city?: string) => {
    if (service) setQuotePreselectedService(service);
    if (city) setQuotePreselectedCity(city);
    setIsQuoteModalOpen(true);
  };

  const handleExploreProjects = () => {
    const el = document.querySelector('#proyectos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    const el = document.querySelector('#contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans selection:bg-[#FFB800] selection:text-[#121212] antialiased">
      
      {/* Mobile Frame Simulation Container if mobile mode toggled */}
      <div className={`mx-auto transition-all duration-300 ${
        viewportMode === 'mobile' ? 'max-w-[390px] border-x-8 border-y-12 border-[#2A2A2A] rounded-3xl my-6 shadow-2xl overflow-hidden' : 'w-full'
      }`}>
        
        {/* Floating Viewport Toggle Indicator for mobile mode */}
        {viewportMode === 'mobile' && (
          <div className="bg-[#FFB800] text-[#121212] font-bold text-xs py-1.5 px-3 text-center flex items-center justify-between">
            <span className="flex items-center space-x-1">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Vista Móvil Simulado (390px)</span>
            </span>
            <button
              onClick={() => setViewportMode('desktop')}
              className="underline text-[11px] font-black"
            >
              Cambiar a Desktop (1440px)
            </button>
          </div>
        )}

        {/* Main Header / Navigation */}
        <Navbar
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          activeSection={activeSection}
          viewportMode={viewportMode}
          setViewportMode={setViewportMode}
        />

        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreProjects={handleExploreProjects}
          onContactClick={handleContactClick}
        />

        {/* Services Grid Section */}
        <ServicesGrid
          onSelectServiceForQuote={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
        />

        {/* Stats Section */}
        <StatsSection />

        {/* Featured Projects Gallery */}
        <FeaturedProjects
          onSelectProjectDetail={(project) => setSelectedProject(project)}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Interactive Coverage Map */}
        <InteractiveMap
          onOpenQuoteForCity={(city) => handleOpenQuoteModal(undefined, city)}
        />

        {/* About Us & Tech Section */}
        <AboutUs
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section & FAQ */}
        <ContactSection />

        {/* Footer */}
        <Footer
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

      </div>

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuoteForProject={(title) => handleOpenQuoteModal(title)}
      />

      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => {
          setIsQuoteModalOpen(false);
          setQuotePreselectedService('');
          setQuotePreselectedCity('');
        }}
        preselectedService={quotePreselectedService}
        preselectedCity={quotePreselectedCity}
      />

    </div>
  );
}
