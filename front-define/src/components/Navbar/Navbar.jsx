import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavLinks } from './NavData';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useNavbarState } from './useNavbarState';
import logo from '../../assets/images/logo-sinfondo.png';

const WHATSAPP = 'https://wa.me/51958336208';

const Navbar = () => {
  const {
    menuOpen,
    setMenuOpen,
    activeDropdown,
    setActiveDropdown,
    activeSubDropdown,
    setActiveSubDropdown,
    navRef,
    toggleDropdown,
    toggleSubDropdown
  } = useNavbarState();

  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const drawer = useRef(null);
  const [drawerHeight, setDrawerHeight] = useState('0px');

  // El header es transparente sobre el hero y se vuelve sólido al bajar.
  // En páginas internas va siempre sólido, porque no hay hero detrás.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Al navegar se cierran el drawer y los desplegables.
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [location.key, setMenuOpen, setActiveDropdown, setActiveSubDropdown]);

  // El alto del drawer se recalcula al abrir/cerrar acordeones para animar el max-height.
  useEffect(() => {
    if (!menuOpen) {
      setDrawerHeight('0px');
      return;
    }
    if (drawer.current) setDrawerHeight(`${drawer.current.scrollHeight}px`);
  }, [menuOpen, activeDropdown, activeSubDropdown]);

  return (
    <header className={scrolled || !isHome ? 'solid' : ''} ref={navRef}>
      <div className="wrap navbar">
        <Link to="/" className="logo" aria-label="Define — inicio">
          <img src={logo} alt="Define" />
        </Link>

        <DesktopMenu
          navLinks={NavLinks}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          activeSubDropdown={activeSubDropdown}
          setActiveSubDropdown={setActiveSubDropdown}
          toggleSubDropdown={toggleSubDropdown}
        />

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-solid nav-cta"
        >
          Reservar
        </a>

        <button
          type="button"
          className="burger"
          aria-expanded={menuOpen}
          aria-controls="drawer"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div id="drawer" ref={drawer} style={{ maxHeight: drawerHeight }} aria-hidden={!menuOpen}>
        <MobileMenu
          navLinks={NavLinks}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          activeSubDropdown={activeSubDropdown}
          toggleSubDropdown={toggleSubDropdown}
          whatsapp={WHATSAPP}
        />
      </div>
    </header>
  );
};

export default Navbar;
