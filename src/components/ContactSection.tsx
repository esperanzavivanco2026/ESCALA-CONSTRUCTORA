import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, CheckCircle2, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';
import { ContactMessage } from '../types';

export const ContactSection: React.FC = () => {
  const [msgData, setMsgData] = useState<ContactMessage>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Solicitud de Información General',
    message: '',
    preferredContact: 'phone'
  });

  const [sent, setSent] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setMsgData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Solicitud de Información General',
        message: '',
        preferredContact: 'phone'
      });
    }, 4000);
  };

  return (
    <section id="contacto" className="py-24 bg-[#121212] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[#FFB800] text-xs font-bold uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded border border-[#FFB800]/30">
            <Mail className="w-4 h-4" />
            <span>Contacto Técnico Directo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Inicia tu Proyecto con Constructora ESCALA
          </h2>
          <p className="text-gray-300 text-base">
            Estamos listos para evaluar tus planos, coordinar una inspección de terreno o estructurar una propuesta técnica sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#2A2A2A] border border-white/10 rounded-xl p-8 space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                Oficinas Centrales & Sede Matriz
              </h3>

              <div className="space-y-5 text-sm text-gray-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#121212] rounded-lg border border-[#FFB800]/30 text-[#FFB800] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block">Quito, Ecuador (Sede Central)</strong>
                    <p className="text-xs text-gray-400 mt-0.5">Av. República de El Salvador N34-180 y Moscú, Edificio Capital Plaza, Piso 14.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#121212] rounded-lg border border-[#FFB800]/30 text-[#FFB800] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block">Central Telefónica Nacional</strong>
                    <p className="text-xs text-gray-400 mt-0.5">+593 (02) 398-4500 / PBX: +593 (02) 398-4501</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#121212] rounded-lg border border-[#FFB800]/30 text-[#FFB800] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block">Atención Comercial & Licitaciones</strong>
                    <p className="text-xs text-gray-400 mt-0.5">contacto@constructoraescala.com.ec</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#121212] rounded-lg border border-[#FFB800]/30 text-[#FFB800] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block">Horarios de Atención</strong>
                    <p className="text-xs text-gray-400 mt-0.5">Lunes a Viernes: 08:00 - 18:30 | Sábados: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/593991234567?text=Hola,%20deseo%20contactar%20con%20un%20asesor%20de%20Constructora%20ESCALA"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#121212] hover:bg-[#FFB800] text-gray-200 hover:text-[#121212] font-bold p-4 rounded-lg border border-[#FFB800]/40 transition-colors flex items-center justify-center space-x-3"
                >
                  <MessageSquare className="w-5 h-5 text-[#FFB800] group-hover:text-[#121212]" />
                  <span className="text-xs uppercase tracking-wider">Contactar Asesor Vía WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7 bg-[#2A2A2A] border border-white/10 rounded-xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Envíanos tu Mensaje o Proyecto</h3>
            <p className="text-xs text-gray-400 mb-6">Completa el formulario y un profesional técnico se comunicará en menos de 12 horas.</p>

            {sent ? (
              <div className="bg-[#121212] border border-[#FFB800] p-8 rounded-lg text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#FFB800] mx-auto" />
                <h4 className="text-xl font-bold text-white">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-xs text-gray-300">
                  Hemos registrado tus datos. Un ingeniero de nuestro equipo te contactará por {msgData.preferredContact === 'phone' ? 'teléfono' : msgData.preferredContact}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Nombre Completo *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ej. Arq. Fernando Reyes"
                      value={msgData.fullName}
                      onChange={(e) => setMsgData({ ...msgData, fullName: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-[#FFB800] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Correo Electrónico *</label>
                    <input
                      required
                      type="email"
                      placeholder="fernando@reyes.com"
                      value={msgData.email}
                      onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-[#FFB800] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Teléfono Móvil *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+593 99 876 5432"
                      value={msgData.phone}
                      onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-[#FFB800] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Asunto de Consulta</label>
                    <select
                      value={msgData.subject}
                      onChange={(e) => setMsgData({ ...msgData, subject: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:border-[#FFB800] outline-none"
                    >
                      <option value="Solicitud de Información General">Solicitud de Información General</option>
                      <option value="Cotización de Edificio / Obra Nueva">Cotización de Edificio / Obra Nueva</option>
                      <option value="Licitación / Proyecto Comercial">Licitación / Proyecto Comercial</option>
                      <option value="Servicios de Fiscalización y Cálculo">Servicios de Fiscalización y Cálculo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Mensaje / Detalle de la Obra *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe brevemente la ubicación, metros cuadrados aproximados, o adjunta inquietudes sobre plazos e ingeniería..."
                    value={msgData.message}
                    onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#FFB800] outline-none resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-3 text-xs text-gray-400">
                    <span>Contacto Preferido:</span>
                    <label className="flex items-center space-x-1 cursor-pointer">
                      <input
                        type="radio"
                        name="pref"
                        checked={msgData.preferredContact === 'phone'}
                        onChange={() => setMsgData({ ...msgData, preferredContact: 'phone' })}
                        className="accent-[#FFB800]"
                      />
                      <span>Llamada</span>
                    </label>
                    <label className="flex items-center space-x-1 cursor-pointer">
                      <input
                        type="radio"
                        name="pref"
                        checked={msgData.preferredContact === 'whatsapp'}
                        onChange={() => setMsgData({ ...msgData, preferredContact: 'whatsapp' })}
                        className="accent-[#FFB800]"
                      />
                      <span>WhatsApp</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#FFB800] hover:bg-[#FFCC00] text-[#121212] font-black px-8 py-3.5 rounded text-sm transition-all shadow-xl flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="pt-16 border-t border-white/10 space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-2 text-[#FFB800] text-xs font-bold uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Preguntas Frecuentes</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">Respuestas a Inquietudes Habituales</h3>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#2A2A2A] border border-white/10 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-white hover:text-[#FFB800] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#FFB800]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-gray-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
