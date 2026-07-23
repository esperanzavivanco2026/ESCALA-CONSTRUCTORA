import React from 'react';
import { Star, Quote, Building2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#1A1A1A] relative border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#FFB800] text-xs font-bold uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded border border-[#FFB800]/30">
            <Quote className="w-4 h-4" />
            <span>Confianza & Relaciones de Largo Plazo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Testimonios reales de corporaciones, inversionistas y desarrolladores inmobiliarios en Ecuador.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#2A2A2A] border border-white/10 hover:border-[#FFB800] rounded-xl p-8 flex flex-col justify-between shadow-xl relative transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-[#FFB800]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800]" />
                  ))}
                </div>

                <p className="text-gray-200 text-sm italic leading-relaxed">
                  "{item.comment}"
                </p>

                <div className="inline-block bg-[#121212] px-3 py-1 rounded text-[11px] text-[#FFB800] font-mono border border-white/5">
                  Obra: {item.projectType}
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center space-x-4">
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FFB800]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{item.clientName}</h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
                  <span className="text-[11px] text-[#FFB800] font-semibold">{item.company}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
