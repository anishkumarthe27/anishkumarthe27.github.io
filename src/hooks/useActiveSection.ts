import { createContext, useContext, useEffect, useState } from 'react';
import { navigation } from '@/data/site';
import type { AnchorNavigationItem } from '@/types/content';

const sectionHrefs = navigation
  .filter((item): item is AnchorNavigationItem => item.kind === 'anchor')
  .map((item) => item.href);

export const ActiveSectionContext = createContext('#home');

export function useActiveHref(): string {
  return useContext(ActiveSectionContext);
}

export function useActiveSectionValue(): string {
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const sections = sectionHrefs
      .map((href) => {
        const element = document.getElementById(href.slice(1));
        return element ? { href, element } : undefined;
      })
      .filter((entry): entry is { href: `#${string}`; element: HTMLElement } => Boolean(entry));

    if (sections.length === 0) {
      return;
    }

    const setFromHash = () => {
      const hash = window.location.hash;
      if (sectionHrefs.includes(hash as (typeof sectionHrefs)[number])) {
        setActiveHref(hash);
      }
    };

    setFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];

        if (!top?.target.id) {
          return;
        }

        setActiveHref(`#${top.target.id}`);
      },
      {
        rootMargin: '-24% 0px -58% 0px',
        threshold: 0,
      },
    );

    for (const section of sections) {
      observer.observe(section.element);
    }

    window.addEventListener('hashchange', setFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', setFromHash);
    };
  }, []);

  return activeHref;
}
