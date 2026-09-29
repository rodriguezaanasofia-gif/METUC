import React from 'react';
import { ShieldCheck, Users, HeartHandshake, Award, Sparkles, Building2, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { MetucLogo } from './MetucLogo';

export const QuienesSomosSection: React.FC<{ onContactClick: () => void }> = ({
  onContactClick,
}) => {
  return (
    <section id="quienes-somos" className="w-full max-w-[1400px] mx-auto mt-14 sm:mt-20 px-4 sm:px-6 md:px-8">
      <div className="bg-white rounded-3xl md:rounded-[36px] border border-slate-200/80 p-6 sm:p-10 md:p-12 shadow-xs relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Institutional Identity Card */}
          <div className="lg:col-span-5 flex flex-col items-center text-center p-6 sm:p-8 bg-slate-50/80 rounded-2xl md:rounded-3xl border border-slate-200/70">
            <div className="p-4 bg-white rounded-2xl shadow-xs border border-slate-200/60 mb-3 flex items-center justify-center">
              <MetucLogo size="lg" />
            </div>

            <h3 className="font-display font-bold text-base sm:text-lg text-[#0a1b33]">
              Mutual de Empleados Tucumanos
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs">
              Asociación mutual fundada para la protección de la salud y el bienestar de los trabajadores y familias de Tucumán.
            </p>

            <a
              href="https://wa.me/5493816282664?text=Hola%20MUTUAL%20DE%20EMPLEADOS%20TUCUMANOS,%20quisiera%20recibir%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0a152d] hover:text-emerald-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 px-3.5 py-1.5 rounded-full mt-3 transition-all shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Contactar por WhatsApp</span>
            </a>

            <div className="mt-5 pt-4 border-t border-slate-200/80 w-full space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  Alianza estratégica con <strong>AES</strong> (Asoc. Economía Social)
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>San Miguel de Tucumán, Argentina</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                ¿Quiénes Somos?
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0a1b33] mt-1.5">
                Una institución mutual tucumana dedicada a tu tranquilidad
              </h2>
            </div>

            <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
              La <strong>Mutual de Empleados Tucumanos (METUC)</strong> es una entidad solidaria que acompaña a las familias tucumanas en los momentos en que más se necesita apoyo humano y respaldo financiero: la salud preventiva, los tratamientos médicos y la partida de un ser querido.
            </p>

            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              En articulación con <strong>AES (Asociación de Economía Social del Norte Argentino)</strong>, gestionamos acuerdos prestacionales directos con sanatorios, médicos, ópticas, laboratorios y salas de sepelio de primer nivel, garantizando <strong>carencia inmediata</strong> y aranceles sociales sin demoras burocráticas.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a1b33]">
                  Solidaridad Real
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                  Cuotas justas y apoyo cercano sin letra chica en situaciones críticas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a1b33]">
                  Carencia Inmediata
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                  Consultas y prestaciones médicas activas desde el momento de tu afiliación.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-display font-semibold text-xs sm:text-sm text-[#0a1b33]">
                  Grupo Familiar
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                  Titular, cónyuge, hasta 2 hijos y adhesión de familiares mayores o menores.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="bg-[#0a152d] hover:bg-[#122349] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Conocé cómo afiliarte</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
