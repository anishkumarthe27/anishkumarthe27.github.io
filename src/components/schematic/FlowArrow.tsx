import { cn } from '@/utils/cn';

interface FlowArrowProps {
  direction: 'right' | 'down';
  className?: string;
}

export function FlowArrow({ direction, className }: FlowArrowProps) {
  const isRight = direction === 'right';

  return (
    <svg
      aria-hidden="true"
      viewBox={isRight ? '0 0 28 20' : '0 0 20 28'}
      className={cn('schematic-link', className)}
    >
      {isRight ? (
        <>
          <line x1="1" y1="10" x2="18" y2="10" />
          <polyline points="13,5 20,10 13,15" />
        </>
      ) : (
        <>
          <line x1="10" y1="1" x2="10" y2="18" />
          <polyline points="5,13 10,20 15,13" />
        </>
      )}
    </svg>
  );
}
