import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Sparkles,
  Film,
  Play,
  Download,
  Check,
  AlertCircle,
  Loader2,
  RefreshCw,
  Sliders,
  Maximize2
} from 'lucide-react';
import metucDefaultImage from '../assets/images/regenerated_image_1790526471920.png';

interface VeoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyAsBackground: (videoUrl: string) => void;
}

export const VeoVideoModal: React.FC<VeoVideoModalProps> = ({
  isOpen,
  onClose,
  onApplyAsBackground,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(metucDefaultImage);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [prompt, setPrompt] = useState<string>(
    'Animación cinematográfica de la imagen iluminándose con resplandor radiante celestial y luego oscureciéndose suavemente en un bucle continuo de iluminación y penumbra, efecto etéreo y elegante'
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setSelectedImage(event.target.result as string);
        setGeneratedVideoUrl(null);
        setError(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    setStatusMessage('Iniciando generación con Veo (veo-3.1-fast-generate-preview)...');

    try {
      // 1. Request generation
      const genRes = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: selectedImage,
          prompt,
          aspectRatio,
        }),
      });

      if (!genRes.ok) {
        const data = await genRes.json().catch(() => ({}));
        throw new Error(data.error || 'Error al iniciar la generación del video');
      }

      const { operationName } = await genRes.json();
      if (!operationName) {
        throw new Error('No se recibió el identificador de la operación de Veo.');
      }

      setStatusMessage('Veo está procesando la iluminación y movimiento del video... (esto puede tomar 1 a 2 minutos)');

      // 2. Poll status
      let isDone = false;
      let attempts = 0;
      const maxAttempts = 60; // 5 mins max

      while (!isDone && attempts < maxAttempts) {
        attempts++;
        await new Promise((r) => setTimeout(r, 6000));

        const statusRes = await fetch('/api/video-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ operationName }),
        });

        if (!statusRes.ok) {
          throw new Error('Error al verificar el estado del video.');
        }

        const statusData = await statusRes.json();
        if (statusData.error) {
          throw new Error(statusData.error.message || 'Error durante la generación de Veo');
        }

        if (statusData.done) {
          isDone = true;
          break;
        }

        if (attempts > 3) {
          setStatusMessage(`Componiendo frames y modulando luces y sombras (${attempts * 6}s)...`);
        }
      }

      if (!isDone) {
        throw new Error('El tiempo de generación excedió el límite. Intenta de nuevo.');
      }

      // 3. Download the finished video
      setStatusMessage('Descargando el video generado por Veo...');
      const downloadRes = await fetch('/api/video-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ operationName }),
      });

      if (!downloadRes.ok) {
        throw new Error('Error al descargar el video terminado.');
      }

      const blob = await downloadRes.blob();
      const videoBlobUrl = URL.createObjectURL(blob);
      setGeneratedVideoUrl(videoBlobUrl);
      setStatusMessage('¡Video generado con éxito con Veo!');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Ocurrió un error inesperado al generar el video.');
    } finally {
      setIsGenerating(false);
    }
  };

  const promptPresets = [
    'Animación cinematográfica de la imagen iluminándose con resplandor radiante celestial y luego oscureciéndose suavemente en un bucle continuo de iluminación y penumbra, efecto etéreo y elegante',
    'Logo flotando en atmósfera azul noche, encendiéndose con luces intensas de neón y atenuándose gradualmente en un loop relajante',
    'Marca de agua etérea con rayos de luz dorada y esmeralda que se iluminan y desvanecen con elegancia institucional',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a152d]/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Film className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-xl font-bold text-[#0a1b33]">
                Generador de Video con Veo (IA)
              </h3>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full uppercase tracking-wider">
                veo-3.1-fast
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Creá videos animados de fondo a partir de cualquier foto o el logo de METUC.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* 1. Image Preview & Upload */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Foto o Imagen Base
            </label>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-20 h-20 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 space-y-2">
                <p className="text-xs text-slate-600">
                  Podés usar el logo oficial de METUC o subir tu propia fotografía.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="py-1.5 px-3 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Subir otra foto</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(metucDefaultImage)}
                    className="py-1.5 px-3 rounded-lg text-xs font-semibold text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    Restaurar Logo METUC
                  </button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* 2. Aspect Ratio Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              2. Relación de Aspecto del Video
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAspectRatio('16:9')}
                className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  aspectRatio === '16:9'
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-bold shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <div>
                  <span className="text-xs block">16:9 (Horizontal / Pantalla Completa)</span>
                  <span className="text-[11px] text-slate-500 font-normal">Ideal para computadoras y tablets</span>
                </div>
                <div className="w-6 h-3.5 border-2 border-current rounded-xs" />
              </button>

              <button
                type="button"
                onClick={() => setAspectRatio('9:16')}
                className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  aspectRatio === '9:16'
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-bold shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <div>
                  <span className="text-xs block">9:16 (Vertical / Móvil)</span>
                  <span className="text-[11px] text-slate-500 font-normal">Ideal para historias y celulares</span>
                </div>
                <div className="w-3.5 h-6 border-2 border-current rounded-xs" />
              </button>
            </div>
          </div>

          {/* 3. Prompt for Veo */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              3. Instrucción de Animación (Prompt)
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={2}
              className="w-full text-xs p-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
              placeholder="Describe cómo querés que se anime e ilumine la imagen..."
            />

            {/* Presets */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="text-[10px] text-slate-400 self-center">Ideas rápidas:</span>
              {promptPresets.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPrompt(p)}
                  className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 py-1 px-2.5 rounded-full transition-colors cursor-pointer"
                >
                  {idx === 0 ? '✨ Iluminar y Oscurecer' : idx === 1 ? '🌙 Glow Nocturno' : '🏛️ Marca de Agua Suave'}
                </button>
              ))}
            </div>
          </div>

          {/* Status / Errors */}
          {error && (
            <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <span>{error}</span>
            </div>
          )}

          {isGenerating && (
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3">
              <Loader2 className="w-5 h-5 text-blue-600 animate-spin shrink-0" />
              <div className="text-xs text-blue-900">
                <span className="font-bold block">Generando video con Veo</span>
                <span>{statusMessage}</span>
              </div>
            </div>
          )}

          {/* 4. Generated Video Result */}
          {generatedVideoUrl && (
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  ¡Video generado exitosamente por Veo!
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-black max-h-[260px] flex items-center justify-center">
                <video
                  src={generatedVideoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full max-h-[260px] object-contain"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    onApplyAsBackground(generatedVideoUrl);
                    onClose();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Aplicar como Fondo de la Web</span>
                </button>

                <a
                  href={generatedVideoUrl}
                  download="veo-video-metuc.mp4"
                  className="py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar</span>
                </a>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cerrar
            </button>

            <button
              type="button"
              disabled={isGenerating}
              onClick={handleGenerate}
              className="py-2.5 px-6 rounded-xl bg-[#0a152d] hover:bg-[#152a58] disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generando con Veo...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span>Generar Video con Veo</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
