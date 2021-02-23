import React from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

function Popup({ children }) {
  return (
    <div className='Popup'>{children}</div>
  );
}

Popup.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Popup;
