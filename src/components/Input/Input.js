import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({
  name,
  type,
  value,
  className = '',
  placeholder,
  onInput,
  onChange,
}) {
  return (
    <input
      className={className}
      name={name}
      id={`input-${name}`}
      type={type}
      onChange={onChange}
      onInput={onInput}
      placeholder={placeholder}
      value={value}
    ></input>
  );
}

Input.propTypes = {
  value: PropTypes.any,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,

};

export default Input;
