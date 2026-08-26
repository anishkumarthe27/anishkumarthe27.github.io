import type { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';
import { cn } from '@/utils/cn';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Section({ id, title, description, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  const descriptionId = `${id}-description`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      aria-describedby={description ? descriptionId : undefined}
      className={cn(
        'scroll-mt-24 border-t border-line py-section-xs sm:py-section-sm lg:py-section 2xl:py-section-lg',
        className,
      )}
    >
      <Container>
        <h2
          id={headingId}
          tabIndex={-1}
          data-skip-target
          className="max-w-3xl text-pretty font-medium text-title text-ink"
        >
          {title}
        </h2>
        {description ? (
          <p id={descriptionId} className="mt-4 max-w-3xl text-pretty text-body text-muted">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
