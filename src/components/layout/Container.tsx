import type { ElementType, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: Extract<ElementType, 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav' | 'main'>;
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-6xl px-gutter sm:px-gutter-sm lg:px-gutter-lg 2xl:max-w-7xl',
        className,
      )}
    >
      {children}
    </Component>
  );
}
