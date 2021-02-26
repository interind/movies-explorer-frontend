import React from 'react';
import PropTypes from 'prop-types';

function ImagePopup({ card, className }) {
  return (
    <img src={card.src} alt={card.name} className={className}/>
  );
}

ImagePopup.propTypes = {
  card: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default ImagePopup;
