import { AiEngineeringSection } from '@/sections/AiEngineeringSection';
import { CapabilitiesSection } from '@/sections/CapabilitiesSection';
import { CaseStudiesSection } from '@/sections/CaseStudiesSection';
import { ContactSection } from '@/sections/ContactSection';
import { EducationSection } from '@/sections/EducationSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { FeaturedWorkSection } from '@/sections/FeaturedWorkSection';
import { HeroSection } from '@/sections/HeroSection';
import { WorkShowcaseSection } from '@/sections/WorkShowcaseSection';
import { ImpactSection } from '@/sections/ImpactSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { SummarySection } from '@/sections/SummarySection';
import { SupportingProjectsSection } from '@/sections/SupportingProjectsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <FeaturedWorkSection />
      <WorkShowcaseSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <SkillsSection />
      <SummarySection />
      <CapabilitiesSection />
      <SupportingProjectsSection />
      <EducationSection />
      <AiEngineeringSection />
      <ContactSection />
    </>
  );
}
