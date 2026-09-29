import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, HeartPulse, HeartHandshake, Award, FileText, CheckCircle2 } from 'lucide-react';
import { MetucLogo } from './MetucLogo';

interface FlyerInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const FlyerInfoModal: React.FC<FlyerInfoModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
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
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-full shadow-2xs border border-slate-200/80">
                <MetucLogo size="sm" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-[#0a1b33]">
                  Guía Oficial de Servicios & Planes METUC
                </h3>
                <p className="text-xs text-slate-500">
                  Documento institucional de prestaciones para afiliados y familias
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 3 Columns summary matching the flyer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* 1. Cobertura Social */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                <HeartPulse className="w-4 h-4 text-blue-600" />
                <span>Cobertura Social</span>
              </div>
              <h4 className="font-display font-semibold text-base text-[#0a1b33]">
                Tu Salud, Nuestra Prioridad
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• <strong>Consultas Médicas:</strong> Inmediatas, valor según prestación.</li>
                <li>• <strong>Óptica:</strong> Valor social, sin esperas.</li>
                <li>• <strong>Laboratorio:</strong> Análisis clínicos completos.</li>
                <li>• <strong>Diagnóstico por Imágenes:</strong> Radiografías y ecografías.</li>
                <li>• <strong>Odontología:</strong> Cuidado y prevención bucal.</li>
              </ul>
              <div className="pt-2 text-[11px] text-emerald-700 font-semibold">
                ✓ Carencia Inmediata • Autorización vía web u oficina
              </div>
            </div>

            {/* 2. Servicio de Sepelio */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-slate-800" />
                <span>Servicio de Sepelio</span>
              </div>
              <h4 className="font-display font-semibold text-base text-[#0a1b33]">
                Tranquilidad en Momentos Difíciles
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• <strong>Servicio Completo:</strong> Gastos fúnebres por cualquier causa (inclusive COVID-19).</li>
                <li>• <strong>Cobertura:</strong> Retiro, ataúd, traslados, salas velatorias con cafetería, cremación/inhumación.</li>
                <li>• <strong>Trámites:</strong> Asesoramiento total y certificación médica.</li>
                <li>• <strong>Alcance:</strong> Titular, cónyuge, hasta 2 hijos y adherentes.</li>
              </ul>
              <div className="pt-2 text-[11px] text-slate-700 font-semibold">
                ✓ Atención y guardia 24 hs los 365 días del año
              </div>
            </div>

            {/* 3. Nuestros Planes */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Nuestros Planes</span>
              </div>
              <h4 className="font-display font-semibold text-base text-[#0a1b33]">
                Opciones a tu Medida
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• <strong>Plan Salud:</strong> Servicios de salud familiar.</li>
                <li>• <strong>Plan Sepelio:</strong> Asistencia funeraria 24 hs familiar.</li>
                <li>• <strong>Plan METUC FULL:</strong> Salud + Sepelio + 10% reintegro en farmacias (tope $10.000/mes) + turismo y capacitación.</li>
              </ul>
              <div className="pt-2 text-[11px] text-blue-800 font-semibold">
                ✓ Opciones de adherentes mayores y menores
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Mutual de Empleados Tucumanos • En alianza con AES Norte Argentino
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-[#0a152d] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Pedir Afiliación Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
