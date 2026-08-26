import { Section } from '@/components/layout/Section';
import { skills } from '@/data/skills';
import type { SkillLevel } from '@/types/content';
import { cn } from '@/utils/cn';

const skillLevelClassName: Record<SkillLevel, string> = {
  professional: 'text-accent',
  'hands-on': 'text-ink',
  familiar: 'text-muted',
  beginner: 'text-muted',
};

const skillLevelMarkClassName: Record<SkillLevel, string> = {
  professional: 'bg-accent',
  'hands-on': 'bg-ink',
  familiar: 'bg-muted',
  beginner: 'border border-muted bg-transparent',
};

export function SkillsSection() {
  return (
    <Section id={skills.id} title={skills.title} description={skills.intro}>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {skills.levels.map((level) => (
          <li key={level} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn('size-1.5 shrink-0 rounded-full', skillLevelMarkClassName[level])}
            />
            <span className={cn('font-mono text-caption', skillLevelClassName[level])}>
              {skills.levelLabels[level]}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {skills.groups.map((group) => {
          const headingId = `skill-group-${group.name.replace(/\s+/g, '-').toLowerCase()}`;

          return (
            <div key={group.name}>
              <h3 id={headingId} className="font-medium text-heading text-ink">
                {group.name}
              </h3>
              <table
                className="mt-3 w-full border-t border-line text-left"
                aria-labelledby={headingId}
              >
                <thead className="sr-only">
                  <tr>
                    <th scope="col">Skill</th>
                    <th scope="col">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((skill) => (
                    <tr key={skill.name} className="border-b border-line">
                      <th
                        scope="row"
                        className="py-3 pr-3 font-normal break-words text-body text-ink"
                      >
                        {skill.name}
                      </th>
                      <td
                        className={cn(
                          'py-3 pl-2 text-right font-mono text-caption whitespace-nowrap',
                          skillLevelClassName[skill.level],
                        )}
                      >
                        {skills.levelLabels[skill.level]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
