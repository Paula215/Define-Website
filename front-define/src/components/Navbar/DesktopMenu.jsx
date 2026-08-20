import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubmenuItem from './SubmenuItem';
import { CaretDown } from './Caret';

const DesktopMenu = ({
  navLinks,
  activeDropdown = null,
  toggleDropdown,
  activeSubDropdown = null,
  setActiveSubDropdown,
  toggleSubDropdown
}) => {
  const { pathname } = useLocation();

  const isCurrent = (link) => (link === '/' ? pathname === '/' : pathname.startsWith(link));

  return (
    <nav className="desk" aria-label="Navegación principal">
      {navLinks.map((item) => {
        const open = activeDropdown === item.id;
        const linkClass = `nav-link${isCurrent(item.link) ? ' current' : ''}`;

        return (
          <div key={item.id} className={`nav-item${open ? ' open' : ''}`}>
            {item.submenu ? (
              item.slug === 'servicios' ? (
                <button
                  type="button"
                  className={linkClass}
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.title}
                  <CaretDown className="nav-caret" />
                </button>
              ) : (
                <Link
                  to={item.link}
                  className={linkClass}
                  aria-expanded={open}
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.title}
                  <CaretDown className="nav-caret" />
                </Link>
              )
            ) : (
              <Link to={item.link} className={linkClass}>
                {item.title}
              </Link>
            )}

            {item.submenu && open && (
              <div className="menu" role="menu">
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
            )}
          </div>
        );
      })}
    </nav>
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
  setActiveSubDropdown: PropTypes.func.isRequired,
  toggleSubDropdown: PropTypes.func.isRequired
};

export default DesktopMenu;
