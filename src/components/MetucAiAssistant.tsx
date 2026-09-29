import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Sparkles,
  User,
  RotateCcw,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { MetucLogo } from './MetucLogo';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

const QUICK_QUESTIONS = [
  '¿Qué cubre el Plan METUC FULL?',
  '¿Cómo funciona la carencia inmediata en salud?',
  '¿Qué incluye el servicio de sepelio las 24 hs?',
  '¿Cómo se solicita el reintegro en farmacias?',
  '¿Puedo sumar familiares como adherentes?'
];

export const MetucAiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '¡Hola! Te damos la bienvenida a METUC. Estoy acá para responder tus consultas sobre nuestra cobertura de salud con carencia inmediata, el servicio de sepelio integral 24 hs, reintegros en farmacias o nuestros planes familiares. Si tenés alguna consulta específica o cotización particular que requiera atención personalizada, te voy a recomendar comunicarte directo por WhatsApp con nuestros asesores. ¿En qué te puedo ayudar hoy?',
      timestamp: new Date(),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener('open-metuc-ai-assistant', handleOpenEvent);
    return () => window.removeEventListener('open-metuc-ai-assistant', handleOpenEvent);
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
      });

      const data = await res.json();
      const replyText =
        data.reply ||
        'Disculpá, no pude procesar tu mensaje en este momento. Por favor comunicate con un asesor de METUC por WhatsApp al +54 9 381 628-2664.';

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: 'Ocurrió un problema de conexión al consultar al asistente. Para recibir información al instante podés escribirnos por WhatsApp al +54 9 381 628-2664 (https://wa.me/5493816282664).',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        text: '¡Conversación reiniciada! ¿En qué puedo orientarte hoy sobre METUC?',
        timestamp: new Date(),
      },
    ]);
  };

  // Helper to render text with clickable WhatsApp links if detected
  const renderMessageContent = (text: string) => {
    const hasWhatsAppRef =
      text.toLowerCase().includes('whatsapp') ||
      text.includes('381') ||
      text.includes('wa.me');

    return (
      <div className="space-y-2">
        <p className="whitespace-pre-wrap leading-relaxed">{text}</p>
        {hasWhatsAppRef && (
          <div className="pt-1.5">
            <a
              href="https://wa.me/5493816282664?text=Hola%20METUC,%20quisiera%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-2xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Contactar por WhatsApp (+54 9 381 628-2664)</span>
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Floating Launcher Button - Positioned right above WhatsApp */}
      <div className="fixed bottom-[82px] right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 bg-[#0a152d] hover:bg-[#122349] text-white pl-2 pr-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-white/20 cursor-pointer"
          aria-label="Chatea con METUC"
        >
          {/* Official METUC Logo Badge */}
          <div className="p-1 bg-white rounded-full shadow-2xs flex items-center justify-center shrink-0">
            <MetucLogo size="xs" />
          </div>
          <div className="text-left pr-0.5">
            <span className="block text-xs font-bold leading-tight flex items-center gap-1.5">
              <span>Chatea con METUC</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="block text-[10px] text-blue-200 leading-none mt-0.5 font-medium">
              Asistente oficial
            </span>
          </div>
        </button>
      </div>

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-w-full h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="bg-[#0a152d] text-white px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-full shadow-xs shrink-0">
                <MetucLogo size="xs" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-sm text-white leading-tight">
                    Chatea con METUC
                  </h3>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    En línea
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-none mt-0.5">
                  Asistente virtual • Mutual de Empleados Tucumanos
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Reiniciar chat"
                aria-label="Reiniciar chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Cerrar chat"
                aria-label="Cerrar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'model' && (
                  <div className="p-0.5 bg-white rounded-full shadow-2xs border border-slate-200/80 flex items-center justify-center shrink-0 self-start mt-0.5">
                    <MetucLogo size="xs" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl shadow-2xs ${
                    msg.role === 'user'
                      ? 'bg-[#0a152d] text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs'
                  }`}
                >
                  {renderMessageContent(msg.text)}
                  <span
                    className={`block text-[9px] mt-1 ${
                      msg.role === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5 items-center">
                <div className="p-0.5 bg-white rounded-full shadow-2xs border border-slate-200/80 flex items-center justify-center shrink-0">
                  <MetucLogo size="xs" />
                </div>
                <div className="bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5 text-slate-500 shadow-2xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-[11px] text-slate-400 ml-1">Consultando información oficial de METUC...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Suggestions */}
          {messages.length <= 3 && !loading && (
            <div className="px-3.5 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
              <span className="text-slate-400 shrink-0 font-medium flex items-center gap-1">
                <HelpCircle className="w-3 h-3" /> Preguntas frecuentes:
              </span>
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="shrink-0 bg-slate-100 hover:bg-blue-50 hover:text-blue-900 text-slate-700 px-2.5 py-1 rounded-full text-[11px] transition-colors cursor-pointer border border-slate-200/60"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200/80 shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribí tu consulta sobre METUC..."
                disabled={loading}
                className="flex-1 text-xs px-3.5 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-800 bg-slate-50/50 disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-full bg-[#0a152d] hover:bg-[#122349] disabled:opacity-40 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-2xs"
                aria-label="Enviar pregunta"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-2 leading-tight">
              Chatea con METUC • Si algo requiere cotización particular, te conectará con WhatsApp oficial.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
