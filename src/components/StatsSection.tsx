import React from 'react';
import { Ruler, Building, Map, Award, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { STATS_DATA } from '../data/mockData';

const getStatIcon = (iconName: string) => {
  switch (iconName) {
    case 'Ruler': return Ruler;
    case 'Building': return Building;
    case 'Map': return Map;
    case 'Award': return Award;
    default: return TrendingUp;
  }
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A1A1A] relative border-t border-b border-[#FFB800]/20 overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFB800_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#FFB800] text-xs font-bold uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded border border-[#FFB800]/30">
            <ShieldCheck className="w-4 h-4" />
            <span>Métricas De Impacto & Trayectoria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cifras que Respaldan Nuestra Capacidad
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Infraestructura ejecutada con rigurosidad técnica, seguridad industrial y responsabilidad estructural en todo el Ecuador.
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => {
            const Icon = getStatIcon(stat.iconName);
            return (
              <div
                key={stat.id}
                className="bg-[#2A2A2A] border border-white/10 hover:border-[#FFB800] rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-1 shadow-xl relative group overflow-hidden"
              >
                {/* Yellow Accent Glow on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#FFB800] rounded-b group-hover:w-full transition-all duration-500" />

                <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#121212] border border-[#FFB800]/40 flex items-center justify-center text-[#FFB800] group-hover:bg-[#FFB800] group-hover:text-[#121212] transition-colors duration-300 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-4xl sm:text-5xl font-black text-[#FFB800] tracking-tight font-sans">
                  {stat.value}
                </div>

                <div className="text-base font-bold text-white mt-2 uppercase tracking-wider text-xs">
                  {stat.label}
                </div>

                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional National Standard Banner */}
        <div className="mt-12 bg-[#121212] border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-[#FFB800]/10 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Sistemas de Gestión de Calidad Unificada</h4>
              <p className="text-gray-400 text-xs mt-0.5">
                Garantizamos 0% accidentes con pérdida de tiempo (Zero LTI) y 100% de cumplimiento en pruebas de probetas de hormigón a los 28 días.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 shrink-0 text-xs font-mono text-[#FFB800]">
            <span className="bg-[#2A2A2A] px-3 py-2 rounded border border-white/10">ISO 9001:2015</span>
            <span className="bg-[#2A2A2A] px-3 py-2 rounded border border-white/10">ISO 45001:2018</span>
            <span className="bg-[#2A2A2A] px-3 py-2 rounded border border-white/10">BIM LEVEL 2</span>
          </div>
        </div>

      </div>
    </section>
  );
};
