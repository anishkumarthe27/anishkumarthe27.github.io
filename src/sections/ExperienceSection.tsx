import { Section } from '@/components/layout/Section';
import { experience } from '@/data/experience';

export function ExperienceSection() {
  return (
    <Section id={experience.id} title={experience.title}>
      <ol className="grid gap-10">
        {experience.roles.map((role) => (
          <li
            key={`${role.company}-${role.startDate}`}
            className="grid min-w-0 gap-3 md:grid-cols-[minmax(9rem,12.5rem)_minmax(0,1fr)] md:gap-x-8"
          >
            <p className="font-mono text-caption text-muted md:pt-1 md:text-right">
              <time dateTime={role.startDateTime}>{role.startDate}</time>
              {' — '}
              {role.endDate}
            </p>
            <div className="relative border-l border-line pl-5 md:pl-8">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[5px] size-2.5 rounded-full border border-accent bg-canvas"
              />
              <h3 className="font-medium text-heading text-ink">{role.role}</h3>
              <p className="mt-1 text-body text-muted">
                {role.company}, {role.location}
              </p>
              <ul className="mt-5 space-y-2.5 text-pretty text-body text-ink">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4">
                    <span
                      aria-hidden="true"
                      className="absolute top-[0.7em] left-0 size-1 rounded-full bg-accent"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
