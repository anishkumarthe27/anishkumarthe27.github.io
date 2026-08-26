import { Card } from '@/components/ui/Card';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { TagList } from '@/components/ui/TagList';
import type { CompactSupportingCard as CompactSupportingCardData } from '@/types/content';

interface CompactSupportingCardProps {
  card: CompactSupportingCardData;
  headingLevel?: 'h3' | 'h4';
  kicker?: string;
  githubLinkLabel: string;
}

export function CompactSupportingCard({
  card,
  headingLevel = 'h4',
  kicker,
  githubLinkLabel,
}: CompactSupportingCardProps) {
  const titleId = `${card.id}-title`;
  const Heading = headingLevel;

  return (
    <Card as="article" id={card.id} className="h-full scroll-mt-24 p-5" aria-labelledby={titleId}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <Heading
        id={titleId}
        className={
          kicker ? 'mt-3 font-medium text-heading text-ink' : 'font-medium text-heading text-ink'
        }
      >
        {card.title}
      </Heading>
      {card.summary ? <p className="mt-2 text-body text-muted">{card.summary}</p> : null}
      {card.stack ? <TagList items={card.stack} className="mt-4" /> : null}
      {card.githubUrl ? (
        <p className={card.summary || card.stack ? 'mt-4' : 'mt-3'}>
          <ExternalLink href={card.githubUrl} className="tap-target interactive-text text-sm">
            {githubLinkLabel}
          </ExternalLink>
        </p>
      ) : null}
    </Card>
  );
}
