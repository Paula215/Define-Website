import { FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from './NavData';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useNavbarState } from './useNavbarState';
import logo from "../../assets/images/logo-sinfondo.png";

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

  return (
    <nav className="bg-white shadow-md relative z-50" ref={navRef}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="w-24" />
          </div>

          <DesktopMenu 
            navLinks={NavLinks}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            activeSubDropdown={activeSubDropdown}
            toggleSubDropdown={toggleSubDropdown}
          />

          <button 
            className="lg:hidden text-gray-700 hover:text-morado" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden">
          <MobileMenu 
            navLinks={NavLinks}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            activeSubDropdown={activeSubDropdown}
            toggleSubDropdown={toggleSubDropdown}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;