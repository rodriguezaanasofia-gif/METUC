import React, { useState } from 'react';
import {
  Stethoscope,
  Glasses,
  TestTubes,
  Scan,
  Smile,
  HeartHandshake,
  Clock,
  ShieldCheck,
  CheckCircle,
  FileText,
  Phone,
  AlertCircle,
  Pill,
  X,
  MapPin,
  ArrowRight
} from 'lucide-react';

export const NuestrosServiciosSection: React.FC<{ onContactClick: () => void }> = ({
  onContactClick,
}) => {
  const [activeTab, setActiveTab] = useState<'salud' | 'sepelio'>('salud');
  const [isFarmaciasModalOpen, setIsFarmaciasModalOpen] = useState(false);

  const healthServices = [
    {
      title: 'Consultas Médicas',
      desc: 'Atención en medicina general y diversas especialidades clínicas.',
      cobertura: 'Valor según prestación',
      carencia: 'Inmediata',
      autorizacion: 'Vía web / oficina',
      icon: Stethoscope,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      title: 'Óptica',
      desc: 'Acceso a armazones, cristales de receta y lentes de contacto.',
      cobertura: 'Valor social',
      carencia: 'Inmediata',
      autorizacion: 'Vía web / oficina',
      icon: Glasses,
      color: 'text-purple-600 bg-purple-50',
    },
    {
      title: 'Estudios de Laboratorio',
      desc: 'Análisis clínicos completos de sangre, orina y perfiles bioquímicos.',
      cobertura: 'Valor según prestación',
      carencia: 'Inmediata',
      autorizacion: 'Vía web / oficina',
      icon: TestTubes,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      title: 'Diagnóstico por Imágenes',
      desc: 'Radiografías, ecografías y estudios diagnósticos ambulatorios.',
      cobertura: 'Valor según prestación',
      carencia: 'Inmediata',
      autorizacion: 'Vía web / oficina',
      icon: Scan,
      color: 'text-indigo-600 bg-indigo-50',
    },
    {
      title: 'Odontología',
      desc: 'Consultas odontológicas, arreglos, extracciones y prevención bucal.',
      cobertura: 'Valor según prestación',
      carencia: 'Inmediata',
      autorizacion: 'Vía web / oficina',
      icon: Smile,
      color: 'text-amber-600 bg-amber-50',
    },
  ];

  return (
    <section id="servicios" className="w-full max-w-[1400px] mx-auto mt-14 sm:mt-20 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0a1b33] mt-1.5">
            Detalle de Coberturas & Prestaciones
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl">
            Toda la información de nuestra red mutual extraída directamente de nuestra guía de prestaciones. Sin letra chica.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200/80 shrink-0 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('salud')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'salud'
                ? 'bg-white text-[#0a1b33] shadow-2xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Cobertura Social (Salud)
          </button>
          <button
            onClick={() => setActiveTab('sepelio')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'sepelio'
                ? 'bg-white text-[#0a1b33] shadow-2xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Servicio de Sepelio (24 Hs)
          </button>
        </div>
      </div>

      {/* TAB 1: COBERTURA SOCIAL (SALUD) */}
      {activeTab === 'salud' && (
        <div className="mt-8 space-y-6">
          <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </span>
              <div>
                <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                  Tu Salud, Nuestra Prioridad
                </h4>
                <p className="text-xs text-emerald-900 mt-0.5">
                  Todas las prestaciones de salud cuentan con <strong>Carencia Inmediata</strong> desde el momento de la afiliación activa.
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-200">
              Autorizaciones Vía Web u Oficina
            </span>
          </div>

          {/* Table / Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {healthServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${srv.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        {srv.carencia}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-[#0a1b33]">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Cobertura:</span>
                        <span className="font-semibold text-slate-800">{srv.cobertura}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Carencia:</span>
                        <span className="font-semibold text-emerald-700">{srv.carencia}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Autorización:</span>
                        <span className="font-medium text-slate-700">{srv.autorizacion}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <button
                      onClick={onContactClick}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer flex items-center gap-1 transition-colors"
                    >
                      <span>Solicitar cartilla médica</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Farmacia Card with 10% reintegro */}
            <div className="bg-gradient-to-br from-blue-900 to-[#0a152d] text-white rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  Beneficio Adicional Exclusivo
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl mt-1.5">
                  Reintegro en Farmacias
                </h3>
                <div className="text-2xl sm:text-3xl font-display font-bold text-amber-300 mt-2">
                  10% de reintegro
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  En medicamentos recetados, sobre el monto total de la compra con tope de <strong>$10.000 mensual</strong> para el grupo familiar.
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-xs text-slate-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Farmacias adheridas en Tucumán</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Presentación ágil de tickets</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsFarmaciasModalOpen(true)}
                className="mt-6 w-full py-2.5 rounded-full bg-white text-[#0a152d] font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer text-center shadow-xs"
              >
                Consultar farmacias
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SERVICIO DE SEPELIO */}
      {activeTab === 'sepelio' && (
        <div className="mt-8 space-y-6">
          <div className="bg-[#0a152d] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <span className="text-xs uppercase tracking-wider font-semibold text-blue-300">
                Sumá Tranquilidad para los Momentos Más Difíciles
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1">
                Servicio de Sepelio Prestacional Integral 24/7
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Con nuestro seguro de sepelio prestacional accedés directamente al <strong>servicio funerario completo</strong> en caso de fallecimiento, cuando restar preocupaciones económicas y de gestión es lo más importante.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <span className="text-xs font-bold text-amber-300">¿Quiénes están cubiertos?</span>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Este seguro te da cobertura <strong>A VOS Y A TODO TU GRUPO FAMILIAR</strong> (cónyuge y hasta dos hijos de 1 a 18 años) y los adherentes (mayores y menores) de tu grupo familiar.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <span className="text-xs font-bold text-amber-300">Cobertura Total</span>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Servicio completo de gastos de fallecimiento <strong>por cualquier causa</strong>, inclusive COVID-19. Carencia según tabla de edades.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <span className="text-xs font-bold text-amber-300">¿Cómo acceder al servicio?</span>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Solicitar el “servicio de sepelio” en administración o guardia. Disponible <strong>las 24 hs los 365 días del año</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* List of inclusions from Image 1 */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
            <h4 className="font-display font-bold text-base sm:text-lg text-[#0a1b33] mb-6">
              El Servicio Incluye en su Totalidad:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Retiro y Traslado', desc: 'Retiro, traslado y acondicionamiento respetuoso del fallecido.' },
                { title: 'Provisión de Ataúd', desc: 'Ataúd reglamentario de primera calidad provisto por la mutual.' },
                { title: 'Traslado Funerario', desc: 'Coche fúnebre y vehículos de acompañamiento hacia el cementerio o crematorio.' },
                { title: 'Inhumación o Cremación', desc: 'Cobertura según la voluntad familiar y disposición municipal.' },
                { title: 'Sala Velatoria', desc: 'Salas velatorias de primer nivel con servicio de cafetería incluido.' },
                { title: 'Certificación Médica', desc: 'Gestión y emisión de la documentación y certificación médica obligatoria.' },
                { title: 'Trámites Administrativos', desc: 'Asesoramiento y gestión integral ante el Registro Civil y cementerios.' },
                { title: 'Atención Permanente 24/7', desc: 'Guardia activa telefónica y presencial sin interrupciones los 365 días.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <div className="w-6 h-6 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold text-xs mb-2">
                    {i + 1}
                  </div>
                  <h5 className="font-semibold text-xs text-[#0a1b33]">{item.title}</h5>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Farmacias Adheridas */}
      {isFarmaciasModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="fixed inset-0"
            onClick={() => setIsFarmaciasModalOpen(false)}
          />
          <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0a1b33]">
                    Farmacias Adheridas
                  </h3>
                  <p className="text-xs text-slate-500">
                    Red con 10% de reintegro oficial para afiliados METUC
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsFarmaciasModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Farmacias List */}
            <div className="mt-5 space-y-3">
              {[
                {
                  name: 'Farmacia del Pueblo',
                  desc: 'Atención farmacéutica y dispensa de medicamentos con receta médica.',
                  tag: '10% Reintegro Activo',
                },
                {
                  name: 'Farmacia Plazoleta',
                  desc: 'Medicamentos recetados y amplia cobertura para el grupo familiar afiliado.',
                  tag: '10% Reintegro Activo',
                },
                {
                  name: 'Farmacia La Unión',
                  desc: 'Atención y validación de recetas para afiliados de METUC.',
                  tag: '10% Reintegro Activo',
                },
              ].map((farmacia, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <h4 className="font-display font-bold text-sm text-[#0a1b33]">
                        {farmacia.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 pl-4.5">
                      {farmacia.desc}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 pl-4.5 pt-0.5">
                      <MapPin className="w-3 h-3 text-blue-500" />
                      <span>San Miguel de Tucumán</span>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                    {farmacia.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Note & Action */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 text-center sm:text-left">
                Presentá tu ticket de compra y receta médica para acceder a tu reintegro.
              </span>
              <a
                href="https://wa.me/5493816282664?text=Hola%20quisiera%20consultar%20sobre%20las%20farmacias%20adheridas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
