import React, { useState } from 'react';
import { MapPin, Phone, Building, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { LOCATIONS_DATA } from '../data/mockData';
import { LocationPin } from '../types';

interface InteractiveMapProps {
  onOpenQuoteForCity: (city: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onOpenQuoteForCity }) => {
  const [selectedPin, setSelectedPin] = useState<LocationPin>(LOCATIONS_DATA[0]);

  return (
    <section id="cobertura" className="py-24 bg-[#1A1A1A] relative border-t border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#FFB800] text-xs font-bold uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded border border-[#FFB800]/30">
            <MapPin className="w-4 h-4" />
            <span>Presencia & Operatividad Territorial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Despliegue Operativo a Nivel Nacional
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Infraestructura logística y campamentos propios para ejecutar obras en Sierra, Costa y Región Amazónica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Map Graphic Canvas Box */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-xl p-6 sm:p-8 relative shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between">
            
            {/* Top Map Title */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
              <div>
                <span className="text-xs text-gray-400 block font-medium">República del Ecuador</span>
                <span className="text-white font-bold text-sm">24 Provincias • Cobertura 100%</span>
              </div>
              <span className="text-xs bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/30 px-2.5 py-1 rounded font-bold">
                Red Logística Activa
              </span>
            </div>

            {/* Simulated Ecuador Contour Vector Graphic */}
            <div className="relative my-8 h-72 flex items-center justify-center">
              {/* Map background silhouette lines */}
              <svg viewBox="0 0 500 400" className="w-full h-full text-[#2A2A2A] stroke-white/10 fill-none">
                {/* Simplified Ecuador Geographic Outline */}
                <path
                  d="M120,40 Q180,20 280,50 Q360,80 410,140 Q450,220 380,320 Q320,380 220,360 Q140,340 80,280 Q40,200 60,120 Z"
                  strokeWidth="2"
                  className="fill-[#1A1A1A]/80"
                />
                <path
                  d="M150,100 L250,90 L320,180 L280,300 L180,280 Z"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  className="stroke-[#FFB800]/30"
                />
              </svg>

              {/* Interactive City Pins */}
              {LOCATIONS_DATA.map((loc) => {
                const isSelected = selectedPin.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedPin(loc)}
                    style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 focus:outline-none z-20`}
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full bg-[#FFB800]/30 animate-ping" />
                      )}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg border-2 transition-all ${
                          isSelected
                            ? 'bg-[#FFB800] text-[#121212] border-white scale-125'
                            : 'bg-[#2A2A2A] text-[#FFB800] border-[#FFB800]/50 hover:bg-[#FFB800] hover:text-[#121212]'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span
                        className={`absolute top-8 whitespace-nowrap text-[11px] font-bold px-2 py-0.5 rounded shadow ${
                          isSelected
                            ? 'bg-[#FFB800] text-[#121212]'
                            : 'bg-[#121212] text-gray-200 border border-white/10'
                        }`}
                      >
                        {loc.city}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Map Legend */}
            <div className="flex flex-wrap items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/10">
              <span className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800] mr-2" /> Selecciona una ciudad para ver la sede u obras
              </span>
              <span className="text-[#FFB800] font-mono">180+ Obras Ejecutadas</span>
            </div>

          </div>

          {/* Right Selected City Details Box */}
          <div className="lg:col-span-5 bg-[#2A2A2A] border border-white/10 rounded-xl p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs text-[#FFB800] font-bold uppercase tracking-widest">
                  {selectedPin.region}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">Sede / Red {selectedPin.city}</h3>
              </div>
              <div className="p-3 bg-[#121212] rounded-lg border border-[#FFB800]/30 text-[#FFB800]">
                <Building className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="bg-[#121212] p-4 rounded-lg border border-white/5 space-y-2">
                <span className="text-xs text-gray-400 block font-medium">Oficina Principal / Centro Técnico:</span>
                <p className="text-white font-medium text-xs leading-relaxed">
                  {selectedPin.address}
                </p>
                <a
                  href={`tel:${selectedPin.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center text-xs text-[#FFB800] hover:underline pt-1 font-mono"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  {selectedPin.phone}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#121212] p-3 rounded border border-white/5">
                  <span className="text-gray-400 block">Proyectos en Región:</span>
                  <span className="text-xl font-bold text-[#FFB800]">{selectedPin.projectCount}+ Obras</span>
                </div>
                <div className="bg-[#121212] p-3 rounded border border-white/5">
                  <span className="text-gray-400 block">Respuesta Logística:</span>
                  <span className="text-xl font-bold text-emerald-400">24-48 hrs</span>
                </div>
              </div>

              <div className="bg-[#121212] p-4 rounded-lg border border-white/5 space-y-1">
                <span className="text-xs text-gray-400 block">Obra Emblemática Local:</span>
                <span className="text-white font-bold text-xs flex items-center">
                  <Layers className="w-3.5 h-3.5 text-[#FFB800] mr-1.5 shrink-0" />
                  {selectedPin.featuredProject}
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteForCity(selectedPin.city)}
              className="w-full bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-extrabold py-3.5 rounded text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Cotizar Obra en {selectedPin.city}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
