export interface CurrentCompany {
  name: string;
  location: string;
  role: string;
}

export interface Profile {
  name: string;
  title: string;
  experienceLabel: string;
  startDate: string;
  currentCompany: CurrentCompany;
  hasPreviousProfessionalExperience: false;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface Resume {
  label: string;
  ctaLabel: string;
  href: string;
  fileName: string;
  publicPath: string;
  mimeType: 'application/pdf';
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ArchitectureLayer {
  name: string;
  nodes: readonly string[];
}

export interface SchematicArchitecture {
  kicker: string;
  caption?: string;
  layers: readonly ArchitectureLayer[];
}

export interface HeroContent {
  statement: string;
  context: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    download: string;
    mimeType: 'application/pdf';
  };
  socials: readonly SocialLink[];
  architecture: SchematicArchitecture;
}

export interface AnchorNavigationItem {
  kind: 'anchor';
  label: string;
  href: `#${string}`;
}

export interface DownloadNavigationItem {
  kind: 'download';
  label: string;
  href: string | undefined;
  fileName: string;
  mimeType?: string;
}

export type NavigationItem = AnchorNavigationItem | DownloadNavigationItem;

export interface Site {
  title: string;
  description: string;
  navigation: readonly NavigationItem[];
}

export interface Metric {
  label: string;
  value: string;
}

export type SkillLevel = 'professional' | 'hands-on' | 'familiar' | 'beginner';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  name: string;
  items: readonly Skill[];
}

export interface ExperienceRole {
  company: string;
  location: string;
  role: string;
  startDate: string;
  startDateTime: string;
  endDate: 'Present';
  bullets: readonly string[];
}

export interface LifecycleStage {
  step: string;
  name: string;
}

export interface SystemLifecycle {
  title: string;
  intro: string;
  kicker: string;
  stages: readonly LifecycleStage[];
}

export interface StackGroup {
  name: string;
  items: readonly string[];
}

export interface BriefCaseStudy {
  kind: 'brief';
  id: string;
  title: string;
  summary: string;
  kicker?: string;
  problem?: string;
  solution?: string;
  implementationTitle?: string;
  implementation?: readonly string[];
  valueTitle?: string;
  value?: readonly string[];
  performanceMetric?: string;
  stack?: readonly string[];
}

export interface ModuleGroup {
  name: string;
  intro?: string;
  items: readonly string[];
}

export interface MappedPlaceholder {
  source: string;
  token: string;
  kind: 'photo' | 'text';
}

export interface IdCardVisual {
  architectureKicker: string;
  templateKicker: string;
  mappingKicker: string;
  mappingHint: string;
  canvasHint: string;
  layers: readonly ArchitectureLayer[];
  mappedFields: readonly MappedPlaceholder[];
}

export interface PlatformVisual {
  scopeKicker: string;
  scaleKicker: string;
}

export interface FlagshipCaseStudy {
  kind: 'flagship';
  id: string;
  kicker: string;
  title: string;
  summary: string;
  problem: string;
  solution?: string;
  involvementIntro?: string;
  involvement?: readonly string[];
  modulesTitle?: string;
  modules?: readonly string[];
  relationshipsIntro?: string;
  relationships?: readonly string[];
  workflowKicker?: string;
  workflow?: readonly LifecycleStage[];
  workflowNote?: string;
  performanceIntro?: string;
  performance?: readonly string[];
  result?: readonly string[];
  capabilitiesTitle?: string;
  capabilities?: readonly string[];
  objective?: string;
  aiContribution?: readonly string[];
  visual?: 'id-card' | 'platform';
  idCardVisual?: IdCardVisual;
  platformVisual?: PlatformVisual;
  workflowBandSize?: number;
  moduleGroups?: readonly ModuleGroup[];
  securityTitle?: string;
  securityIntro?: string;
  security?: readonly string[];
  scaleIntro?: string;
  includeScaleMetrics?: boolean;
  stackGroups: readonly StackGroup[];
}

export type CaseStudy = BriefCaseStudy | FlagshipCaseStudy;

