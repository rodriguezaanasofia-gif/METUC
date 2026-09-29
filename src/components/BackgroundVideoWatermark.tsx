import React, { useEffect, useRef, useState } from 'react';
import metucWatermarkImg from '../assets/images/regenerated_image_1790526471920.png';

interface BackgroundVideoWatermarkProps {
  customVideoUrl?: string | null;
  mode?: 'glow-dark' | 'glow-light';
}

export const BackgroundVideoWatermark: React.FC<BackgroundVideoWatermarkProps> = ({
  customVideoUrl,
  mode = 'glow-light',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Active video source: user-generated Veo video, or pre-rendered illuminating video
  const activeVideo =
    customVideoUrl ||
    (mode === 'glow-dark'
      ? '/metuc-watermark-glow-dark.mp4'
      : '/metuc-watermark-glow-light.mp4');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
      videoRef.current.play().catch(() => {});
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeVideo]);

  const parallaxOffset = (scrollY * 0.05) % 120;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      <style>{`
        @keyframes illuminateDarken {
          0%, 100% {
            opacity: 0.05;
            filter: brightness(0.65) drop-shadow(0 0 0px transparent);
            transform: scale(0.97);
          }
          50% {
            opacity: 0.22;
            filter: brightness(1.5) contrast(1.2) drop-shadow(0 0 45px rgba(59, 130, 246, 0.5));
            transform: scale(1.04);
          }
        }
        @keyframes celestialPulse {
          0%, 100% {
            opacity: 0.25;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.65;
            transform: scale(1.12);
          }
        }
        .animate-illuminate-darken {
          animation: illuminateDarken 8s ease-in-out infinite;
        }
        .animate-celestial-pulse {
          animation: celestialPulse 8s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Underlying Soft Ambient Color Wash */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          mode === 'glow-dark'
            ? 'bg-gradient-to-b from-[#070e1e] via-[#0c162c] to-[#091326]'
            : 'bg-gradient-to-b from-[#f4f7fb] via-[#f9fafb] to-[#edf4fc]'
        } opacity-95`}
      />

      {/* 2. Illuminating Radiant Auras that pulse in sync */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-400/20 blur-[140px] animate-celestial-pulse"
      />
      <div
        className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-emerald-400/15 blur-[130px] animate-celestial-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-[20%] right-[20%] w-[550px] h-[550px] rounded-full bg-amber-400/15 blur-[130px] animate-celestial-pulse"
        style={{ animationDelay: '2s' }}
      />

      {/* 3. The Looping Watermark Video Element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          key={activeVideo}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/metuc-watermark.png"
          className={`w-full h-full object-cover object-center ${
            mode === 'glow-dark'
              ? 'opacity-85 mix-blend-screen'
              : 'opacity-70 mix-blend-multiply'
          } transition-opacity duration-1000`}
        >
          <source src={activeVideo} type="video/mp4" />
        </video>
      </div>

      {/* 4. Layered Watermark with synchronized illumination and darkening cycle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-transform duration-700 ease-out"
        style={{
          transform: `translate(-50%, calc(-50% + ${parallaxOffset}px))`,
        }}
      >
        <div className="relative animate-illuminate-darken">
          <img
            src={metucWatermarkImg}
            alt=""
            className="w-[450px] max-w-[85vw] sm:w-[600px] lg:w-[720px] aspect-square object-contain select-none transition-all duration-700"
            loading="eager"
          />
        </div>
      </div>

      {/* Subtle Corner Watermarks */}
      <div
        className="absolute -top-12 -right-16 hidden lg:block transition-transform duration-1000 ease-out opacity-20"
        style={{
          transform: `translate(0px, ${-parallaxOffset * 0.4}px)`,
        }}
      >
        <img
          src={metucWatermarkImg}
          alt=""
          className="w-[300px] aspect-square object-contain opacity-[0.04] select-none"
        />
      </div>

      <div
        className="absolute -bottom-16 -left-16 hidden lg:block transition-transform duration-1000 ease-out opacity-20"
        style={{
          transform: `translate(0px, ${parallaxOffset * 0.3}px)`,
        }}
      >
        <img
          src={metucWatermarkImg}
          alt=""
          className="w-[320px] aspect-square object-contain opacity-[0.04] select-none"
        />
      </div>

      {/* 5. Vignette / Edge Softener */}
      <div
        className={`absolute inset-0 ${
          mode === 'glow-dark'
            ? 'bg-radial-[circle_at_center,transparent_45%,rgba(7,14,30,0.65)_100%]'
            : 'bg-radial-[circle_at_center,transparent_40%,rgba(244,247,251,0.6)_100%]'
        }`}
      />
    </div>
  );
};
