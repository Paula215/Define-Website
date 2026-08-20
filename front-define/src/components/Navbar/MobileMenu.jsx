import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CaretDown } from './Caret';

const MobileMenu = ({
  navLinks,
  activeDropdown = null,
  toggleDropdown,
  activeSubDropdown = null,
  toggleSubDropdown,
  whatsapp
}) => {
  return (
    <div className="in-d">
      {navLinks.map((item) => (
        <div key={item.id}>
          {item.submenu && item.slug === 'servicios' ? (
            <button
              type="button"
              className="d-link"
              aria-expanded={activeDropdown === item.id}
              onClick={() => toggleDropdown(item.id)}
            >
              {item.title}
              <CaretDown className={`d-caret${activeDropdown === item.id ? ' open' : ''}`} />
            </button>
          ) : (
            <Link
              to={item.link}
              className="d-link"
              onClick={() => toggleDropdown(item.id)}
            >
              {item.title}
              {item.submenu && (
                <CaretDown className={`d-caret${activeDropdown === item.id ? ' open' : ''}`} />
              )}
            </Link>
          )}

          {item.submenu && activeDropdown === item.id && (
            <div className="d-sub">
              {item.submenu.map((subItem) => (
                <div key={subItem.id}>
                  <Link
                    to={subItem.submenu ? subItem.link : `${subItem.link}?subcategory=${encodeURIComponent(subItem.title)}`}
                    className="d-link"
                    onClick={(e) => {
                      if (subItem.submenu) {
                        e.preventDefault();
                        toggleSubDropdown(subItem.id);
                      }
                    }}
                  >
                    {subItem.title}
                    {subItem.submenu && (
                      <CaretDown className={`d-caret${activeSubDropdown === subItem.id ? ' open' : ''}`} />
                    )}
                  </Link>

                  {subItem.submenu && activeSubDropdown === subItem.id && (
                    <div className="d-sub">
                      {subItem.submenu.map((subSubItem) => (
                        <Link
                          key={subSubItem.id}
                          to={`${subSubItem.link}?subcategory=${encodeURIComponent(subSubItem.title)}`}
                          className="d-link"
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

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-solid drawer-cta"
      >
        Reservar cita
      </a>
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
  toggleSubDropdown: PropTypes.func.isRequired,
  whatsapp: PropTypes.string.isRequired
};

export default MobileMenu;
