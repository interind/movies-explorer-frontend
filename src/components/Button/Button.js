import React from 'react';
import PropTypes from 'prop-types';

function Button({
  className = '',
  style,
  status,
  title,
  type,
  children,
  onChange,
}) {
  return (
    <button
      className={className}
      style={style}
      type={type}
      title={title}
      disabled={status}
      onClick={onChange}>
        {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string,
  onChange: PropTypes.func,
  status: PropTypes.bool,
};

export default Button;
