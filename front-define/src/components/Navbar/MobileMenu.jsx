import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import PropTypes from 'prop-types';

const MobileMenu = ({ navLinks, activeDropdown, toggleDropdown, activeSubDropdown, toggleSubDropdown }) => {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navLinks.map((item) => (
        <div key={item.id}>
          <Link
            to={item.link}
            className="w-full flex items-center justify-between text-gray-700 hover:text-morado px-3 py-2 text-base font-medium"
            onClick={() => toggleDropdown(item.id)}
          >
            {item.title}
            {item.submenu && (
              <FaCaretDown
                className={`ml-1 transform transition-transform ${activeDropdown === item.id ? "rotate-180" : ""}`}
              />
            )}
          </Link>
          {item.submenu && activeDropdown === item.id && (
            <div className="pl-4">
              {item.submenu.map((subItem) => (
                <div key={subItem.id}>
                  <Link
                    to={subItem.submenu ? subItem.link : `${subItem.link}?subcategory=${encodeURIComponent(subItem.title)}`}
                    className="w-full flex items-center justify-between text-gray-600 hover:text-morado px-3 py-2 text-base"
                    onClick={(e) => subItem.submenu && toggleSubDropdown(subItem.id, e)}
                  >
                    {subItem.title}
                    {subItem.submenu && (
                      <FaCaretDown
                        className={`ml-1 transform transition-transform ${activeSubDropdown === subItem.id ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>
                  {subItem.submenu && activeSubDropdown === subItem.id && (
                    <div className="pl-4">
                      {subItem.submenu.map((subSubItem) => (
                        <Link
                          key={subSubItem.id}
                          to={`${subSubItem.link}?subcategory=${encodeURIComponent(subSubItem.title)}`}
                          className="block px-3 py-2 text-base text-gray-500 hover:text-morado"
                        >
                          {subSubItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Validación de props
MobileMenu.propTypes = {
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
MobileMenu.defaultProps = {
  activeDropdown: null,
  activeSubDropdown: null
};

export default MobileMenu;