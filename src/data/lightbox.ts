import { getMediaByIds, portfolioMedia, type PortfolioMediaItem } from '@/data/portfolioMedia';
import type { FeaturedWorkItem, LightboxItem } from '@/types/content';

export function toLightboxItem(item: PortfolioMediaItem): LightboxItem {
  return {
    id: item.id,
    src: item.src,
    alt: item.title,
    title: item.title,
    caption: item.description,
    type: item.type === 'video' ? 'video' : 'image',
  };
}

export function lightboxItemsFromMedia(items: readonly PortfolioMediaItem[]): LightboxItem[] {
  return items.map(toLightboxItem);
}

export function lightboxItemsFromIds(ids: readonly string[]): LightboxItem[] {
  return lightboxItemsFromMedia(getMediaByIds(ids));
}

function findMediaBySrc(src: string): PortfolioMediaItem | undefined {
  return portfolioMedia.find((item) => item.src === src);
}

function isVideoSrc(src: string): boolean {
  return /\.(mp4|webm|mov)$/i.test(src);
}

export function featuredLightboxItems(item: FeaturedWorkItem): LightboxItem[] {
  const srcs = [item.video, item.coverImage, ...item.screenshots].filter(
    (src): src is string => Boolean(src),
  );

  return srcs.map((src, index) => {
    const catalog = findMediaBySrc(src);
    if (catalog) {
      return toLightboxItem(catalog);
    }

    return {
      id: `${item.id}-${String(index)}`,
      src,
      alt: item.title,
      title: item.title,
      caption: item.shortDescription,
      type: isVideoSrc(src) ? 'video' : 'image',
    };
  });
}

export function featuredPreviewItems(item: FeaturedWorkItem): LightboxItem[] {
  return featuredLightboxItems(item).slice(0, 3);
}
