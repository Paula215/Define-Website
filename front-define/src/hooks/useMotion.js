import { useEffect } from 'react';

/** Anima los elementos .rv cuando entran al viewport. Llamar una vez por página. */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.remove('armed'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.rv').forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight * 0.92) return; // ya visible
      el.classList.add('armed');
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

/** Parallax del hero: la foto y el badge se mueven a distinta velocidad que el texto. */
export function useParallax(imgRef) {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    if (innerWidth < 900) return;
    const layers = [...document.querySelectorAll('[data-par]')];
    let raf = 0;
    const run = () => {
      raf = 0;
      const y = scrollY;
      if (y > innerHeight * 1.15) return;
      if (imgRef.current) imgRef.current.style.transform = `translate3d(0,${(y * 0.14).toFixed(2)}px,0)`;
      layers.forEach((el) => {
        el.style.transform = `translate3d(0,${(y * parseFloat(el.dataset.par)).toFixed(2)}px,0)`;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(run); };
    addEventListener('scroll', onScroll, { passive: true });
    run();
    return () => { removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [imgRef]);
}

/** Inclinación 3D suave en las cards (solo escritorio con puntero fino). */
export function useTilt(selector = '.card') {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    const MAX = 6;
    const cleanups = [];
    document.querySelectorAll(selector).forEach((c) => {
      let f = 0;
      const move = (e) => {
        const r = c.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        c.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
        c.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
        if (!f) f = requestAnimationFrame(() => {
          f = 0;
          c.classList.add('tilting');
          c.style.transform = `rotateX(${((0.5 - py) * MAX * 2).toFixed(2)}deg) rotateY(${((px - 0.5) * MAX * 2).toFixed(2)}deg) translateZ(6px)`;
        });
      };
      const leave = () => { c.classList.remove('tilting'); c.style.transform = ''; };
      c.addEventListener('pointermove', move);
      c.addEventListener('pointerleave', leave);
      cleanups.push(() => { c.removeEventListener('pointermove', move); c.removeEventListener('pointerleave', leave); });
    });
    return () => cleanups.forEach((fn) => fn());
  }, [selector]);
}
