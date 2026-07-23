import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/mockData';
import { Eye, MapPin, Maximize2, Calendar, CheckCircle2, ArrowRight, Layers, FileText } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProjectDetail: (project: Project) => void;
  onOpenQuoteModal: () => void;
}

const CATEGORIES: ProjectCategory[] = ['Todos', 'Comercial', 'Residencial', 'Industrial', 'Infraestructura', 'Diseño'];

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProjectDetail,
  onOpenQuoteModal
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-[#FFB800] text-xs font-bold uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded border border-[#FFB800]/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Portafolio De Obras Emblemáticas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Proyectos Destacados
            </h2>
            <p className="text-gray-400 text-base">
              Explora nuestras ejecuciones más recientes en sectores comercial, residencial, industrial e infraestructura vial.
            </p>
          </div>

          {/* Quick CTA */}
          <div className="mt-6 md:mt-0">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-bold text-sm px-6 py-3 rounded-md transition-all flex items-center space-x-2 shadow-lg"
            >
              <span>Cotizar Proyecto Similar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters Pill Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-md text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-[#FFB800] text-[#121212] border-[#FFB800] shadow-md shadow-[#FFB800]/10'
                  : 'bg-[#2A2A2A] text-gray-300 hover:text-white border-white/10 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#2A2A2A] border border-white/10 hover:border-[#FFB800] rounded-xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image & Overlay */}
                <div className="relative h-64 overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                    <span className="bg-[#121212]/90 backdrop-blur-md text-[#FFB800] border border-[#FFB800]/40 text-[11px] font-extrabold uppercase px-3 py-1 rounded">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded backdrop-blur-md ${
                      project.status === 'Completado'
                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                        : project.status === 'En Ejecución'
                        ? 'bg-amber-950/80 text-amber-400 border border-amber-500/30'
                        : 'bg-blue-950/80 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute inset-0 bg-[#121212]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={() => onSelectProjectDetail(project)}
                      className="bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-bold text-xs px-5 py-2.5 rounded flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver Ficha Técnica</span>
                    </button>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center text-xs text-[#FFB800] font-medium space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FFB800] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metadata Table */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-[#121212] p-3 rounded border border-white/5 text-gray-300">
                    <div className="flex items-center space-x-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FFB800]" />
                      <span>Área: <strong className="text-white">{project.area}</strong></span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FFB800]" />
                      <span>Año: <strong className="text-white">{project.year}</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-mono">
                  Cliente: <strong className="text-gray-200">{project.client}</strong>
                </span>
                <button
                  onClick={() => onSelectProjectDetail(project)}
                  className="text-xs text-[#FFB800] font-bold hover:underline flex items-center space-x-1"
                >
                  <span>Ver Ficha</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
