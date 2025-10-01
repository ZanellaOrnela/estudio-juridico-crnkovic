"use client";
import { useEffect, useState } from 'react';

interface PageLoadAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animationType?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'fadeIn';
}

export default function PageLoadAnimation({ 
  children, 
  className = "", 
  delay = 0,
  animationType = 'fadeInUp'
}: PageLoadAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Asegurar que estamos en el cliente
    setMounted(true);
    
    // Trigger animation after mount + delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // No renderizar nada hasta que esté montado en el cliente
  if (!mounted) {
    return <div className={`opacity-0 ${className}`}>{children}</div>;
  }

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeInUp':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fadeInDown':
          return `${baseClasses} opacity-0 -translate-y-8`;
        case 'fadeInLeft':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'fadeInRight':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-95`;
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div className={`${getAnimationClasses()} ${className} relative`}>
      {children}
    </div>
  );
}
