import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { hero, socials } from '@/data/content';

// Structured data for search engines - only real, verified links go in
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
      <main id="top">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
