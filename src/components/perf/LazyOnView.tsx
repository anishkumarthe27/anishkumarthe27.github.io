import { type ReactNode, useEffect, useRef, useState } from 'react';

interface LazyOnViewProps {
  children: ReactNode;
}

export function LazyOnView({ children }: LazyOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const node = ref.current;

    if (!node || show) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [show]);

  return (
    <div ref={ref}>
      {show ? (
        children
      ) : (
        <div className="min-h-48 rounded-md border border-line bg-subtle" aria-hidden="true" />
      )}
    </div>
  );
}
