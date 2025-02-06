import PropTypes from 'prop-types';

export function Card({ children, className }) {
  return (
    <div className={`shadow-xl hover:bg-lila p-20 ${className}`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export function CardContent({ children }) {
  return <div className="p-4 place-items-center">{children}</div>;
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};