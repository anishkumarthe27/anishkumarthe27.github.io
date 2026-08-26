import type { ElementType, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: Extract<ElementType, 'div' | 'article' | 'li' | 'section'>;
  hover?: boolean;
  id?: string;
  'aria-labelledby'?: string;
}

export function Card({
  children,
  className,
  as: Component = 'div',
  hover = false,
  id,
  'aria-labelledby': ariaLabelledBy,
}: CardProps) {
  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('surface', hover && 'surface-interactive', className)}
    >
      {children}
    </Component>
  );
}
