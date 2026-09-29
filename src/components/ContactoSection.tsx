import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  Building,
  ShieldCheck,
  ChevronDown,
  PhoneCall,
  MessageCircle
} from 'lucide-react';
import { MetucLogo } from './MetucLogo';

export const ContactoSection: React.FC<{ selectedPlan?: string }> = ({
  selectedPlan = 'Plan METUC FULL',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    locality: 'San Miguel de Tucumán',
    plan: selectedPlan,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: '¿Cómo accedo a las prestaciones médicas una vez afiliado?',
      a: 'El acceso es con carencia inmediata desde tu alta. Podés solicitar la orden médica autorizada vía web enviando la foto de la prescripción o acudiendo a nuestra oficina en San Miguel de Tucumán.',
    },
    {
      q: '¿Qué debo hacer si fallece un familiar cubierto por el servicio de sepelio?',
      a: 'Comunicate inmediatamente a nuestra línea de guardia disponible las 24 horas, los 365 días del año. Nuestro equipo se encarga en el acto del retiro, traslado, acondicionamiento, trámites y sala velatoria.',
    },
    {
      q: '¿Cómo funciona el 10% de reintegro en farmacias?',
      a: 'Al adquirir medicamentos recetados en farmacias de la provincia, presentás la receta médica y el ticket de compra. Te reintegramos el 10% del importe total con un tope mensual de hasta $10.000 para tu grupo familiar.',
    },
    {
      q: '¿Quiénes componen el grupo familiar titular?',
      a: 'El titular, su cónyuge o conviviente y hasta dos hijos de 1 a 18 años. Además, podés incorporar a todos los adherentes mayores o menores que desees con una cuota mensual solidaria.',
    },
  ];

  return (
    <section id="contacto" className="w-full max-w-[1400px] mx-auto mt-14 sm:mt-20 px-4 sm:px-6 md:px-8 pb-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
          Contacto & Afiliaciones
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0a1b33] mt-1.5">
          Estamos a tu disposición en toda la provincia
        </h2>
        <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
          Comunicate hoy mismo con nuestro equipo de asesores o envianos tu solicitud para afiliarte a METUC en minutos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Phone Call */}
        <div className="lg:col-span-5 space-y-5">
          {/* Main Direct Call Card */}
          <div className="bg-gradient-to-br from-[#0a152d] to-[#162a56] text-white p-6 sm:p-7 rounded-3xl shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-1 bg-white rounded-full shadow-2xs">
                  <MetucLogo size="xs" />
                </div>
                <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Atención Inmediata
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold">
                ¿Querés afiliarte hoy mismo?
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Comunicate telefónicamente con nuestros asesores o envianos un mensaje por WhatsApp para recibir la cotización exacta para tu grupo familiar.
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-white/10 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-blue-200 uppercase tracking-wider block font-semibold">Línea de Afiliaciones</span>
                  <span className="text-sm font-bold text-white tracking-wide">Guardia Activa</span>
                </div>
                <a
                  href="https://wa.me/5493816282664?text=Hola%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20las%20afiliaciones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar mensaje</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                  Guardia Sepelio 24 Hs
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0a1b33]">
                  Guardia Telefónica y WhatsApp 24/7
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Atención ininterrumpida los 365 días del año.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                  WhatsApp Directo
                </span>
                <a
                  href="https://wa.me/5493816282664?text=Hola%20quisiera%20recibir%20informaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#0a1b33] hover:text-[#25D366] transition-colors inline-flex items-center gap-1"
                >
                  <span>+54 9 381 628-2664</span>
                  <span>→</span>
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Consultas rápidas e inicio de trámite de afiliación.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                  Sede Central & Administración
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0a1b33]">
                  San Miguel de Tucumán, Tucumán
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Lunes a Viernes de 8:00 a 18:00 hs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                  Correo Electrónico
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0a1b33]">
                  afiliaciones@metuc.org.ar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0a1b33]">
            Formulario de Consulta y Afiliación
          </h3>
          <p className="text-xs text-slate-500 mt-1 mb-6">
            Completá tus datos y te enviaremos la propuesta para vos y tu familia.
          </p>

          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#0a1b33]">
                ¡Gracias por comunicarte con METUC!
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Hemos recibido tus datos correctamente. Un asesor se comunicará al número indicado a la brevedad para coordinar tu afiliación.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-blue-700 hover:underline mt-4 cursor-pointer"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-800 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Teléfono de Contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 381 555-1234"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-800 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Localidad en Tucumán
                  </label>
                  <select
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-800 bg-slate-50/50"
                  >
                    <option value="San Miguel de Tucumán">San Miguel de Tucumán</option>
                    <option value="Yerba Buena">Yerba Buena</option>
                    <option value="Banda del Río Salí">Banda del Río Salí</option>
                    <option value="Tafí Viejo">Tafí Viejo</option>
                    <option value="Concepción">Concepción</option>
                    <option value="Aguilares">Aguilares</option>
                    <option value="Monteros">Monteros</option>
                    <option value="Lules">Lules</option>
                    <option value="Famaillá">Famaillá</option>
                    <option value="Otra localidad de Tucumán">Otra localidad de Tucumán</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Plan de Interés
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-800 bg-slate-50/50"
                  >
                    <option value="Plan METUC FULL">Plan METUC FULL (Salud + Sepelio + Reintegros)</option>
                    <option value="Plan Salud">Plan Salud (Consultas, Óptica, Estudios)</option>
                    <option value="Plan Sepelio">Plan Sepelio (Cobertura funeraria 24 hs)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Consulta o Integrantes del Grupo Familiar (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Detallá si querés sumar cónyuge, hijos o adherentes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-800 resize-none bg-slate-50/50"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tus datos están protegidos y sólo se usan para asesorarte.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0a152d] hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Solicitud</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="mt-12 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
            Preguntas Frecuentes
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0a1b33] mt-1">
            Respuestas claras a tus dudas sobre METUC
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/70 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0a1b33] hover:text-blue-900 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openFaq === idx ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
