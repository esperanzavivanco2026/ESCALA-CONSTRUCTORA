import React, { useState } from 'react';
import { Project } from '../types';
import { X, MapPin, Calendar, Maximize2, Building, ShieldCheck, UserCheck, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuoteForProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuoteForProject
}) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  const handleDownloadSpec = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#1E1E1E] border border-[#FFB800]/40 rounded-xl max-w-4xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl space-y-6 text-gray-200">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-[#1E1E1E]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="bg-[#FFB800] text-[#121212] text-xs font-black px-2.5 py-1 rounded uppercase">
              {project.category}
            </span>
            <span className="text-xs text-gray-400 font-mono">ID: {project.id}</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white bg-[#2A2A2A] p-2 rounded-full border border-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pb-8 space-y-8">
          
          {/* Main Title & Location Header */}
          <div>
            <div className="flex items-center text-sm text-[#FFB800] font-semibold mb-1">
              <MapPin className="w-4 h-4 mr-1.5 shrink-0" />
              <span>{project.location}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">{project.title}</h2>
          </div>

          {/* Image Gallery Showcase */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-[#121212] border border-white/10">
              <img
                src={images[activeImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-md overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx ? 'border-[#FFB800] scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specs Grid Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#121212] p-4 rounded-xl border border-white/10 text-xs">
            <div className="space-y-1">
              <span className="text-gray-400 block font-medium flex items-center">
                <Maximize2 className="w-3.5 h-3.5 text-[#FFB800] mr-1" /> Superficie Total:
              </span>
              <span className="text-white font-extrabold text-sm">{project.area}</span>
            </div>

            <div className="space-y-1">
              <span className="text-gray-400 block font-medium flex items-center">
                <Calendar className="w-3.5 h-3.5 text-[#FFB800] mr-1" /> Año de Entrega:
              </span>
              <span className="text-white font-extrabold text-sm">{project.year}</span>
            </div>

            <div className="space-y-1">
              <span className="text-gray-400 block font-medium flex items-center">
                <Building className="w-3.5 h-3.5 text-[#FFB800] mr-1" /> Estado de Obra:
              </span>
              <span className="text-[#FFB800] font-extrabold text-sm">{project.status}</span>
            </div>

            <div className="space-y-1">
              <span className="text-gray-400 block font-medium flex items-center">
                <UserCheck className="w-3.5 h-3.5 text-[#FFB800] mr-1" /> Líder de Proyecto:
              </span>
              <span className="text-white font-extrabold text-xs truncate block">{project.architectureLead}</span>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">
              Memoria Descriptiva & Ejecución
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.fullDetails}
            </p>
          </div>

          {/* Key Structural Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#FFB800] uppercase tracking-wider flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5" /> Innovaciones y Especificaciones Clave
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-center space-x-2 bg-[#2A2A2A] p-3 rounded border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleDownloadSpec}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#2A2A2A] hover:bg-[#333333] text-gray-200 px-5 py-3 rounded-md text-xs font-bold border border-white/10 transition-colors"
            >
              <Download className="w-4 h-4 text-[#FFB800]" />
              <span>{downloadSuccess ? 'PDF Descargado ✓' : 'Descargar Ficha Técnica PDF'}</span>
            </button>

            <button
              onClick={() => {
                const title = project.title;
                onClose();
                onOpenQuoteForProject(title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] px-7 py-3 rounded-md text-sm font-bold transition-all shadow-lg"
            >
              <span>Cotizar Proyecto Similar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
