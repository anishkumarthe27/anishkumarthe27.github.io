import { cn } from '@/utils/cn';

interface TagListProps {
  items: readonly string[];
  className?: string;
}

export function TagList({ items, className }: TagListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-sm border border-line bg-subtle px-2.5 py-1 font-mono text-caption break-words text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
