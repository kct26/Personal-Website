import Nav from '@/components/Nav/Nav';
import Reveal from '@/components/shared/Reveal';
import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { hero, socials } from '@/data/content';

// Structured data for search engines — only real, verified links go in
// `sameAs` (GitHub isn't wired up to a real profile yet, so it's left
// out rather than pointing at a placeholder).
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: hero.name,
  jobTitle: hero.role,
  url: 'https://kyle-thoughts.vercel.app',
  email: socials.email.href.replace('mailto:', ''),
  sameAs: [socials.linkedin.href],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      {/* mainOffset clears the fixed nav now that there's no marquee
          strip in the flow to provide that spacing */}
      <main id="top" className="mainOffset">
        {/* Hero is visible on load, so it isn't wrapped in Reveal — everything
            below the fold fades/slides in the first time it scrolls into view.
            The hero's own bio serves as the short intro — no separate About
            or Process section. */}
        <Hero />
        <Reveal><Skills /></Reveal>
        {/* ImageBreak sections are standalone full-bleed photo breaks
            between content sections — NOT nested inside any single
            section's own padded column, which is what lets them span
            almost the full viewport width instead of being boxed in */}
        <Reveal><Projects /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}
