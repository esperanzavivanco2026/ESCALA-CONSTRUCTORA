import React from 'react';
import { ShieldCheck, Cpu, HardHat, Award, ArrowRight, CheckCircle2, Factory } from 'lucide-react';

interface AboutUsProps {
  onOpenQuoteModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="nosotros" className="py-24 bg-[#121212] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#FFB800] text-xs font-bold uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded border border-[#FFB800]/20">
              <HardHat className="w-3.5 h-3.5" />
              <span>Nuestra Identidad & Filosofía</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Liderando la Nueva Era de la Construcción en Ecuador
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              En <strong className="text-white">Constructora ESCALA</strong> unimos el rigor de la ingeniería sismorresistente con la sofisticación del diseño arquitectónico contemporáneo. Desde hace más de 18 años, entregamos edificaciones que transforman entornos urbanos y potencian negocios a escala nacional.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[#1E1E1E] p-4 rounded-lg border border-white/10">
                <span className="text-2xl font-black text-[#FFB800]">100%</span>
                <span className="text-xs text-gray-300 block font-medium mt-1">Sostenibilidad & Eficiencia Energética</span>
              </div>
              <div className="bg-[#1E1E1E] p-4 rounded-lg border border-white/10">
                <span className="text-2xl font-black text-[#FFB800]">BIM 3D</span>
                <span className="text-xs text-gray-300 block font-medium mt-1">Cero Interferencias en Obra</span>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center space-x-2 bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-extrabold px-7 py-3.5 rounded text-sm transition-all shadow-xl"
            >
              <span>Agendar Reunión Técnica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Architectural Visual Blueprint Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#1A1A1A] border border-[#FFB800]/30 rounded-2xl p-8 relative shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Factory className="w-48 h-48 text-[#FFB800]" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs text-[#FFB800] font-bold uppercase tracking-wider">
                    Estándares Constructivos ESCALA
                  </span>
                  <span className="text-xs font-mono text-gray-400">CERT-2026-NEC</span>
                </div>

                <div className="space-y-4 text-xs text-gray-300">
                  <div className="flex items-start space-x-3 bg-[#121212] p-4 rounded-lg border border-white/5">
                    <ShieldCheck className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm block">Cálculo Sismorresistente Avanzado (NEC-15)</strong>
                      <p className="text-gray-400 mt-1">Estructuras diseñadas para absorber y disipar energías sísmicas extremas con aislamientos de elastómeros de alta capacidad.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-[#121212] p-4 rounded-lg border border-white/5">
                    <Cpu className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm block">Metodología VDC & Monitoreo con Drones</strong>
                      <p className="text-gray-400 mt-1">Virtual Design & Construction: orquestamos proveedores, presupuestos y fotogrametría aérea semanal.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-[#121212] p-4 rounded-lg border border-white/5">
                    <Award className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm block">Triple Certificación de Calidad y Salud</strong>
                      <p className="text-gray-400 mt-1">Procesos auditados bajo normas ISO 9001 (Calidad) e ISO 45001 (Seguridad Laboral Industrial).</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Executive Architectural Leadership Team */}
        <div className="pt-12 border-t border-white/10 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-extrabold text-white">Dirección Técnica & Arquitectónica</h3>
            <p className="text-gray-400 text-xs mt-1">
              Ingenieros y arquitectos colegiados dedicados a la excelencia de cada obra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1E1E1E] border border-white/10 rounded-xl p-6 text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#FFB800] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                  alt="Arq. Mateo Valenzuela"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Arq. Mateo Valenzuela</h4>
                <span className="text-xs text-[#FFB800] font-semibold block">Director de Diseño Arquitectónico</span>
                <p className="text-xs text-gray-400 mt-2">M.Sc. en Arquitectura Sostenible por la Universidad Politécnica de Catalunya.</p>
              </div>
            </div>

            <div className="bg-[#1E1E1E] border border-white/10 rounded-xl p-6 text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#FFB800] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                  alt="Ing. Sofía Alarcón"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Ing. Sofía Alarcón, M.Sc.</h4>
                <span className="text-xs text-[#FFB800] font-semibold block">Directora de Ingeniería Estructural</span>
                <p className="text-xs text-gray-400 mt-2">Especialista en Aislamiento Sísmico y Hormigón Postensado.</p>
              </div>
            </div>

            <div className="bg-[#1E1E1E] border border-white/10 rounded-xl p-6 text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#FFB800] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
                  alt="Ing. Carlos Mendoza"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Ing. Carlos Mendoza</h4>
                <span className="text-xs text-[#FFB800] font-semibold block">Gerente General de Operaciones</span>
                <p className="text-xs text-gray-400 mt-2">22 años dirigiendo megaobras de infraestructura industrial y vial.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
