import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

function Form({
  nameFrom,
  className,
  onSubmit,
  children,
}) {
  return (
    <form className={className} name={nameFrom} onChange={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  className: PropTypes.string.isRequired,
  nameFrom: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
