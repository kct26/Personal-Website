import Nav from './components/Nav/Nav.jsx';
import Cursor from './components/Cursor/Cursor.jsx';
import Reveal from './components/shared/Reveal.jsx';
import Hero from './components/Hero/Hero.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      {/* mainOffset clears the fixed nav now that there's no marquee
          strip in the flow to provide that spacing */}
      <main id="top" className="mainOffset">
        {/* Hero is visible on load, so it isn't wrapped in Reveal — everything
            below the fold fades/slides in the first time it scrolls into view.
            The hero's own tagline/lede serve as the short bio — no separate
            About or Process section anymore. */}
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
