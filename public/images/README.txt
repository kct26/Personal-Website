Photo banners for the middle of each section — already wired up in
src/data/content.ts (see the sectionImages export) and rendered in
Skills, Experience, Education, and Contact. Add files here with these
exact names and they'll show up automatically, no code changes needed:

    public/images/skills.jpg
    public/images/experience.jpg
    public/images/education.jpg
    public/images/contact.jpg

Any reasonably-sized photo works — the frame crops to a fixed height
(320px on desktop, 220px on mobile) and covers the full width, so a
landscape-oriented image usually looks best.

Want a different filename or a .png/.webp instead? Open
src/data/content.ts, find the sectionImages export near the bottom,
and change the path there — e.g.:

    export const sectionImages = {
      skills: '/images/my-skills-photo.png',
      ...
    };

Want to ADD a photo banner to a section that doesn't have one yet
(Hero and Projects already have their own image treatment and don't
use this)? Three steps:
  1. Add a new key to sectionImages in content.ts, e.g. projects: '/images/projects.jpg'
  2. In that section's .tsx file, import SectionImage from
     '../shared/SectionImage' and sectionImages from '@/data/content'
  3. Drop <SectionImage src={sectionImages.projects} alt="..." />
     right after the <SectionHeader /> line — same pattern already
     used in Skills.tsx, Experience.tsx, Education.tsx, Contact.tsx

You can delete this .txt file once you've added your photos — it's
just a placeholder marker, not read by the app.
