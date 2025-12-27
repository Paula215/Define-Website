import { Link } from 'react-router-dom';
import { FaCaretRight } from "react-icons/fa";
import PropTypes from 'prop-types';

const SubmenuItem = ({ item, activeSubDropdown, toggleSubDropdown }) => {
  const linkTo = item.submenu
    ? item.link
    : `${item.link}?subcategory=${encodeURIComponent(item.title)}`;

  return (
    <div className="relative group">
      <Link
        to={linkTo}
        className="px-4 py-2 text-lg text-gray-700 hover:bg-lila hover:text-morado flex justify-between items-center"
        role="menuitem"
        onClick={(e) => item.submenu && toggleSubDropdown(item.id, e)}
      >
        {item.title}
        {item.submenu && <FaCaretRight className="ml-2" />}
      </Link>
      {item.submenu && activeSubDropdown === item.id && (
        <div
          className="absolute left-full top-0 w-64 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu">
            {item.submenu.map((subItem) => (
              <SubmenuItem
                key={subItem.id}
                item={subItem}
                isSubSubmenu={true}
                activeSubDropdown={activeSubDropdown}
                toggleSubDropdown={toggleSubDropdown}
              />
            ))}
          </div>
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
  isSubSubmenu: PropTypes.bool,
  activeSubDropdown: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
  toggleSubDropdown: PropTypes.func.isRequired
};

// Valores por defecto
SubmenuItem.defaultProps = {
  isSubSubmenu: false,
  activeSubDropdown: null
};

export default SubmenuItem;