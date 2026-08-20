import PropTypes from 'prop-types';

// Card ahora ocupa toda la altura de su celda (h-full) y usa padding
// responsivo en lugar de un p-20 fijo, para que las tarjetas queden uniformes.
export function Card({ children, className }) {
  return (
    <div
      className={`h-full flex flex-col rounded-2xl shadow-xl transition-all duration-300 ease-out hover:bg-lila hover:shadow-2xl px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 ${className}`}
    >
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

// CardContent se estira (flex-1) para que el contenido llene la tarjeta.
export function CardContent({ children, className }) {
  return (
    <div className={`flex-1 flex flex-col items-center text-center ${className}`}>
      {children}
    </div>
  );
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.defaultProps = {
  className: '',
};
