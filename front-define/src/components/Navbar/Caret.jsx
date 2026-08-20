import PropTypes from 'prop-types';

// Chevrons finos, acordes a la tipografía del rediseño.
export const CaretDown = ({ className = '' }) => (
  <svg className={className} width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <path d="M1 1l4 4 4-4" />
  </svg>
);

export const CaretRight = ({ className = '' }) => (
  <svg className={className} width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <path d="M1 1l4 4-4 4" />
  </svg>
);

CaretDown.propTypes = { className: PropTypes.string };
CaretRight.propTypes = { className: PropTypes.string };
