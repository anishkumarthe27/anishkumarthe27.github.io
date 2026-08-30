# Custom domain (GitHub Pages)

This site is a GitHub Pages **user site**. It is served from the domain root today (`https://anishkumarthe27.github.io`) and will stay at the domain root if a custom domain is added later. Do not change Vite `base` to a repository subpath for a custom domain.

This repository does **not** purchase, register, or point a domain. Do not add `public/CNAME` until a real hostname is ready.

## 1. Point DNS at GitHub Pages

Use the registrar’s DNS settings. Confirm the current records in [GitHub’s custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) before applying them.

Typical setup for `www.example.com` plus the apex `example.com`:

- **www:** `CNAME` → `anishkumarthe27.github.io`
- **apex:** `A` records to GitHub Pages IPv4 addresses, and optionally `AAAA` for IPv6 (values are listed in the GitHub guide)

GitHub Pages can then issue HTTPS for that hostname. Enable **Enforce HTTPS** in the repository Pages settings after DNS succeeds.

## 2. Tell GitHub Pages the hostname

In the repository: **Settings → Pages → Custom domain**. Enter the hostname only (no `https://`).

Because this project deploys with GitHub Actions, also add a `CNAME` file that is copied into the built site:

1. Copy `docs/CNAME.example` to `public/CNAME`.
2. Replace the example hostname with the real one, one line, no `https://`, no trailing slash, no comments.
3. Commit `public/CNAME`. Vite copies `public/` into `dist/`, which is what the Pages workflow publishes.

Do not commit `public/CNAME` with `www.example.com`.

## 3. Set the configurable site URL

Canonical and Open Graph tags use `VITE_SITE_URL` (https origin, no path). When it is unset, the build uses `https://anishkumarthe27.github.io`.

When the custom domain is live:

1. Set the GitHub Actions **variable** (not a secret) `SITE_URL` to the canonical origin, for example `https://www.example.com`. The deploy workflow passes it through as `VITE_SITE_URL`.
2. Optionally set `VITE_SITE_URL` in `.env.production.local` for local production builds (that file is gitignored).

The canonical host in `VITE_SITE_URL` should match the hostname in `public/CNAME` (including `www` or not).

## 4. What not to change

- Keep `base: '/'` in `vite.config.ts`. A custom domain does not introduce a path prefix.
- Do not put static files under `public/portfolio/`. GitHub Pages serves `username.github.io/portfolio/` from the separate `portfolio` repository, so those URLs never hit this site. Use `public/media/` instead.
- Keep root-absolute asset URLs (`/assets/...`, `/favicon.svg`). They resolve on both `*.github.io` and a custom domain.
- Do not add a backend, proxy, or third-party host for the domain.
