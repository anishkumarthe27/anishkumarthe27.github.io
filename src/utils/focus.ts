export function focusInPageTarget(href: string) {
  if (!href.startsWith('#')) {
    return;
  }

  const id = href.slice(1);

  window.setTimeout(() => {
    const heading = document.getElementById(`${id}-heading`);
    const section = document.getElementById(id);
    const target = heading ?? section;

    if (target instanceof HTMLElement) {
      target.focus();
    }
  }, 0);
}
