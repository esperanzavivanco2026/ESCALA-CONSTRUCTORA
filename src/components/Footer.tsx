import React from 'react';
import { ArrowUp, HardHat, Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-gray-400 border-t border-[#FFB800]/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#1E1E1E] border border-[#FFB800]/50 rounded-lg p-1.5 flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#FFB800]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 28H28M8 28V8L18 2L28 8V28M13 28V18H19V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-wider">ESCALA</span>
                <span className="block text-[10px] text-gray-400 uppercase font-semibold tracking-widest">CONSTRUCTORA NACIONAL</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Empresa líder en diseño arquitectónico, ingeniería sismorresistente y ejecución de obra civil de alto nivel en todo el territorio ecuatoriano.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#FFB800]" />
              <span>Reg. CACE #4892 • RUC: 1792839401001</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3 text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-[#FFB800]/30 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-[#FFB800] transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#FFB800] transition-colors">Servicios Integrales</a></li>
              <li><a href="#proyectos" className="hover:text-[#FFB800] transition-colors">Portafolio de Proyectos</a></li>
              <li><a href="#cobertura" className="hover:text-[#FFB800] transition-colors">Cobertura Nacional</a></li>
              <li><a href="#nosotros" className="hover:text-[#FFB800] transition-colors">Nosotros & Equipo</a></li>
              <li><a href="#contacto" className="hover:text-[#FFB800] transition-colors">Contacto Técnico</a></li>
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="space-y-3 text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-[#FFB800]/30 pb-2">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>Diseño Arquitectónico BIM</li>
              <li>Construcción Comercial</li>
              <li>Residencias de Alta Gama</li>
              <li>Naves Industriales</li>
              <li>Ingeniería Sismorresistente</li>
              <li>Fiscalización de Obras</li>
            </ul>
          </div>

          {/* Direct CTA Box */}
          <div className="space-y-3 bg-[#1A1A1A] p-5 rounded-xl border border-white/10 text-xs">
            <h4 className="text-white font-bold text-sm">Cotiza tu Proyecto</h4>
            <p className="text-gray-400 text-[11px]">
              Obtén una estimación de costos y cronograma preliminar para tu terreno u obra.
            </p>
            <button
              onClick={onOpenQuoteModal}
              className="w-full bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-black py-2.5 rounded transition-all text-xs flex items-center justify-center space-x-1 shadow-md"
            >
              <span>Cotizar Ahora</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 pt-4">
          <p>© {new Date().getFullYear()} Constructora ESCALA S.A. Todos los derechos reservados.</p>
          
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="#contacto" className="hover:text-gray-300">Términos de Servicio</a>
            <a href="#contacto" className="hover:text-gray-300">Política de Privacidad</a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#1E1E1E] hover:bg-[#FFB800] text-gray-300 hover:text-[#121212] rounded border border-white/10 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
