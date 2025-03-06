import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SubmenuItem from './SubmenuItem';
import PropTypes from 'prop-types';

const DesktopMenu = ({ navLinks, activeDropdown, toggleDropdown, activeSubDropdown, toggleSubDropdown }) => {

  return (
    <div className="hidden lg:flex items-center space-x-8">
      {navLinks.map((item) => (
        <div key={item.id} className="relative group">
          {item.submenu ? (
            <button
              className="flex items-center text-plomo hover:text-morado px-11 text-xl font-medium"
              onClick={() => toggleDropdown(item.id)}
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
  toggleDropdown: PropTypes.func.isRequired,
  activeSubDropdown: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
  toggleSubDropdown: PropTypes.func.isRequired
};

// Valores por defecto
DesktopMenu.defaultProps = {
  activeDropdown: null,
  activeSubDropdown: null
};

export default DesktopMenu;