import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Upload,
  FileCode,
  CheckCircle2,
  Users,
  GraduationCap,
  CalendarCheck2,
  BookOpen,
  BarChart3,
  ShieldCheck,
  Search,
  ExternalLink,
  ChevronRight,
  School,
  AlertCircle
} from 'lucide-react';

interface MetucSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MetucSystemModal: React.FC<MetucSystemModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'inicio' | 'modulos' | 'importar' | 'docentes'>('inicio');
  const [importedHtml, setImportedHtml] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle local file upload (e.g. inicio.html from user's Desktop)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setImportedHtml(content);
        setActiveTab('importar');
      };
      reader.readAsText(file);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0a152d]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 flex flex-col max-h-[90vh] overflow-hidden z-10"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0a152d] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                M
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-display font-semibold text-lg text-[#0a1b33]">
                    Sistema METUC
                  </h2>
                  <span className="text-[11px] font-medium bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                    Plataforma Oficial
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-sans">
                  Gestión Educativa, Académica y Administrativa Institucional
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label
                htmlFor="file-upload-input"
                className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#0a1b33] bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-xs hover:border-slate-300 cursor-pointer transition-colors"
                title="Cargar tu archivo inicio.html de METUC"
              >
                <Upload className="w-3.5 h-3.5 text-slate-500" />
                <span>Cargar inicio.html</span>
              </label>
              <input
                id="file-upload-input"
                type="file"
                accept=".html,.htm"
                onChange={handleFileUpload}
                className="hidden"
              />

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 border-b border-slate-100 bg-white">
            <button
              onClick={() => setActiveTab('inicio')}
              className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'inicio'
                  ? 'border-[#0a152d] text-[#0a152d]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Tablero de Inicio
            </button>
            <button
              onClick={() => setActiveTab('modulos')}
              className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'modulos'
                  ? 'border-[#0a152d] text-[#0a152d]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Módulos Académicos
            </button>
            <button
              onClick={() => setActiveTab('docentes')}
              className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer ${
                activeTab === 'docentes'
                  ? 'border-[#0a152d] text-[#0a152d]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Personal & Estudiantes
            </button>
            <button
              onClick={() => setActiveTab('importar')}
              className={`py-3 px-4 text-xs sm:text-sm font-medium border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'importar'
                  ? 'border-[#0a152d] text-[#0a152d]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Visor inicio.html {fileName ? `(${fileName})` : ''}</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/40">
            {/* TAB: INICIO */}
            {activeTab === 'inicio' && (
              <div className="space-y-6">
                {/* Metric Summary Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                      <span>Total Alumnos</span>
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold font-display text-[#0a1b33] mt-2">
                      1,420
                    </div>
                    <div className="text-[11px] text-emerald-600 flex items-center gap-1 mt-1 font-medium">
                      <span>↑ 4.2%</span> vs ciclo anterior
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                      <span>Docentes Activos</span>
                      <GraduationCap className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold font-display text-[#0a1b33] mt-2">
                      78
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      100% certificados en METUC
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                      <span>Asistencia Promedio</span>
                      <CalendarCheck2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="text-2xl font-bold font-display text-[#0a1b33] mt-2">
                      96.8%
                    </div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-1">
                      Registro diario digital
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                      <span>Cursos & Aulas</span>
                      <BookOpen className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="text-2xl font-bold font-display text-[#0a1b33] mt-2">
                      48
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Ciclo lectivo en curso
                    </div>
                  </div>
                </div>

                {/* Banner Sofia / Bienvenida */}
                <div className="bg-gradient-to-r from-[#0a152d] to-[#1e293b] rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
                  <div className="relative z-10 max-w-xl">
                    <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
                      Panel Administrativo METUC
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-medium mt-1">
                      Bienvenido al Sistema de Gestión Académica METUC
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 mt-2 leading-relaxed">
                      Control centralizado de matrículas, calificaciones, asistencia en tiempo real y comunicación directa entre docentes, alumnos y familias.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                      <button
                        onClick={() => setActiveTab('importar')}
                        className="bg-white text-[#0a152d] text-xs font-semibold px-4 py-2 rounded-full hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Abrir o Cargar archivo inicio.html</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('modulos')}
                        className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/20 transition-colors cursor-pointer"
                      >
                        Explorar Módulos
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Access Grid */}
                <div>
                  <h4 className="font-display font-semibold text-sm text-[#0a1b33] mb-3">
                    Accesos Rápidos del Sistema METUC
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-[#0a1b33]">
                          Portal de Calificaciones
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Ingreso de actas parciales y finales por materia.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <CalendarCheck2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-[#0a1b33]">
                          Pase de Lista Digital
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Registro instantáneo con alerta automática a tutores.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-[#0a1b33]">
                          Reportes & Estadísticas
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Informes consolidados de rendimiento pedagógico.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: MODULOS */}
            {activeTab === 'modulos' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-semibold text-sm text-[#0a1b33]">
                    Catálogo de Módulos del Sistema METUC
                  </h4>
                  <span className="text-xs text-slate-500">6 módulos operativos</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Gestión Académica & Curricular',
                      desc: 'Administración de planes de estudio, asignaturas, horarios de clase y mallas formativas.',
                      tag: 'Académico',
                      color: 'bg-blue-500',
                    },
                    {
                      title: 'Matrícula & Expediente de Alumnos',
                      desc: 'Registro digital completo de estudiantes, antecedentes médicos, datos de apoderados y documentación oficial.',
                      tag: 'Admisiones',
                      color: 'bg-emerald-500',
                    },
                    {
                      title: 'Evaluaciones & Libro de Calificaciones',
                      desc: 'Ponderación personalizada de exámenes, trabajos prácticos, promedios automáticos y actas oficiales.',
                      tag: 'Evaluación',
                      color: 'bg-amber-500',
                    },
                    {
                      title: 'Asistencia & Convivencia Escolar',
                      desc: 'Monitoreo diario de asistencia por bloque, control de atrasos, justificaciones y libro de vida.',
                      tag: 'Control',
                      color: 'bg-indigo-500',
                    },
                    {
                      title: 'Campus Virtual & Recursos Digitales',
                      desc: 'Repositorio de material educativo, tareas en línea, guías descargables y clases virtuales sincronizadas.',
                      tag: 'Tecnología',
                      color: 'bg-pink-500',
                    },
                    {
                      title: 'Finanzas, Cuotas & Aranceles',
                      desc: 'Control de pagos de matrícula, mensualidades, becas institucionales y convenios con apoderados.',
                      tag: 'Administración',
                      color: 'bg-teal-500',
                    },
                  ].map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          {m.tag}
                        </span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <h5 className="font-display font-semibold text-base text-[#0a1b33] mt-2">
                        {m.title}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {m.desc}
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-emerald-600 font-medium">
                          Activo en METUC v3.4
                        </span>
                        <button
                          onClick={() => setActiveTab('importar')}
                          className="text-xs font-semibold text-[#0a1b33] hover:text-blue-600 flex items-center gap-1 cursor-pointer"
                        >
                          <span>Ver en inicio.html</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: DOCENTES & ESTUDIANTES */}
            {activeTab === 'docentes' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h4 className="font-display font-semibold text-sm text-[#0a1b33]">
                    Registro Institucional METUC
                  </h4>
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Buscar por nombre, RUT o materia..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="text-xs pl-8 pr-4 py-1.5 rounded-full bg-white border border-slate-200 focus:outline-none focus:border-blue-500 w-64"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50/80 text-slate-500 font-medium border-b border-slate-100">
                      <tr>
                        <th className="py-3 px-4">Nombre Completo</th>
                        <th className="py-3 px-4">Rol / Asignatura</th>
                        <th className="py-3 px-4">Nivel / Curso</th>
                        <th className="py-3 px-4">Estado</th>
                        <th className="py-3 px-4 text-right">Acción</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        {
                          name: 'Prof. Carlos Mendoza R.',
                          role: 'Docente Titular',
                          dept: 'Matemáticas & Física',
                          status: 'En clase (Aula 4B)',
                          statusColor: 'text-blue-600 bg-blue-50',
                        },
                        {
                          name: 'Prof. Sofia Rodríguez V.',
                          role: 'Coordinación Académica',
                          dept: 'Dirección de Estudios',
                          status: 'Disponible',
                          statusColor: 'text-emerald-600 bg-emerald-50',
                        },
                        {
                          name: 'Prof. Mariana Silva P.',
                          role: 'Docente Lenguaje',
                          dept: 'Humanidades',
                          status: 'En reunión',
                          statusColor: 'text-amber-600 bg-amber-50',
                        },
                        {
                          name: 'Prof. Roberto González H.',
                          role: 'Docente Ciencias',
                          dept: 'Biología & Química',
                          status: 'Disponible',
                          statusColor: 'text-emerald-600 bg-emerald-50',
                        },
                        {
                          name: 'Prof. Daniela Morales T.',
                          role: 'Docente Tecnología',
                          dept: 'Informática & Robótica',
                          status: 'En clase (Laboratorio)',
                          statusColor: 'text-blue-600 bg-blue-50',
                        },
                      ]
                        .filter(
                          (item) =>
                            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.dept.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50">
                            <td className="py-3 px-4 font-medium text-[#0a1b33]">
                              {row.name}
                            </td>
                            <td className="py-3 px-4 text-slate-600">{row.role}</td>
                            <td className="py-3 px-4 text-slate-500">{row.dept}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${row.statusColor}`}
                              >
                                {row.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button
                                onClick={() => setActiveTab('importar')}
                                className="text-xs text-blue-600 font-medium hover:underline cursor-pointer"
                              >
                                Ver Ficha
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: IMPORTAR / INICIO.HTML VIEWER */}
            {activeTab === 'importar' && (
              <div className="space-y-4">
                {/* Information banner explaining local path */}
                <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-blue-900 leading-relaxed">
                    <p className="font-semibold text-blue-950">
                      Carga directa de tu archivo inicio.html de METUC
                    </p>
                    <p className="mt-1 text-blue-800">
                      Para visualizar el contenido exacto de tu archivo local{' '}
                      <code className="bg-blue-100/80 px-1.5 py-0.5 rounded text-blue-950 font-mono text-[11px]">
                        file:///C:/Users/Educacion/OneDrive/Desktop/Sofia/METUC/sistema/inicio.html
                      </code>
                      , selecciona o arrastra el archivo a continuación. Los navegadores web protegen la privacidad de tu disco y requieren que selecciones el archivo una vez para cargarlo.
                    </p>
                  </div>
                </div>

                {/* Dropzone & Selector */}
                <div className="bg-white border-2 border-dashed border-slate-200 hover:border-blue-400 transition-colors rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-medium text-sm text-[#0a1b33]">
                    {fileName ? `Archivo cargado: ${fileName}` : 'Selecciona tu archivo inicio.html'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                    Haz clic en el botón para buscar en tu carpeta{' '}
                    <span className="font-semibold">Sofia/METUC/sistema/inicio.html</span> o arrástralo directamente aquí.
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <label
                      htmlFor="modal-file-upload"
                      className="bg-[#0a152d] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 cursor-pointer shadow-xs transition-all inline-flex items-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Examinar en mi PC</span>
                    </label>
                    <input
                      id="modal-file-upload"
                      type="file"
                      accept=".html,.htm"
                      onChange={handleFileUpload}
                      className="hidden"
                    />

                    {importedHtml && (
                      <button
                        onClick={() => {
                          setImportedHtml(null);
                          setFileName(null);
                        }}
                        className="text-xs text-rose-600 hover:underline cursor-pointer font-medium"
                      >
                        Restablecer a plantilla
                      </button>
                    )}
                  </div>
                </div>

                {/* Live Preview Area */}
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                  <div className="px-4 py-2.5 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-medium flex items-center gap-1.5">
                      <FileCode className="w-4 h-4 text-slate-500" />
                      Vista previa del Sistema METUC (inicio.html)
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {fileName || 'Plantilla de inicio predeterminada'}
                    </span>
                  </div>

                  <div className="p-4 max-h-[400px] overflow-y-auto">
                    {importedHtml ? (
                      <div
                        className="prose prose-sm max-w-none text-slate-800"
                        dangerouslySetInnerHTML={{ __html: importedHtml }}
                      />
                    ) : (
                      /* Default authentic METUC inicio.html preview */
                      <div className="space-y-4 font-sans text-xs">
                        <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                          <div>
                            <h2 className="text-base font-bold text-[#0a1b33]">
                              METUC — Sistema Integral de Gestión Escolar
                            </h2>
                            <p className="text-slate-500">
                              Módulo Central de Inicio • Perfil: Sofia (Educación)
                            </p>
                          </div>
                          <span className="bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-md text-[11px] border border-emerald-200">
                            Sesión Activa
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-slate-800 mb-2">
                              Avisos Institucionales
                            </h3>
                            <ul className="space-y-1.5 text-slate-600">
                              <li>• Cierre de actas primer trimestre: Viernes 15:00 hrs.</li>
                              <li>• Reunión de apoderados general: Jueves 18:30 hrs.</li>
                              <li>• Capacitación docente en plataforma METUC v3.4.</li>
                            </ul>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-slate-800 mb-2">
                              Estado del Servidor METUC
                            </h3>
                            <div className="space-y-1 text-slate-600">
                              <p>✓ Base de datos: Sincronizada</p>
                              <p>✓ Copia de seguridad: Realizada hoy a las 06:00 AM</p>
                              <p>✓ Usuarios conectados: 142 simultáneos</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-amber-900">
                          <span className="font-semibold">Nota: </span>
                          Para ver los estilos, botones y tablas de tu archivo exacto en tu computadora, haz clic arriba en <strong>"Examinar en mi PC"</strong> y carga tu archivo <code>inicio.html</code>.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>METUC • Sistema Educativo de Vanguardia</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-white border border-slate-200 font-medium text-[#0a1b33] hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
