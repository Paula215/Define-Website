import Contact from '../Home/Contact';
import CtaBand from '../Home/CtaBand';
import { useReveal } from '../../hooks/useMotion';

export default function Contacto() {
  useReveal();

  return (
    <main>
      <h1 style={{position:'absolute',width:'1px',height:'1px',padding:0,margin:'-1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',border:0}}>
        Contacto - Define Belleza integral
      </h1>
      <Contact />
      <CtaBand />
    </main>
  )
}
