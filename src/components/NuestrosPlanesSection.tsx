import React from 'react';
import {
  ShieldCheck,
  HeartPulse,
  HeartHandshake,
  Award,
  Check,
  Sparkles,
  Users
} from 'lucide-react';

export const NuestrosPlanesSection: React.FC<{ onContactSelectPlan: (planName: string) => void }> = ({
  onContactSelectPlan,
}) => {
  const plans = [
    {
      id: 'salud',
      name: 'Plan Salud',
      tag: 'Cobertura Médica',
      icon: HeartPulse,
      description: 'Ideal para quienes priorizan el cuidado médico preventivo y curativo familiar.',
      coverage: [
        'Consultas médicas con carencia inmediata',
        'Estudios de laboratorio y análisis clínicos',
        'Diagnóstico por imágenes y radiografías',
        'Atención odontológica preventiva',
        'Óptica con armazones a valor social',
        'Titular + cónyuge + hasta 2 hijos (1 a 18 años)',
      ],
      popular: false,
    },
    {
      id: 'full',
      name: 'Plan METUC FULL',
      tag: 'El Más Elegido ⭐',
      icon: Award,
      description: 'Protección absoluta: combina toda la Cobertura Social de Salud con el Servicio de Sepelio 24 Hs.',
      coverage: [
        'TODO lo del Plan Salud (Consultas, laboratorio, óptica, odontología)',
        'TODO lo del Plan Sepelio (Servicio funerario 24 hs completo con salas)',
        '10% de Reintegro en Farmacias (tope $10.000 mensual familiar)',
        'Descuentos exclusivos en Turismo Social',
        'Beneficios en Seguros y Capacitaciones mutuales',
        'Titular + cónyuge + hasta 2 hijos (1 a 18 años)',
      ],
      popular: true,
    },
    {
      id: 'sepelio',
      name: 'Plan Sepelio',
      tag: 'Tranquilidad 24 Hs',
      icon: HeartHandshake,
      description: 'Cobertura funeraria integral para restar preocupaciones en el momento más difícil.',
      coverage: [
        'Servicio funerario prestacional completo',
        'Retiro, traslado y acondicionamiento del fallecido',
        'Provisión de ataúd y coche fúnebre',
        'Salas velatorias de primera con servicio de cafetería',
        'Inhumación o cremación y trámites administrativos',
        'Cobertura por cualquier causa (inclusive COVID-19)',
        'Titular + cónyuge + hasta 2 hijos (1 a 18 años)',
      ],
      popular: false,
    },
  ];

  return (
    <section id="planes" className="w-full max-w-[1400px] mx-auto mt-14 sm:mt-20 px-4 sm:px-6 md:px-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
          Nuestros Planes
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0a1b33] mt-1.5">
          Elegí la cobertura ideal para tu familia
        </h2>
        <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
          Todos los planes cubren al titular, cónyuge y hasta dos hijos de 1 a 18 años, con la posibilidad de sumar adherentes adicionales mayores y menores.
        </p>
      </div>

      {/* Plans Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {plans.map((p) => {
          const Icon = p.icon;
          const isFull = p.popular;

          return (
            <div
              key={p.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                isFull
                  ? 'bg-gradient-to-b from-[#0a152d] to-[#122349] text-white shadow-xl ring-2 ring-blue-500/40 lg:-translate-y-2'
                  : 'bg-white text-slate-800 border border-slate-200/80 shadow-xs hover:border-slate-300'
              }`}
            >
              {isFull && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-[#0a152d] text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Recomendado por METUC</span>
                </div>
              )}

              <div>
                {/* Header card */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      isFull ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      isFull
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>

                <h3 className={`font-display text-xl sm:text-2xl font-bold ${isFull ? 'text-white' : 'text-[#0a1b33]'}`}>
                  {p.name}
                </h3>
                <p className={`text-xs mt-2 leading-relaxed ${isFull ? 'text-slate-300' : 'text-slate-500'}`}>
                  {p.description}
                </p>

                {/* Grupo Familiar Notice */}
                <div
                  className={`mt-4 p-3 rounded-2xl text-xs flex items-center gap-2.5 ${
                    isFull ? 'bg-white/10 text-blue-200' : 'bg-blue-50 text-blue-900 border border-blue-100'
                  }`}
                >
                  <Users className="w-4 h-4 shrink-0 text-blue-400" />
                  <span>
                    <strong>Grupo Familiar:</strong> Cónyuge y hasta dos hijos (1 a 18 años).
                  </span>
                </div>

                {/* Features checklist */}
                <div className="mt-6 space-y-2.5">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider block ${
                    isFull ? 'text-slate-300' : 'text-slate-400'
                  }`}>
                    Cobertura incluida:
                  </span>
                  {p.coverage.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFull ? 'text-emerald-400' : 'text-emerald-600'
                        }`}
                      />
                      <span className={isFull ? 'text-slate-200' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-8 pt-5 border-t border-slate-200/20 space-y-2.5">
                <button
                  onClick={() => onContactSelectPlan(p.name)}
                  className={`w-full py-2.5 sm:py-3 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2 ${
                    isFull
                      ? 'bg-white text-[#0a152d] hover:bg-slate-100'
                      : 'bg-[#0a152d] text-white hover:bg-slate-800'
                  }`}
                >
                  <span>Afiliarme a {p.name}</span>
                  <span>→</span>
                </button>

                <button
                  onClick={() => onContactSelectPlan(p.name)}
                  className={`w-full py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                    isFull
                      ? 'text-blue-200 hover:text-white hover:bg-white/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>Pedir cotización</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Adherentes Notice Box */}
      <div className="mt-8 bg-slate-50/90 rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm sm:text-base text-[#0a1b33]">
              ¿Tenés más familiares que querés sumar como adherentes?
            </h4>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
              En METUC podés incorporar adherentes <strong>mayores</strong> (padres, abuelos, tíos) y <strong>menores</strong> adicionales con una cuota solidaria diferencial por cada uno, manteniendo los mismos derechos y beneficios.
            </p>
          </div>
        </div>

        <button
          onClick={() => onContactSelectPlan('Consulta Adherentes')}
          className="bg-white border border-slate-300 hover:border-slate-400 text-[#0a1b33] px-5 py-2.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer shadow-2xs"
        >
          Consultar por adherentes
        </button>
      </div>
    </section>
  );
};
