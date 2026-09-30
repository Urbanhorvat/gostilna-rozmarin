import { useRef, useEffect, useState, ReactNode } from 'react';

type Animacija =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'scale-in'
  | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  animacija?: Animacija;
  zamik?: number;
  prag?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  animacija = 'fade-up',
  zamik = 0,
  prag = 0.12,
  className = '',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [jeVidno, setJeVidno] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setJeVidno(true);
          observer.unobserve(el);
        }
      },
      { threshold: prag, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prag]);

  const animacijeMap: Record<Animacija, string> = {
    'fade-up': 'scroll-reveal-fade-up',
    'fade-down': 'scroll-reveal-fade-down',
    'fade-left': 'scroll-reveal-fade-left',
    'fade-right': 'scroll-reveal-fade-right',
    'fade-in': 'scroll-reveal-fade-in',
    'scale-in': 'scroll-reveal-scale-in',
    none: '',
  };

  const zakasnitevStyle = zamik ? { transitionDelay: `${zamik}ms` } : {};

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${className} ${jeVidno ? `scroll-reveal-vidno ${animacijeMap[animacija]}` : 'scroll-reveal-skrito'}`}
      style={zakasnitevStyle}
    >
      {children}
    </Tag>
  );
}