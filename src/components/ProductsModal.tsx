import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Laptop, ShieldCheck, Users, Database, Sparkles, ArrowRight } from 'lucide-react';

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSystem: () => void;
}

export const ProductsModal: React.FC<ProductsModalProps> = ({
  isOpen,
  onClose,
  onOpenSystem,
}) => {
  if (!isOpen) return null;

  const products = [
    {
      title: 'METUC Core',
      badge: 'Sistema Central',
      description:
        'Motor integral de gestión escolar y académica: matrículas, expedientes de estudiantes, registro curricular y control de asistencia en tiempo real.',
      features: [
        'Gestión curricular por niveles',
        'Libro digital de clases y actas oficiales',
        'Asistencia por bloque y notificación instantánea',
      ],
      icon: Database,
    },
    {
      title: 'METUC Aula Virtual',
      badge: 'LMS Híbrido',
      description:
        'Espacio colaborativo de aprendizaje para docentes y alumnos con material interactivo, tareas, evaluaciones y clases sincrónicas.',
      features: [
        'Entrega y corrección de tareas con rúbricas',
        'Foros pedagógicos y biblioteca multimedia',
        'Integración con videoconferencias seguras',
      ],
      icon: Laptop,
    },
    {
      title: 'METUC Familias & Connect',
      badge: 'Portal Apoderados',
      description:
        'Aplicación web y móvil para que padres y tutores sigan el avance académico, calificaciones, citaciones y comunicaciones oficiales.',
      features: [
        'Seguimiento de calificaciones en vivo',
        'Justificación digital de inasistencias',
        'Canal directo con profesores jefes',
      ],
      icon: Users,
    },
    {
      title: 'METUC Analytics & AI',
      badge: 'Inteligencia Institucional',
      description:
        'Panel predictivo y analítico para directivos: detección temprana de deserción escolar, curvas de rendimiento y reportes ministeriales.',
      features: [
        'Modelos de alerta temprana de ausentismo',
        'Informes ejecutivos automatizados en PDF y Excel',
        'Cumplimiento de estándares de acreditación',
      ],
      icon: Sparkles,
    },
  ];

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
                Ecosistema Tecnológico
              </span>
              <h2 className="font-display text-2xl font-medium text-[#0a1b33] mt-1">
                Productos & Soluciones METUC
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Herramientas diseñadas para modernizar colegios, institutos y universidades.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {products.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 p-5 hover:border-slate-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0a1b33] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-lg text-[#0a1b33]">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {p.features.map((feat, fidx) => (
                        <div
                          key={fidx}
                          className="flex items-center gap-2 text-xs text-slate-700"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => {
                        onClose();
                        onOpenSystem();
                      }}
                      className="text-xs font-semibold text-[#0a1b33] hover:text-blue-600 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Abrir módulo en Sistema</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
