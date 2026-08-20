import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CaretRight } from './Caret';

const SubmenuItem = ({ item, activeSubDropdown = null, setActiveSubDropdown, toggleSubDropdown }) => {
  const open = activeSubDropdown === item.id;

  // Los grupos con submenú llevan a la página del grupo ("ver todo");
  // las hojas filtran por subcategoría.
  const linkTo = item.submenu
    ? item.link
    : `${item.link}?subcategory=${encodeURIComponent(item.title)}`;

  const openSub = () => {
    if (item.submenu) setActiveSubDropdown(item.id);
  };

  return (
    <div
      className={`menu-row${open ? ' open' : ''}`}
      onMouseEnter={openSub}
      onFocus={openSub}
    >
      <Link
        to={linkTo}
        className="menu-link"
        role="menuitem"
        aria-expanded={item.submenu ? open : undefined}
        onClick={() => {
          if (item.submenu) toggleSubDropdown(item.id);
        }}
      >
        {item.title}
        {item.submenu && <CaretRight className="menu-caret" />}
      </Link>

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
};

// Validación de props
SubmenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    submenu: PropTypes.array
  }).isRequired,
  activeSubDropdown: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
  setActiveSubDropdown: PropTypes.func.isRequired,
  toggleSubDropdown: PropTypes.func.isRequired
};

export default SubmenuItem;
