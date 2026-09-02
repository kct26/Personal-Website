# Kyle Dang — Portfolio (Next.js + TypeScript)

This is the Next.js + TypeScript rebuild of the portfolio, migrated from
the original Vite + React version. Same design, same content, same
behavior — different framework underneath.

## What changed from the Vite version

- **Next.js (App Router)** instead of Vite as the build tool/dev server
- **TypeScript** (`.tsx`/`.ts`) instead of plain JavaScript (`.jsx`/`.js`) —
  every content shape (Project, ExperienceItem, EducationEntry, etc.) is
  now a typed interface in `src/data/content.ts`, so a typo in a field
  name gets caught before you even run the app, not after
- **`next/font/google`** instead of a `<link>` tag in `<head>` for
  loading Fraunces/IBM Plex Sans/IBM Plex Mono — fonts are downloaded
  and self-hosted at build time, which avoids the render-blocking
  external request and layout shift the old `<link>`-based approach had
- **The Metadata API** (`export const metadata` in `layout.tsx`) instead
  of manually writing `<title>`/`<meta>`/`<link rel="icon">` tags
  in `index.html`
- **Server components by default** — most components (Hero, Skills,
  Experience, Education, Contact, Footer, the project covers) render on
  the server with zero JavaScript shipped for them. Only the pieces that
  actually need interactivity (`Nav`, `Cursor`, `ThemeToggle`, `Reveal`,
  `Projects`) are marked `'use client'` and ship JS to the browser
- Everything else — the design, the copy, the layout logic, the
  light/dark toggle defaulting to light, the bullet-list `\n` support,
  the shared `--bullets-max-width` variable — is unchanged

## Run it

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:3000).

## Where things live

Same shape as the Vite version:

```
src/
  data/content.ts       ← ALL text, links, and project data, typed
  app/
    layout.tsx           ← fonts, page title/favicon, wraps every page
    page.tsx              ← assembles all sections (was App.jsx before)
    globals.css            ← design tokens, same as the old index.css
  components/
    Nav/, Cursor/, ThemeToggle/   ← client components (interactive)
    Hero/, Skills/, Experience/,
    Education/, Contact/, Footer/ ← server components (static)
    Projects/                      ← client (view-more toggle) +
                                      ProjectCard + covers/ (server)
    shared/
      icons.tsx           ← all SVG icon components
      SectionHeader.tsx   ← reusable "title" header, with optional
                            action slot (used by Projects' view-more button)
      Reveal.tsx           ← scroll-in-view fade/slide wrapper
```

## Add your photo and logos

Same as before:
- `public/profile.jpg` — see `public/PUT_YOUR_PHOTO_HERE.txt`
- `public/logos/drexel.jpg`, `public/logos/lhp.jpg` — see
  `public/logos/PUT_LOGOS_HERE.txt`

## Deploying

You have two realistic options:

### Option A — Vercel (recommended, zero config)

Next.js is made by Vercel, so this is the path of least resistance:
1. Push this project to GitHub (see below)
2. Go to vercel.com, sign in with GitHub, click "Import" on this repo
3. It auto-detects Next.js and deploys — no config needed

Every future `git push` automatically redeploys.

### Option B — GitHub Pages (matches how you deployed the Vite version)

GitHub Pages only serves static files, so you need Next.js's static
export mode:

1. In `next.config.mjs`, uncomment the `output: 'export'` line
2. Run `npm run build` — this creates a static site in an `out/` folder
   (instead of needing a Node server running)
3. Push the contents of `out/` to your repo's `gh-pages` branch (or
   configure GitHub Pages to serve from `out/` on your main branch,
   depending on your existing setup)
4. If your repo name isn't `<username>.github.io` (yours is
   `Personal-Website`), you'll also need to set a `basePath` in
   `next.config.mjs` matching your repo name, or links/assets will
   point to the wrong path

Vercel is meaningfully less fiddly for a Next.js project specifically —
worth trying that first unless you have a reason to stay on GitHub Pages.

## Replacing your existing repo

Your current GitHub repo (`kct26/Personal-Website`) has the Vite
version in it. To swap this in:

```bash
# from inside this new project folder
git init
git add .
git commit -m "Migrate to Next.js + TypeScript"
git remote add origin https://github.com/kct26/Personal-Website
git push -f origin main   # -f overwrites remote history — see warning below
```

**Warning**: `git push -f` force-overwrites whatever's currently on
GitHub with this new project. That's fine if you're intentionally
replacing the old Vite version entirely — just know there's no going
back to the old repo history afterward unless you'd already backed it
up. If you'd rather keep both versions' history, push this to a new
repo instead and just update which one you deploy from.
