import Nav from '@/components/Nav/Nav';
import Reveal from '@/components/shared/Reveal';
import ImageBreak from '@/components/shared/ImageBreak';
import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { sectionImages } from '@/data/content';

export default function Home() {
  return (
    <>
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
        <Reveal><ImageBreak src={sectionImages.skills} alt="Skills" /></Reveal>`      11`
        <Reveal><Projects /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}
