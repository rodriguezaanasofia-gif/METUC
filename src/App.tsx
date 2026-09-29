import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeScroller } from './components/MarqueeScroller';
import { QuienesSomosSection } from './components/QuienesSomosSection';
import { QueHacemosSection } from './components/QueHacemosSection';
import { NuestrosServiciosSection } from './components/NuestrosServiciosSection';
import { NuestrosPlanesSection } from './components/NuestrosPlanesSection';
import { ContactoSection } from './components/ContactoSection';
import { FlyerInfoModal } from './components/FlyerInfoModal';
import { MetucLogo } from './components/MetucLogo';
import { MetucAiAssistant } from './components/MetucAiAssistant';
import {
  FileText,
  Building,
  ChevronRight,
  Menu,
  X,
  Phone,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string>('Plan METUC FULL');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanForContact(planName);
    scrollTo('contacto');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col font-sans selection:bg-[#0a152d] selection:text-white">
      {/* Sticky Main Header */}
      <header className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between">
          {/* Brand with METUC Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="p-1 bg-white rounded-full shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center shrink-0 border border-slate-200/80">
              <MetucLogo size="sm" />
            </div>
            <div>
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#0a1b33] block leading-tight">
                METUC
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:block leading-none mt-0.5 font-medium">
                Mutual de Empleados Tucumanos
              </span>
            </div>
          </div>

          {/* Center Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-600">
            <button
              onClick={() => scrollTo('quienes-somos')}
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              Quiénes Somos
            </button>
            <button
              onClick={() => scrollTo('que-hacemos')}
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              Qué Hacemos
            </button>
            <button
              onClick={() => scrollTo('servicios')}
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              Servicios de Salud
            </button>
            <button
              onClick={() => scrollTo('planes')}
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              Planes & Coberturas
            </button>
            <button
              onClick={() => scrollTo('contacto')}
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              Contacto
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-metuc-ai-assistant'))}
              className="inline-flex items-center gap-2 text-blue-950 bg-blue-50 hover:bg-blue-100 border border-blue-200/90 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <div className="p-0.5 bg-white rounded-full shadow-2xs shrink-0 flex items-center justify-center">
                <MetucLogo size="xs" />
              </div>
              <span>Chatea con METUC</span>
            </button>
          </nav>

          {/* Right Desktop Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsFlyerModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0a1b33] bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs px-3.5 py-2 rounded-full transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Folleto Prestacional</span>
            </button>

            <button
              onClick={() => scrollTo('contacto')}
              className="bg-[#0a152d] text-white hover:bg-slate-800 px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Afiliarme</span>
              <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/80 bg-white px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <button
              onClick={() => scrollTo('quienes-somos')}
              className="w-full text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              Quiénes Somos
            </button>
            <button
              onClick={() => scrollTo('que-hacemos')}
              className="w-full text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              Qué Hacemos
            </button>
            <button
              onClick={() => scrollTo('servicios')}
              className="w-full text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              Servicios de Salud
            </button>
            <button
              onClick={() => scrollTo('planes')}
              className="w-full text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              Planes & Coberturas
            </button>
            <button
              onClick={() => scrollTo('contacto')}
              className="w-full text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              Contacto & Afiliaciones
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-metuc-ai-assistant'));
              }}
              className="w-full text-left py-2.5 px-3 text-sm font-bold text-blue-900 bg-blue-50/80 hover:bg-blue-100 rounded-xl cursor-pointer flex items-center gap-2.5 transition-colors"
            >
              <div className="p-0.5 bg-white rounded-full shadow-2xs shrink-0 flex items-center justify-center">
                <MetucLogo size="xs" />
              </div>
              <span>Chatea con METUC</span>
            </button>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsFlyerModalOpen(true);
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-[#0a1b33] bg-slate-50 border border-slate-200 rounded-full cursor-pointer flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Ver Folleto Prestacional</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1 w-full pt-4 sm:pt-6">
        {/* 1. Main Hero Container */}
        <div className="px-4 sm:px-6 md:px-8">
          <HeroSection
            onOpenQuienesSomos={() => scrollTo('quienes-somos')}
            onOpenServicios={() => scrollTo('servicios')}
            onOpenPlanes={() => scrollTo('planes')}
            onOpenContacto={() => scrollTo('contacto')}
          />
        </div>

        {/* 2. Marquee Ticker */}
        <MarqueeScroller
          onSelectBenefit={(title) => {
            if (title.includes('Sepelio')) {
              scrollTo('servicios');
            } else if (title.includes('Plan') || title.includes('Reintegro')) {
              scrollTo('planes');
            } else {
              scrollTo('servicios');
            }
          }}
        />

        {/* 3. Quiénes Somos Section */}
        <QuienesSomosSection
          onContactClick={() => scrollTo('contacto')}
        />

        {/* 4. Qué Hacemos Section (Los 2 Pilares) */}
        <QueHacemosSection
          onOpenServicios={() => scrollTo('servicios')}
          onOpenSepelioModal={() => scrollTo('servicios')}
          onOpenPlanes={() => scrollTo('planes')}
        />

        {/* 5. Nuestros Servicios Section */}
        <NuestrosServiciosSection
          onContactClick={() => scrollTo('contacto')}
        />

        {/* 6. Nuestros Planes Section */}
        <NuestrosPlanesSection
          onContactSelectPlan={handleSelectPlan}
        />

        {/* 7. Contacto & Afiliaciones Section */}
        <ContactoSection
          selectedPlan={selectedPlanForContact}
        />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/80 bg-white py-12 px-4 sm:px-6 md:px-8 mt-auto">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-full shadow-2xs border border-slate-200 shrink-0">
                <MetucLogo size="sm" />
              </div>
              <div>
                <span className="font-display font-bold text-base text-[#0a1b33]">
                  METUC
                </span>
                <p className="text-xs text-slate-500">Mutual de Empleados Tucumanos</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 max-w-md leading-relaxed">
              Asociación mutual dedicada a brindar cobertura social de salud, atención médica con carencia inmediata, valores sociales en óptica y servicio integral de sepelio las 24 horas del día en toda la provincia de Tucumán.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-500">
              <Building className="w-4 h-4 text-blue-600 shrink-0" />
              <span>En alianza con <strong>AES</strong> (Asociación de Economía Social del Norte Argentino).</span>
            </div>
          </div>

          <div>
            <h5 className="font-display font-bold text-xs text-[#0a1b33] uppercase tracking-wider mb-3">
              Servicios & Planes
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-blue-900 cursor-pointer">Consultas Médicas & Especialidades</button></li>
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-blue-900 cursor-pointer">Óptica con Valor Social</button></li>
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-blue-900 cursor-pointer">Laboratorio & Diagnóstico</button></li>
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-blue-900 cursor-pointer">Servicio de Sepelio 24 Hs</button></li>
              <li><button onClick={() => scrollTo('planes')} className="hover:text-blue-900 cursor-pointer">Plan METUC FULL (Con Reintegro)</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-bold text-xs text-[#0a1b33] uppercase tracking-wider mb-3">
              Atención al Afiliado
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>Guardia de Sepelio: 24 hs los 365 días</li>
              <li>Atención Administrativa: Lun a Vie 8:00 a 18:00 hs</li>
              <li>San Miguel de Tucumán, Argentina</li>
              <li><button onClick={() => setIsFlyerModalOpen(true)} className="text-blue-700 font-semibold hover:underline cursor-pointer">Ver folleto de prestaciones</button></li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} METUC • Mutual de Empleados Tucumanos. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollTo('quienes-somos')} className="hover:text-blue-900 cursor-pointer">Quiénes Somos</button>
            <button onClick={() => scrollTo('servicios')} className="hover:text-blue-900 cursor-pointer">Servicios</button>
            <button onClick={() => scrollTo('planes')} className="hover:text-blue-900 cursor-pointer">Planes</button>
            <button onClick={() => scrollTo('contacto')} className="hover:text-blue-900 cursor-pointer">Contacto</button>
          </div>
        </div>
      </footer>

      {/* Official Flyer Modal */}
      <FlyerInfoModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
        onOpenContact={() => {
          setIsFlyerModalOpen(false);
          scrollTo('contacto');
        }}
      />

      {/* METUC AI Virtual Assistant */}
      <MetucAiAssistant />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/5493816282664?text=Hola%20MUTUAL%20DE%20EMPLEADOS%20TUCUMANOS,%20quisiera%20recibir%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 group"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="hidden sm:inline font-bold text-xs pr-1">WhatsApp</span>
      </a>
    </div>
  );
}
