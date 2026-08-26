import { Container } from '@/components/layout/Container';
import { HeroArchitecture } from '@/components/hero/HeroArchitecture';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { contact } from '@/data/contact';
import { hero } from '@/data/hero';
import { profile } from '@/data/profile';

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="scroll-mt-24 py-section-xs sm:py-section-sm lg:py-section 2xl:py-section-lg"
    >
      <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <p className="kicker">
            {profile.experienceLabel} · {profile.currentCompany.location}
          </p>
          <h1
            id="home-heading"
            tabIndex={-1}
            data-skip-target
            className="mt-3 max-w-3xl font-medium text-display text-ink sm:mt-4"
          >
            {profile.name}
          </h1>
          <p className="mt-3 max-w-3xl text-body text-ink sm:mt-4 sm:text-lg">
            {profile.title} · {profile.currentCompany.name}
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-body text-muted sm:mt-5">
            {hero.statement}
          </p>
          <p className="mt-3 max-w-2xl text-pretty text-body text-muted sm:mt-4">{hero.context}</p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            {hero.secondaryCta.href ? (
              <ButtonLink
                href={hero.secondaryCta.href}
                variant="secondary"
                download={hero.secondaryCta.download}
                type={hero.secondaryCta.mimeType}
              >
                {hero.secondaryCta.label}
              </ButtonLink>
            ) : (
              <ButtonLink href={`mailto:${contact.email}`} variant="secondary">
                {contact.emailActionLabel}
              </ButtonLink>
            )}
          </div>
          <div className="mt-6">
            <SocialLinks links={hero.socials} />
          </div>
        </div>
        <HeroArchitecture />
      </Container>
    </section>
  );
}
