import Nav from '@/components/Nav/Nav';
import Cursor from '@/components/Cursor/Cursor';
import Reveal from '@/components/shared/Reveal';
import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Cursor />
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
        <Reveal><Projects /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}
