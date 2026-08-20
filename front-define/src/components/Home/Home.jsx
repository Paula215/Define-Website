import { useReveal } from '../../hooks/useMotion';
import Hero from './Hero';
import Marquee from './Marquee';
import Us from './Us';
import Services from './Services';
import Process from './Process';
import Quote from './Quote';
import Gallery from './Gallery';
import Contact from './Contact';
import CtaBand from './CtaBand';

export default function Home() {
  useReveal();
  return (
    <main>
      <Hero />
      <Marquee />
      <Us />
      <Services />
      <Process />
      <Quote />
      <Gallery />
      <Contact />
      <CtaBand />
    </main>
  );
}
