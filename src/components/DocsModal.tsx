import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Book, Terminal, Shield, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSystem: () => void;
}

export const DocsModal: React.FC<DocsModalProps> = ({
  isOpen,
  onClose,
  onOpenSystem,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0a152d]/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-6 md:p-8 max-h-[90vh] overflow-y-auto z-10"
        >
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Documentación Oficial
              </span>
              <h2 className="font-display text-2xl font-medium text-[#0a1b33] mt-1">
                Guía Técnica & Manual del Sistema METUC
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Arquitectura, requerimientos y manual operativo del sistema educacional.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-1 space-y-2">
              {[
                { title: '1. Introducción al Sistema', active: true },
                { title: '2. Estructura de inicio.html', active: false },
                { title: '3. Roles y Permisos (RBAC)', active: false },
                { title: '4. Módulos de Calificaciones', active: false },
                { title: '5. Seguridad y Backups', active: false },
                { title: '6. Preguntas Frecuentes', active: false },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                    item.active
                      ? 'bg-slate-100 text-[#0a1b33] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="md:col-span-2 space-y-5 text-xs text-slate-700 leading-relaxed">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <h3 className="font-display font-semibold text-sm text-[#0a1b33]">
                  Estructura del Archivo inicio.html
                </h3>
                <p className="mt-1 text-slate-600">
                  El archivo <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono">inicio.html</code> constituye la puerta de entrada (dashboard inicial) de la suite METUC. Contiene los enlaces directos a los módulos de:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600">
                  <li>Identificación del usuario activo y establecimiento educacional</li>
                  <li>Atajos a la nómina de cursos y registro de inasistencias</li>
                  <li>Resumen estadístico del trimestre actual</li>
                  <li>Panel de notificaciones institucionales para el personal</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <h3 className="font-display font-semibold text-sm text-[#0a1b33]">
                  Requisitos del Sistema & Compatibilidad
                </h3>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Navegadores Chrome, Edge, Safari, Firefox</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Responsive para tablets y móviles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Encriptación SSL/TLS de 256 bits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Exportación en formatos Excel y PDF</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => {
                    onClose();
                    onOpenSystem();
                  }}
                  className="bg-[#0a152d] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Abrir Sistema METUC en Vivo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
