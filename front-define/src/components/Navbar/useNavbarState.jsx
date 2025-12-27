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

  const toggleDropdown = (id) => {
    // Esta función ahora solo se usará para mobile
    setActiveDropdown(activeDropdown === id ? null : id);
    // Reset sub-dropdown when changing dropdown
    if (activeDropdown !== id) {
      setActiveSubDropdown(null);
    }
  };

  const toggleSubDropdown = (id, e) => {
    if (e) e.preventDefault();
    setActiveSubDropdown(activeSubDropdown === id ? null : id);
  };

  return {
    menuOpen,
    setMenuOpen,
    activeDropdown,
    setActiveDropdown, // Exportamos también el setter para poder usarlo directamente
    activeSubDropdown,
    setActiveSubDropdown, // Exportamos también el setter
    navRef,
    toggleDropdown,
    toggleSubDropdown
  };
};

// DesktopMenu.jsx (actualizado)
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SubmenuItem from './SubmenuItem';
import PropTypes from 'prop-types';

const DesktopMenu = ({ 
  navLinks, 
  activeDropdown, 
  setActiveDropdown, 
  activeSubDropdown, 
  setActiveSubDropdown, 
  toggleSubDropdown 
}) => {
  const handleMouseEnter = (id) => {
    setActiveDropdown(id);
  };
  
  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <div className="hidden lg:flex items-center space-x-8">
      {navLinks.map((item) => (
        <div 
          key={item.id} 
          className="relative group"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          {item.submenu ? (
            <button
              className="flex items-center text-plomo hover:text-morado px-11 text-xl font-medium"
            >
              {item.title}
              <FaCaretDown className="ml-1" />
            </button>
          ) : (
            <Link 
              to={item.link}
              className="flex items-center text-plomo hover:text-morado px-11 text-xl font-medium"
            >
              {item.title}
            </Link>
          )}

          {item.submenu && activeDropdown === item.id && (
            <div className="absolute left-0 mt-3 w-64 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5">
              <div className="py-1" role="menu">
                {item.submenu.map((subItem) => (
                  <SubmenuItem
                    key={subItem.id}
                    item={subItem}
                    activeSubDropdown={activeSubDropdown}
                    setActiveSubDropdown={setActiveSubDropdown}
                    toggleSubDropdown={toggleSubDropdown}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Validación de props
DesktopMenu.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      submenu: PropTypes.array
    })
  ).isRequired,
  activeDropdown: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
  setActiveDropdown: PropTypes.func.isRequired, // Nuevo prop
  activeSubDropdown: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
  setActiveSubDropdown: PropTypes.func.isRequired, // Nuevo prop
  toggleSubDropdown: PropTypes.func.isRequired
};

// Valores por defecto
DesktopMenu.defaultProps = {
  activeDropdown: null,
  activeSubDropdown: null
};
