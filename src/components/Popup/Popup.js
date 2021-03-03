import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import './Popup.css';

function Popup({ isOpen, closePopup, children }) {
  const popup = classes('Popup', { Popup_opened: isOpen });
  return (
    <div className={popup} onMouseDown={(evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup();
      }
    }}>
    {children}
    </div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool,
  closePopup: PropTypes.func,
  children: PropTypes.any.isRequired,
};

export default Popup;
