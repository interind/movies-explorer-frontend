import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  className = '',
  status,
  title,
  type,
  children,
  onChange,
}) {
  return (
    <button
      className={`Button ${className}`}
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
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string,
  onChange: PropTypes.func,
  status: PropTypes.bool,
};

export default Button;
