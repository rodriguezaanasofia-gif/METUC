import React from 'react';
import metucLogoImg from '../assets/images/regenerated_image_1790526471920.png';

interface MetucLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const MetucLogo: React.FC<MetucLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  // Strict square dimensions so the logo is NEVER distorted or squashed
  const dimensions = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
    xl: 'w-56 h-56 sm:w-64 sm:h-64',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <img
        src={metucLogoImg}
        alt="METUC - Mutual de Empleados Tucumanos"
        className={`${dimensions[size]} aspect-square object-contain select-none shrink-0`}
        loading="eager"
      />
      {showSubtitle && (
        <span className="text-[12px] font-bold text-slate-800 tracking-tight text-center mt-2 font-sans">
          Mutual de Empleados Tucumanos
        </span>
      )}
    </div>
  );
};