export interface CompactSupportingCard {
  id: string;
  title: string;
  summary?: string;
  stack?: readonly string[];
  githubUrl?: string;
}

export interface SupportingProjectGroup {
  id: string;
  title: string;
  intro: string;
  cards: readonly CompactSupportingCard[];
}

export interface CaseStudyLabels {
  problem: string;
  solution: string;
  objective: string;
  involvement: string;
  platform: string;
  modules: string;
  relationships: string;
  workflow: string;
  workflowFallbackKicker: string;
  capabilities: string;
  performance: string;
  result: string;
  technology: string;
  aiAssisted: string;
  implementation: string;
  value: string;
  measuredResult: string;
  gallery: string;
}

export interface FeaturedCaseStudiesContent {
  id: string;
  title: string;
  labels: CaseStudyLabels;
  studies: readonly CaseStudy[];
}

export interface SupportingProjectsContent {
  id: string;
  title: string;
  kicker: string;
  githubLinkLabel: string;
  labels: CaseStudyLabels;
  detailed: readonly BriefCaseStudy[];
  groups: readonly SupportingProjectGroup[];
  compact: readonly CompactSupportingCard[];
}

export interface SkillsContent {
  id: string;
  title: string;
  intro: string;
  levels: readonly SkillLevel[];
  levelLabels: Record<SkillLevel, string>;
  groups: readonly SkillGroup[];
}

export interface ExperienceContent {
  id: string;
  title: string;
  roles: readonly ExperienceRole[];
}

export interface MetricsContent {
  id: string;
  title: string;
  clarification: string;
  resultKicker: string;
  result: Metric;
  scaleKicker: string;
  scaleClarification: string;
  items: readonly Metric[];
}

export interface EducationContent {
  id: string;
  title: string;
  graduationLabel: string;
  entries: readonly EducationEntry[];
}

export interface EducationEntry {
  institution: string;
  credential: string;
  graduationYear: string;
  graduationDateTime: string;
}

export interface ContactContent {
  name: string;
  email: string;
  emailActionLabel: string;
  github: SocialLink;
  linkedin: SocialLink;
  resume: Resume;
  resumeActionLabel: string;
}

export interface GithubContent {
  id: string;
  title: string;
  href: string;
  displayUrl: string;
  ctaLabel: string;
}

export interface AiEngineeringContent {
  title: string;
  intro: string;
  ownership: string;
  toolsTitle: string;
  tools: readonly string[];
  usesTitle: string;
  uses: readonly string[];
}

export type FeaturedWorkCategory =
  | 'asset-management'
  | 'procurement'
  | 'purchase-orders'
  | 'budget'
  | 'inventory'
  | 'payment-voucher'
  | 'task-management'
  | 'dashboards-reporting'
  | 'workflow'
  | 'escort'
  | 'other';

/**
 * Featured / Top Work item. Independent of `portfolioMedia`.
 * Reorder with `priority`. Paths point at files under `public/portfolio/media/`.
 */
export interface FeaturedWorkItem {
  id: string;
  title: string;
  category: FeaturedWorkCategory;
  shortDescription: string;
  detailedDescription: string;
  coverImage: string;
  screenshots: readonly string[];
  video?: string;
  technologies: readonly string[];
  capabilities: readonly string[];
  contribution: string;
  highlights: readonly string[];
  featured: boolean;
  priority: number;
  relatedProject?: string;
}

export interface FeaturedWorkLabels {
  highlights: string;
  contribution: string;
  technology: string;
  viewProject: string;
  viewScreenshots: string;
}

export interface WorkShowcaseGroup {
  id: string;
  title: string;
  description: string;
  mediaIds: readonly string[];
}

export interface WorkShowcaseContent {
  id: string;
  title: string;
  intro: string;
  groups: readonly WorkShowcaseGroup[];
}

export interface LightboxItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption?: string;
  type: 'image' | 'video';
}

export interface FeaturedTopWorkContent {
  id: string;
  title: string;
  kicker: string;
  intro: string;
  labels: FeaturedWorkLabels;
  items: readonly FeaturedWorkItem[];
}
