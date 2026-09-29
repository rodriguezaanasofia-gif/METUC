import React, { useState } from 'react';
import {
  X,
  HeartPulse,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Building2,
  FileText
} from 'lucide-react';
import { MetucLogo } from './MetucLogo';

export type MetucTab = 'beneficios' | 'sepelio' | 'planes' | 'contacto';

interface MetucDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: MetucTab;
}

export const MetucDetailModal: React.FC<MetucDetailModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'beneficios',
}) => {
  const [activeTab, setActiveTab] = useState<MetucTab>(initialTab);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    localidad: 'San Miguel de Tucumán',
    plan: 'Plan METUC FULL',
    mensaje: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync tab when opened with a specific one
  React.useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#090b11] border border-white/15 rounded-2xl shadow-2xl text-white flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-white rounded-full">
              <MetucLogo size="xs" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-white">
                  METUC
                </span>
                <span className="text-[10px] font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full uppercase">
                  Mutual Tucumana
                </span>
              </div>
              <p className="text-xs text-neutral-400">Mutual de Empleados Tucumanos • En alianza con AES</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 pb-3 border-b border-white/10 overflow-x-auto scrollbar-none bg-black/20">
          <button
            onClick={() => setActiveTab('beneficios')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'beneficios'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Beneficios & Salud</span>
          </button>

          <button
            onClick={() => setActiveTab('sepelio')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'sepelio'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Sepelio 24 Hs</span>
          </button>

          <button
            onClick={() => setActiveTab('planes')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'planes'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planes de Afiliación</span>
          </button>

          <button
            onClick={() => setActiveTab('contacto')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'contacto'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contacto & Guardia</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: BENEFICIOS */}
          {activeTab === 'beneficios' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Carencia Inmediata • Toda la Provincia
                </span>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mt-1">
                  Cobertura Social & Atención Médica Integral
                </h3>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  Ponemos a disposición de los afiliados y su grupo familiar una completa red de profesionales de la salud con carencia inmediata y autorizaciones ágiles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">Consultas Médicas & Especialidades</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Medicina clínica, pediatría, ginecología, cardiología, traumatología y principales especialidades con bono social directo.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">Óptica & Valor Social</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Armazones y cristales con subsidios solidarios para titulares y grupo familiar en ópticas adheridas de Tucumán.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">Laboratorio & Diagnóstico</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Análisis clínicos bioquímicos, ecografías, radiografías y estudios con aranceles institucionales preferenciales.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">Odontología & Farmacia</h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Atención odontológica preventiva y asistencial, más descuentos directos en red de farmacias de la provincia.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900/40 to-neutral-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-300 block">¿Querés afiliar a tu familia hoy mismo?</span>
                  <span className="text-xs text-neutral-400">Sin período de carencia para las principales prestaciones.</span>
                </div>
                <button
                  onClick={() => setActiveTab('contacto')}
                  className="py-2 px-4 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Solicitar Afiliación
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: SEPELIO */}
          {activeTab === 'sepelio' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                  Guardia Telefónica Permanente 24/7
                </span>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mt-1">
                  Servicio de Sepelio Prestacional Integral
                </h3>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  Tranquilidad y respaldo absoluto para los momentos más difíciles. Cobertura funeraria completa en caso de fallecimiento por cualquier causa (inclusive COVID-19) en toda la provincia de Tucumán.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-2" />
                  <h5 className="text-xs font-semibold text-white">Servicio Completo</h5>
                  <p className="text-[11px] text-neutral-400 mt-1">Retiro, acondicionamiento y traslado en coche fúnebre de categoría.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-2" />
                  <h5 className="text-xs font-semibold text-white">Sala Velatoria de Primer Nivel</h5>
                  <p className="text-[11px] text-neutral-400 mt-1">Salas climatizadas con servicio de cafetería y asistencia a deudos.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-2" />
                  <h5 className="text-xs font-semibold text-white">Ataúd Reglamentario</h5>
                  <p className="text-[11px] text-neutral-400 mt-1">Ataúd abovedado con herrajes de calidad e inscripciones protocolares.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-2" />
                  <h5 className="text-xs font-semibold text-white">Inhumación o Cremación</h5>
                  <p className="text-[11px] text-neutral-400 mt-1">Gestión integral de trámites en cementerios públicos o privados.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-2" />
                  <h5 className="text-xs font-semibold text-white">Cero Gastos Imprevistos</h5>
                  <p className="text-[11px] text-neutral-400 mt-1">Evita desembolsos millonarios e imprevistos para tus seres queridos.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-2" />
                  <h5 className="text-xs font-semibold text-white">Guardia Telefónica 24 Hs</h5>
                  <p className="text-[11px] text-neutral-400 mt-1">Línea activa los 365 días del año para activación inmediata.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-neutral-900 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">Guardia de Sepelio Activa</span>
                    <span className="text-base font-bold text-white tracking-wide">0800-METUC (24 Horas)</span>
                  </div>
                </div>
                <a
                  href="tel:0800METUC"
                  className="py-2 px-5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition-colors shrink-0"
                >
                  Llamar a Guardia
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: PLANES */}
          {activeTab === 'planes' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Cuotas Mutuales Solidarias
                </span>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mt-1">
                  Planes de Cobertura para Vos y Tu Familia
                </h3>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  Todos los planes incluyen servicio de sepelio 24 hs y atención médica prestacional con carencia inmediata.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Plan 1 */}
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Básico Integral</span>
                    <h4 className="text-base font-semibold text-white mt-1">Plan Familiar Mutual</h4>
                    <p className="text-xs text-neutral-400 mt-2">Para el titular, cónyuge y hasta dos hijos de 1 a 18 años.</p>
                    <ul className="mt-4 space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Atención médica ambulatoria</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Óptica con valor social</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Sepelio integral las 24 hs</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, plan: 'Plan Familiar Mutual' });
                      setActiveTab('contacto');
                    }}
                    className="mt-6 w-full py-2 rounded-lg border border-white/20 text-xs font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    Elegir Plan Familiar
                  </button>
                </div>

                {/* Plan 2: Destacado */}
                <div className="p-5 rounded-xl bg-gradient-to-b from-blue-950/40 to-slate-900/60 border border-blue-400/50 shadow-lg relative flex flex-col justify-between">
                  <div className="absolute -top-2.5 right-4 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Recomendado
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider block">Máxima Cobertura</span>
                    <h4 className="text-base font-semibold text-white mt-1">Plan METUC FULL</h4>
                    <p className="text-xs text-blue-200/80 mt-2">Cobertura médica ampliada con reintegro y mayores bonificaciones ópticas.</p>
                    <ul className="mt-4 space-y-2 text-xs text-blue-100">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Sistema de Reintegros</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Consultas y especialistas bonificados</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Óptica con subsidio preferencial</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Sepelio VIP con sala climatizada 24 hs</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, plan: 'Plan METUC FULL' });
                      setActiveTab('contacto');
                    }}
                    className="mt-6 w-full py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    Elegir Plan FULL
                  </button>
                </div>

                {/* Plan 3 */}
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Adherentes</span>
                    <h4 className="text-base font-semibold text-white mt-1">Plan Familia Extendida</h4>
                    <p className="text-xs text-neutral-400 mt-2">Para incorporar a padres, tíos, abuelos o hijos mayores con cuota social.</p>
                    <ul className="mt-4 space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Sin límite de edad para adherentes</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Cobertura completa de sepelio</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Descuentos en farmacia y óptica</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, plan: 'Plan Familia Extendida' });
                      setActiveTab('contacto');
                    }}
                    className="mt-6 w-full py-2 rounded-lg border border-white/20 text-xs font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    Elegir Plan Adherentes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CONTACTO */}
          {activeTab === 'contacto' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Afiliaciones Inmediatas
                </span>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mt-1">
                  Comunicate con METUC en Tucumán
                </h3>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  Dejanos tus datos o contactate directamente con nuestro equipo de atención al afiliado.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Contact Information */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs text-neutral-400 block">Guardia Sepelio 24 Hs</span>
                      <span className="text-sm font-semibold text-white">0800-METUC</span>
                      <span className="text-[11px] text-neutral-400 block mt-0.5">Atención ininterrumpida los 365 días</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs text-neutral-400 block">Sede Central</span>
                      <span className="text-sm font-semibold text-white">San Miguel de Tucumán, Tucumán</span>
                      <span className="text-[11px] text-neutral-400 block mt-0.5">Lun a Vie de 8:00 a 18:00 hs</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <Mail className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs text-neutral-400 block">Correo Electrónico</span>
                      <span className="text-sm font-semibold text-white">afiliaciones@metuc.org.ar</span>
                      <span className="text-[11px] text-neutral-400 block mt-0.5">Consultas y convenios institucionales</span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-7 p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  {formSubmitted ? (
                    <div className="py-8 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-semibold text-white">¡Solicitud Enviada con Éxito!</h4>
                      <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                        Un asesor de METUC se comunicará con vos al instante para formalizar la afiliación.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-medium text-neutral-300 mb-1">Nombre y Apellido</label>
                        <input
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          placeholder="Tu nombre completo"
                          className="w-full text-xs px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-medium text-neutral-300 mb-1">Teléfono / WhatsApp</label>
                          <input
                            type="tel"
                            required
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            placeholder="381-XXXXXXX"
                            className="w-full text-xs px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-neutral-300 mb-1">Plan de Interés</label>
                          <select
                            value={formData.plan}
                            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                            className="w-full text-xs px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white focus:outline-none focus:border-white/40"
                          >
                            <option value="Plan METUC FULL" className="bg-neutral-900 text-white">Plan METUC FULL</option>
                            <option value="Plan Familiar Mutual" className="bg-neutral-900 text-white">Plan Familiar Mutual</option>
                            <option value="Plan Familia Extendida" className="bg-neutral-900 text-white">Plan Familia Extendida</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-neutral-300 mb-1">Mensaje o Consulta (Opcional)</label>
                        <textarea
                          rows={2}
                          value={formData.mensaje}
                          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                          placeholder="¿Alguna consulta sobre la cobertura médica o sepelio?"
                          className="w-full text-xs px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shadow-sm"
                      >
                        Enviar Solicitud de Afiliación
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
