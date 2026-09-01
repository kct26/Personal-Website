# CE Portfolio — React

A component-based rebuild of the portfolio, using Vite + React. No build
tooling knowledge required beyond the three commands below.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build a deployable static site:

```bash
npm run build
```

This outputs static files to `dist/`, which you can host anywhere
(Vercel, Netlify, GitHub Pages, etc.).

## Where things live

```
src/
  data/content.js       ← ALL text, links, and project data. Edit this
                           file to update the site's content — you
                           should not need to touch a component for
                           a content-only change.
  components/
    Nav/                ← top navigation + mobile menu
    Marquee/             ← scrolling keyword ticker
    Hero/                ← name, tagline, CTA buttons
    Scope/                ← the interactive oscilloscope canvas
    Stats/                ← the 4-number stat strip
    About/                ← bio + datasheet panel
    Process/              ← "how I build" 3-step section
    Skills/                ← skills grouped by category
    Projects/
      ProjectCard.jsx     ← one project card
      Projects.jsx        ← maps content.projects → ProjectCard
      covers/              ← the 4 illustrated cover types
                             (code / circuit / chart / path)
    Experience/           ← work/research timeline
    Education/            ← degree card
    Contact/              ← full-bleed dark closing band
    Footer/                ← minimal bottom strip
    shared/
      SectionHeader.jsx   ← reusable "Title  01" header used by
                             most sections
  index.css               ← the ONLY place raw colors are defined
                             (CSS custom properties / design tokens).
                             Change a value here and it updates
                             everywhere that uses it.
```

Each component folder has a `.jsx` file and a co-located
`.module.css` file (CSS Modules — styles are scoped automatically,
so you can rename or restyle one component without affecting
another).

## Common edits

- **Change any text, link, project, or list** → `src/data/content.js`
- **Change colors** → the `:root` block at the top of `src/index.css`
- **Add a new project cover illustration** → add a component in
  `src/components/Projects/covers/`, then register it in the
  `COVERS` map at the top of `ProjectCard.jsx`
- **Add/remove a nav link or section** → add the link to `nav.links`
  in `content.js`, and render the corresponding section in `App.jsx`
