import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import './Popup.css';

function Popup({ isOpen, children }) {
  const popup = classes('Popup', { Popup_opened: isOpen });
  return (
    <div className={popup}>{children}</div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

export default Popup;
