import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import './Popup.css';

function Popup({
  isOpen,
  modifier,
  closePopup,
  children,
  toggleEventListenerWindow,
}) {
  const popup = classes(`Popup ${modifier ? `Popup_type_${modifier}` : ''}`, { Popup_opened: isOpen });
  React.useEffect(() => {
    if (isOpen) {
      toggleEventListenerWindow(true);
    }
    return () => {
      toggleEventListenerWindow(false);
    };
  }, [isOpen, toggleEventListenerWindow]);
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
  isOpen: PropTypes.bool.isRequired,
  modifier: PropTypes.string,
  children: PropTypes.any.isRequired,
  closePopup: PropTypes.func.isRequired,
  toggleEventListenerWindow: PropTypes.func.isRequired,
};

export default Popup;
