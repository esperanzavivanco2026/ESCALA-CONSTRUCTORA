import React, { useState, useEffect } from 'react';
import { HardHat, Menu, X, ArrowRight, ShieldCheck, PhoneCall, Smartphone, Monitor } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  activeSection: string;
  viewportMode: 'desktop' | 'mobile';
  setViewportMode: (mode: 'desktop' | 'mobile') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  activeSection,
  viewportMode,
  setViewportMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#1A1A1A] text-gray-300 text-xs py-2 px-4 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFB800] mr-1.5" />
              Certificación Estructural NEC-15 | ISO 45001
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">
              Cobertura en las 24 Provincias de Ecuador
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Viewport spec switcher for testing preview */}
            <div className="flex items-center bg-[#2A2A2A] rounded p-0.5 border border-white/10 mr-2">
              <button
                onClick={() => setViewportMode('desktop')}
                title="Vista Desktop (1440px)"
                className={`flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] transition-all ${
                  viewportMode === 'desktop'
                    ? 'bg-[#FFB800] text-[#121212] font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3 h-3" />
                <span>1440px</span>
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                title="Vista Móvil Breakpoint"
                className={`flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] transition-all ${
                  viewportMode === 'mobile'
                    ? 'bg-[#FFB800] text-[#121212] font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3 h-3" />
                <span>Móvil</span>
              </button>
            </div>

            <a
              href="tel:+59323984500"
              className="flex items-center text-gray-300 hover:text-[#FFB800] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FFB800] mr-1.5" />
              +593 (02) 398-4500
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212]/95 backdrop-blur-md shadow-2xl border-b border-[#FFB800]/20 py-3'
            : 'bg-[#121212] border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Minimalist Geometric Building/Crane Emblem + ESCALA */}
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, '#inicio')}
              className="flex items-center space-x-3 group"
            >
              <div className="relative w-10 h-10 bg-[#1E1E1E] border border-[#FFB800]/40 rounded-lg p-2 flex items-center justify-center group-hover:border-[#FFB800] transition-all duration-300 shadow-md shadow-black/50">
                {/* Geometric Crane & Structural Building Icon */}
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-full h-full text-[#FFB800] transition-transform duration-300 group-hover:scale-105"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 28H28M8 28V8L18 2L28 8V28M13 28V18H19V28"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12H14M18 12H20M12 15H14M18 15H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 4L30 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Accent corner tag */}
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FFB800] rounded-full" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-xl font-extrabold tracking-wider text-white font-sans">
                    ESCALA
                  </span>
                  <span className="ml-1 text-xs px-1.5 py-0.5 bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/30 rounded font-semibold uppercase">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-gray-400 uppercase font-medium">
                  CONSTRUCTORA & ARQUITECTURA
                </span>
              </div>
            </a>

            {/* Center/Right Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-[#FFB800] font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFB800] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button: Vibrant Yellow */}
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={onOpenQuoteModal}
                className="relative group overflow-hidden bg-[#FFB800] text-[#121212] font-bold text-sm px-5 py-2.5 rounded-md transition-all duration-300 hover:bg-[#FFCC00] hover:shadow-lg hover:shadow-[#FFB800]/20 active:scale-95 flex items-center space-x-2"
              >
                <span>Cotizar Proyecto</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#FFB800] text-[#121212] font-bold text-xs px-3 py-2 rounded flex items-center space-x-1"
              >
                <span>Cotizar</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md bg-[#2A2A2A] border border-white/10"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#FFB800]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1E1E1E] border-b border-[#FFB800]/20 px-4 pt-3 pb-6 mt-2 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-gray-200 hover:text-[#FFB800] hover:bg-[#2A2A2A] px-3 py-2.5 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#FFB800] text-[#121212] font-bold text-center py-3 rounded-md flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Cotizar Proyecto Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-gray-400 pt-1">
                Llámanos: +593 (02) 398-4500
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
