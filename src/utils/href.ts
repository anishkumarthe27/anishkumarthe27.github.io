/** Allow in-page, same-origin, mailto, and HTTPS links only. */
export function isSafeHref(href: string): boolean {
  const value = href.trim();

  if (!value) {
    return false;
  }

  const lower = value.toLowerCase();

  if (
    lower.startsWith('javascript:') ||
    lower.startsWith('data:') ||
    lower.startsWith('vbscript:') ||
    lower.startsWith('file:')
  ) {
    return false;
  }

  if (value.startsWith('#') || value.startsWith('./') || value.startsWith('/')) {
    return true;
  }

  if (lower.startsWith('mailto:')) {
    return lower.includes('@') && !lower.includes('javascript:');
  }

  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

export function isHttpsUrl(href: string): boolean {
  try {
    return new URL(href.trim()).protocol === 'https:';
  } catch {
    return false;
  }
}

/** Host + path for display, without scheme or a trailing slash. */
export function displayHttpsHost(href: string): string {
  try {
    const url = new URL(href.trim());
    return `${url.host}${url.pathname.replace(/\/$/, '')}`;
  } catch {
    return href.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
}
