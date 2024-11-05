import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm";
  const variants = {
    primary: "bg-amber-900 text-white hover:bg-amber-800",
    secondary: "bg-white text-amber-900 border-2 border-amber-900 hover:bg-amber-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}