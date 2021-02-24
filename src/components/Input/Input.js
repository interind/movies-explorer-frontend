import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({
  name,
  type,
  value,
  children,
  className,
  placeholder,
  onInput,
  onChange,
}) {
  return (
    <label>
      <input
        className={className}
        name={name}
        type={type}
        onChange={onChange}
        onInput={onInput}
        placeholder={placeholder}
        value={value}
        />
      {children}
    </label>
  );
}

Input.propTypes = {
  value: PropTypes.any,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,

};

export default Input;
