import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Calculator, ShieldCheck, Download, Send, PhoneCall } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedCity?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedCity
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    projectType: preselectedService || 'Comercial',
    areaSize: 500,
    finishLevel: 'Premium',
    city: preselectedCity || 'Quito',
    timeframe: '6 a 12 meses',
    hasBlueprint: true,
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Price estimator rates per m²
  const baseRates: Record<string, number> = {
    'Comercial': 650,
    'Residencial': 780,
    'Industrial': 480,
    'Remodelación': 390,
    'Infraestructura': 550,
    'Diseño Arquitectónico': 45
  };

  const finishMultipliers = {
    'Estándar': 1.0,
    'Premium': 1.25,
    'Deluxe Arquitectónico': 1.55
  };

  const baseRate = baseRates[formData.projectType] || 600;
  const finishMult = finishMultipliers[formData.finishLevel] || 1.2;
  const estimatedTotal = Math.round(formData.areaSize * baseRate * finishMult);
  const estEstructura = Math.round(estimatedTotal * 0.45);
  const estAcabados = Math.round(estimatedTotal * 0.35);
  const estGestion = Math.round(estimatedTotal * 0.20);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#1E1E1E] border border-[#FFB800]/50 rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl space-y-6 text-gray-200">
        
        {/* Modal Top Header */}
        <div className="sticky top-0 z-20 bg-[#1E1E1E]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#FFB800] text-[#121212] rounded">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Calculadora & Cotizador de Proyecto</h2>
              <p className="text-xs text-gray-400">Constructora ESCALA • Estimado Presupuestario</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white bg-[#2A2A2A] p-2 rounded-full border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <div className="px-6 pb-8 space-y-6">
            
            {/* Steps Progress Indicator */}
            <div className="flex items-center justify-between text-xs font-bold border-b border-white/10 pb-3">
              <span className={`flex items-center ${step >= 1 ? 'text-[#FFB800]' : 'text-gray-500'}`}>
                1. Tipo & Área
              </span>
              <span className="text-gray-600">→</span>
              <span className={`flex items-center ${step >= 2 ? 'text-[#FFB800]' : 'text-gray-500'}`}>
                2. Acabados & Ciudad
              </span>
              <span className="text-gray-600">→</span>
              <span className={`flex items-center ${step >= 3 ? 'text-[#FFB800]' : 'text-gray-500'}`}>
                3. Datos & Propuesta
              </span>
            </div>

            {/* STEP 1: Tipo de Proyecto & Área */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label className="block text-xs font-bold text-[#FFB800] uppercase tracking-wider mb-2">
                    Selecciona el Tipo de Proyecto:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['Comercial', 'Residencial', 'Industrial', 'Remodelación', 'Infraestructura', 'Diseño Arquitectónico'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`p-3.5 rounded-lg border text-xs font-bold text-left transition-all ${
                          formData.projectType === type
                            ? 'bg-[#FFB800] text-[#121212] border-[#FFB800] shadow-md'
                            : 'bg-[#121212] text-gray-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 bg-[#121212] p-5 rounded-lg border border-white/10">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-gray-300">Área Estimada del Proyecto (m²):</span>
                    <span className="text-[#FFB800] text-base font-mono">{formData.areaSize.toLocaleString()} m²</span>
                  </div>
                  
                  <input
                    type="range"
                    min="50"
                    max="10000"
                    step="50"
                    value={formData.areaSize}
                    onChange={(e) => setFormData({ ...formData, areaSize: Number(e.target.value) })}
                    className="w-full accent-[#FFB800] cursor-pointer"
                  />

                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>50 m²</span>
                    <span>2,500 m²</span>
                    <span>5,000 m²</span>
                    <span>10,000+ m²</span>
                  </div>
                </div>

                <div className="bg-[#2A2A2A] p-4 rounded-lg border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Estimación Aproximada Base:</span>
                    <span className="text-2xl font-black text-[#FFB800] font-mono">
                      ${estimatedTotal.toLocaleString()} USD
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-bold px-6 py-3 rounded text-xs flex items-center space-x-2"
                  >
                    <span>Siguiente Paso</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Acabados & Ubicación */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label className="block text-xs font-bold text-[#FFB800] uppercase tracking-wider mb-2">
                    Nivel de Acabados & Especificación Técnica:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(['Estándar', 'Premium', 'Deluxe Arquitectónico'] as const).map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, finishLevel: level })}
                        className={`p-4 rounded-lg border text-left transition-all space-y-1 ${
                          formData.finishLevel === level
                            ? 'bg-[#FFB800] text-[#121212] border-[#FFB800] shadow-md'
                            : 'bg-[#121212] text-gray-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <span className="font-bold text-xs block">{level}</span>
                        <span className="text-[11px] block opacity-80">
                          {level === 'Estándar' && 'Materiales nacionales normados.'}
                          {level === 'Premium' && 'Hormigón visto, cristal templado, porcelanatos.'}
                          {level === 'Deluxe Arquitectónico' && 'Importados de alta gama, domótica, fachada libre.'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Ciudad / Provincia:
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#FFB800] outline-none"
                    >
                      <option value="Quito">Quito / Pichincha</option>
                      <option value="Guayaquil">Guayaquil / Guayas / Samborondón</option>
                      <option value="Cuenca">Cuenca / Azuay</option>
                      <option value="Manta">Manta / Manabí</option>
                      <option value="Ambato">Ambato / Tungurahua</option>
                      <option value="Otra Provincia">Otra Provincia de Ecuador</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Plazo de Ejecución Deseado:
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#FFB800] outline-none"
                    >
                      <option value="Menos de 6 meses">Urgente (Menos de 6 meses)</option>
                      <option value="6 a 12 meses">6 a 12 meses</option>
                      <option value="12 a 24 meses">12 a 24 meses</option>
                      <option value="En Planificación para 2027">En Planificación Futura</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Budget Breakdown */}
                <div className="bg-[#121212] p-4 rounded-lg border border-white/10 space-y-3">
                  <h4 className="text-xs font-bold text-[#FFB800] uppercase tracking-wider">
                    Desglose Presupuestario Estimado:
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-[#2A2A2A] p-2.5 rounded text-center">
                      <span className="text-gray-400 text-[10px] block">Estructura / Obra Gris</span>
                      <strong className="text-white font-mono">${estEstructura.toLocaleString()}</strong>
                    </div>
                    <div className="bg-[#2A2A2A] p-2.5 rounded text-center">
                      <span className="text-gray-400 text-[10px] block">Acabados & Cristalería</span>
                      <strong className="text-white font-mono">${estAcabados.toLocaleString()}</strong>
                    </div>
                    <div className="bg-[#2A2A2A] p-2.5 rounded text-center">
                      <span className="text-gray-400 text-[10px] block">Gestión & Permisos</span>
                      <strong className="text-white font-mono">${estGestion.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-gray-400 hover:text-white text-xs font-bold flex items-center space-x-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Atrás</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-bold px-6 py-3 rounded text-xs flex items-center space-x-2"
                  >
                    <span>Finalizar & Recibir Cotización</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact & Submit */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
                <div className="bg-[#121212] p-4 rounded border border-[#FFB800]/30 text-xs text-gray-300 space-y-1">
                  <span className="text-[#FFB800] font-bold block">Resumen de tu Cotización:</span>
                  <p>
                    Proyecto <strong>{formData.projectType}</strong> de <strong>{formData.areaSize} m²</strong> en <strong>{formData.city}</strong> con acabados <strong>{formData.finishLevel}</strong>. Total estimado: <strong className="text-white font-mono">${estimatedTotal.toLocaleString()} USD</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Nombre Completo *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ej. Ing. Carlos Andrade"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#FFB800] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Correo Electrónico *</label>
                    <input
                      required
                      type="email"
                      placeholder="carlos@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#FFB800] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Teléfono / WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+593 99 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#FFB800] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Empresa / Razón Social (Opcional)</label>
                    <input
                      type="text"
                      placeholder="Ej. Inmobiliaria del Sur"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#FFB800] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Comentarios Adicionales o Requerimientos Especiales</label>
                  <textarea
                    rows={2}
                    placeholder="Escribe aquí detalles sobre terreno, permisos previos o fecha ideal de inicio..."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#FFB800] outline-none resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-gray-400 hover:text-white text-xs font-bold flex items-center space-x-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Atrás</span>
                  </button>

                  <button
                    type="submit"
                    className="bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-black px-8 py-3.5 rounded text-sm transition-all shadow-xl flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Cotización</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 bg-[#FFB800]/20 text-[#FFB800] rounded-full flex items-center justify-center mx-auto border-2 border-[#FFB800]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">¡Solicitud de Cotización Recibida!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Gracias, <strong className="text-white">{formData.fullName}</strong>. Un Ingeniero Senior de Constructora ESCALA revisará las especificaciones de tu proyecto de <strong className="text-[#FFB800]">{formData.projectType} ({formData.areaSize} m²)</strong>.
              </p>
            </div>

            <div className="bg-[#121212] p-5 rounded-lg border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs">
              <span className="text-[#FFB800] font-bold block">Próximos Pasos:</span>
              <div className="space-y-1 text-gray-300">
                <p>1. Envío de propuesta preliminar PDF a <strong>{formData.email}</strong> en menos de 24 horas.</p>
                <p>2. Coordinación de visita técnica de inspección al terreno en <strong>{formData.city}</strong>.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/593991234567?text=Hola%20Constructora%20ESCALA,%20acabo%20de%20cotizar%20un%20proyecto%20de%20${formData.projectType}%20en%20${formData.city}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded text-xs flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Hablar Directo por WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto bg-[#2A2A2A] hover:bg-[#333333] text-gray-200 font-bold px-6 py-3 rounded text-xs border border-white/10"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
