import React from 'react';
import PropTypes from 'prop-types';
import Popup from '../Popup/Popup';
import notFound from '../../images/moviesCard/errorPic.jpg';
import './ImageForPopup.css';

function ImageForPopup({
  selectedCard,
  onClose,
  isOpen,
  toggleEventListenerWindow,
}) {
  const ImagePopup = {
    name: 'image',
    link: notFound,
  };
  return (
    <Popup
      isOpen={isOpen}
      modifier={ImagePopup.name}
      closePopup={onClose}
      toggleEventListenerWindow={toggleEventListenerWindow}
    >
      <div className='ImageForPopup'>
        <img className='ImageForPopup__pic' src={selectedCard.link || ImagePopup.link} alt={selectedCard.name || 'картинка'} />
        <span className='ImageForPopup__place-pic'>{selectedCard.name}</span>
      </div>
    </Popup>
  );
}

ImageForPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  selectedCard: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleEventListenerWindow: PropTypes.func.isRequired,
};

export default ImageForPopup;
