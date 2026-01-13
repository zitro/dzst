'use client';

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

type AnimationType =
  | 'fade-in'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'slide-in-left'
  | 'slide-in-right'
  | 'scale-in';

type FadeInProps<T extends ElementType = 'div'> = {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'children' | 'className'>;

export function FadeIn<T extends ElementType = 'div'>({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  className = '',
  as,
  ...props
}: FadeInProps<T>) {
  const Component = as || 'div';
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  const animationStyle = isVisible
    ? {
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }
    : undefined;

  return (
    <Component
      ref={ref}
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
