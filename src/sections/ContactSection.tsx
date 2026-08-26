import type { ReactNode } from 'react';
import { Section } from '@/components/layout/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card } from '@/components/ui/Card';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { contact } from '@/data/contact';
import { profile } from '@/data/profile';
import { displayHttpsHost, isSafeHref } from '@/utils/href';

export function ContactSection() {
  const mailto = `mailto:${contact.email}`;

  return (
    <Section id="contact" title="Contact">
      <Card className="max-w-xl p-5 sm:p-6">
        <h3 className="font-medium text-heading text-ink">{contact.name}</h3>
        <p className="mt-1 text-body text-muted">{profile.title}</p>

        <dl className="mt-6 border-t border-line">
          <ContactRow label="Email">
            {isSafeHref(mailto) ? (
              <a className="tap-target interactive-text break-all" href={mailto}>
                {contact.email}
              </a>
            ) : (
              <span className="break-all">{contact.email}</span>
            )}
          </ContactRow>
          <ContactRow id="github" label={contact.github.label}>
            <ExternalLink
              href={contact.github.href}
              className="tap-target interactive-text break-all"
            >
              {displayHttpsHost(contact.github.href)}
            </ExternalLink>
          </ContactRow>
          <ContactRow label={contact.linkedin.label}>
            <ExternalLink
              href={contact.linkedin.href}
              className="tap-target interactive-text break-all"
            >
              {displayHttpsHost(contact.linkedin.href)}
            </ExternalLink>
          </ContactRow>
        </dl>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={mailto}>{contact.emailActionLabel}</ButtonLink>
          <ButtonLink href={contact.github.href} variant="secondary">
            {contact.github.label}
          </ButtonLink>
          {contact.resume.href ? (
            <ButtonLink
              href={contact.resume.href}
              variant="secondary"
              download={contact.resume.fileName}
              type={contact.resume.mimeType}
            >
              {contact.resumeActionLabel}
            </ButtonLink>
          ) : null}
        </div>
      </Card>
    </Section>
  );
}

function ContactRow({
  id,
  label,
  children,
}: {
  id?: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className={`grid gap-1 border-b border-line py-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-4${id ? ' scroll-mt-24' : ''}`}
    >
      <dt className="kicker">{label}</dt>
      <dd className="min-w-0 text-body text-ink">{children}</dd>
    </div>
  );
}
