import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { education } from '@/data/education';

export function EducationSection() {
  return (
    <Section id={education.id} title={education.title}>
      {education.entries.length === 0 ? null : (
        <ul className="grid max-w-3xl gap-6">
          {education.entries.map((entry) => (
            <li key={`${entry.institution}-${entry.credential}`}>
              <Card className="p-5 sm:p-6">
                <h3 className="font-medium text-heading break-words text-ink">
                  {entry.credential}
                </h3>
                <p className="mt-1 text-body text-muted break-words">{entry.institution}</p>
                <p className="mt-4 font-mono text-caption text-muted">
                  {education.graduationLabel}{' '}
                  <time className="text-ink" dateTime={entry.graduationDateTime}>
                    {entry.graduationYear}
                  </time>
                </p>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
