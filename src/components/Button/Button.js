import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  className,
  style,
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
};

export default Button;
