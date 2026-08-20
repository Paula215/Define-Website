import { useState, useRef, useEffect } from 'react';

export const useNavbarState = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const navRef = useRef(null);

  // Para cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Cerrar con Escape
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
    // Reset sub-dropdown when changing dropdown
    if (activeDropdown !== id) {
      setActiveSubDropdown(null);
    }
  };

  const toggleSubDropdown = (id) => {
    setActiveSubDropdown(activeSubDropdown === id ? null : id);
  };

  return {
    menuOpen,
    setMenuOpen,
    activeDropdown,
    setActiveDropdown,
    activeSubDropdown,
    setActiveSubDropdown,
    navRef,
    toggleDropdown,
    toggleSubDropdown
  };
};
