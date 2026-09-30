import { useEffect, useState, ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [jeNalozeno, setJeNalozeno] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setJeNalozeno(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`page-transition-wrapper ${jeNalozeno ? 'page-transition-vidno' : 'page-transition-skrito'}`}
    >
      {children}
    </div>
  );
}