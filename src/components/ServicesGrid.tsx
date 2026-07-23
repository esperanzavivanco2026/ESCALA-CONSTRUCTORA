import React, { useState } from 'react';
import { Compass, Building2, MapPin, ShieldCheck, ClipboardCheck, Hammer, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Service } from '../types';
import { SERVICES_DATA } from '../data/mockData';

interface ServicesGridProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Compass': return Compass;
    case 'Building2': return Building2;
    case 'MapPin': return MapPin;
    case 'ShieldCheck': return ShieldCheck;
    case 'ClipboardCheck': return ClipboardCheck;
    case 'Hammer': return Hammer;
    default: return Building2;
  }
};

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicios" className="py-24 bg-[#121212] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-[#FFB800] text-xs font-bold uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded border border-[#FFB800]/20">
              <span>Soluciones Arquitectónicas E Ingeniería Integral</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Ofrecemos capacidad técnica de punta a escala nacional con estándares de calidad comprobados en cada etapa del proyecto.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button
              onClick={() => onSelectServiceForQuote('Todos los Servicios')}
              className="inline-flex items-center space-x-2 bg-[#2A2A2A] hover:bg-[#333333] text-white border border-white/15 px-5 py-3 rounded-md text-sm font-bold transition-all hover:border-[#FFB800]/50"
            >
              <span>Solicitar Diagnóstico de Obra</span>
              <ArrowRight className="w-4 h-4 text-[#FFB800]" />
            </button>
          </div>
        </div>

        {/* Services Grid: Dark cards (#2A2A2A) with Vibrant Yellow accent icons (#FFB800) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComp = getIconComponent(service.iconName);
            return (
              <div
                key={service.id}
                className="group bg-[#2A2A2A] hover:bg-[#1E1E1E] border border-white/10 hover:border-[#FFB800] rounded-xl p-8 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                {/* Yellow Accent Corner Highlight */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FFB800]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-6">
                  {/* Icon Badge: Dark Slate Card with Vibrant Yellow Icon */}
                  <div className="w-14 h-14 rounded-lg bg-[#121212] border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] group-hover:bg-[#FFB800] group-hover:text-[#121212] transition-colors duration-300 shadow-md">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FFB800] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlight Features */}
                  <div className="pt-2 space-y-2 border-t border-white/10">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start text-xs text-gray-300 space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB800] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#FFB800] hover:text-[#FFCC00] uppercase tracking-wider flex items-center space-x-1 group/btn"
                  >
                    <span>Ver Detalles Completos</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="text-xs bg-[#121212] hover:bg-[#FFB800] text-gray-200 hover:text-[#121212] px-3 py-1.5 rounded font-bold transition-colors border border-white/10"
                  >
                    Cotizar
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#1E1E1E] border border-[#FFB800]/40 rounded-xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-[#2A2A2A] p-2 rounded-full border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#FFB800] text-[#121212] rounded-lg">
                {React.createElement(getIconComponent(selectedService.iconName), { className: 'w-8 h-8' })}
              </div>
              <div>
                <span className="text-xs text-[#FFB800] uppercase font-bold tracking-widest block">Servicio ESCALA</span>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              </div>
            </div>

            {/* Modal Content */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#121212] p-5 rounded-lg border border-white/10">
              <div>
                <h4 className="text-xs font-bold text-[#FFB800] uppercase tracking-wider mb-3">Alcance Técnico:</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {selectedService.features.map((f, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB800] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#FFB800] uppercase tracking-wider mb-3">Entregables Oficiales:</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {selectedService.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shrink-0 mt-1.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-gray-400">
                Garantía y respaldo técnico respaldado bajo norma NEC-15
              </span>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(title);
                }}
                className="w-full sm:w-auto bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-bold px-6 py-3 rounded text-sm transition-all"
              >
                Cotizar {selectedService.title}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
