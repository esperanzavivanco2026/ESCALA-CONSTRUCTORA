import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, Building2, ChevronDown, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onExploreProjects,
  onContactClick
}) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center bg-[#121212] overflow-hidden pt-8 pb-16">
      {/* Background Architectural Construction Image with Dark Matte Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Constructora ESCALA - Proyecto Arquitectónico"
          className="w-full h-full object-cover object-center opacity-30 filter contrast-125 brightness-90 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Sleek Dark Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/70 to-[#121212]/40" />
        
        {/* Architectural Blueprint Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-[#FFB800] 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & CTAs */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#2A2A2A]/90 border border-[#FFB800]/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-200 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
              <span className="text-[#FFB800] uppercase tracking-wider font-bold">Arquitectura e Ingeniería de Vanguardia</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300">Ecuador 2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
              Diseño y Construcción de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FFCC00] to-amber-200">Alto Nivel</span> a Escala Nacional
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-normal">
              Transformamos ideas en estructuras sólidas con arquitectura de vanguardia y ejecución impecable en todo el país.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="group relative inline-flex items-center justify-center bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-bold text-base px-8 py-4 rounded-md shadow-xl shadow-[#FFB800]/15 transition-all duration-300 active:scale-95"
              >
                <span>Ver Nuestros Proyectos</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center bg-transparent hover:bg-[#FFB800]/10 text-white font-bold text-base px-8 py-4 rounded-md border-2 border-[#FFB800] transition-all duration-300 active:scale-95"
              >
                <span>Contáctanos</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>Normativa NEC-15 Cumplida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>Modelado BIM Nivel 2</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>24 Provincias de Cobertura</span>
              </div>
            </div>

          </div>

          {/* Right Hero Card: Quick Project Estimator Teaser */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#2A2A2A]/90 border border-white/15 rounded-xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-[#FFB800]/50 transition-all duration-500">
              
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#FFB800]/10 rounded-full blur-2xl group-hover:bg-[#FFB800]/20 transition-all" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-[#FFB800]/10 rounded border border-[#FFB800]/30 text-[#FFB800]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">Cotizador Rápido</h3>
                    <p className="text-gray-400 text-xs">Estima tu presupuesto en 1 min</p>
                  </div>
                </div>
                <span className="text-[10px] bg-[#FFB800]/20 text-[#FFB800] font-bold px-2 py-0.5 rounded uppercase">
                  Gratis
                </span>
              </div>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="bg-[#121212]/80 p-3.5 rounded border border-white/5 space-y-1">
                  <span className="text-xs text-gray-400 block font-medium">Tipos de Proyecto Disponibles:</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-xs bg-[#2A2A2A] text-white px-2 py-0.5 rounded border border-white/10">Torre Corporativa</span>
                    <span className="text-xs bg-[#2A2A2A] text-white px-2 py-0.5 rounded border border-white/10">Residencia Lujo</span>
                    <span className="text-xs bg-[#2A2A2A] text-white px-2 py-0.5 rounded border border-white/10">Nave Industrial</span>
                  </div>
                </div>

                <div className="bg-[#121212]/80 p-3.5 rounded border border-white/5 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Garantía Estructural:</span>
                    <span className="text-[#FFB800] font-bold">10 Años Certificados</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Modalidad:</span>
                    <span className="text-white font-medium">Llave en Mano (Turnkey)</span>
                  </div>
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  className="w-full bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-extrabold py-3 rounded text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Iniciar Cotización Personalizada</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 text-xs animate-bounce pointer-events-none">
        <span>Desliza para explorar</span>
        <ChevronDown className="w-4 h-4 text-[#FFB800] mt-0.5" />
      </div>
    </section>
  );
};
