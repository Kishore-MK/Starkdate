import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onHover: (hovering: boolean) => void;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ children, onHover }) => {
  return (
    <button
    className="px-8 py-3 bg-gradient-to-r from-[#D14E70] via-[#F2994A] to-[#F7B267] 
    rounded-full text-white font-bold text-lg shadow-lg
    transform transition-all duration-300 hover:scale-105 hover:shadow-xl"

      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {children}
    </button>
  );
};