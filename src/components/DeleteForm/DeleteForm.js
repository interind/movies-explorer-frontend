import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import './DeleteForm.css';

function DeleteForm({
  isCard,
  isOpen,
  onClose,
  buttonLoading,
  onDeleteCard,
  toggleEventListenerWindow,

}) {
  const textButton = buttonLoading ? 'Удаляем...' : 'Да';
  const deletePopup = {
    name: 'delete',
    title: 'Вы уверены?',
    buttonTitle: `${textButton}`,
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onDeleteCard(isCard);
  }

  return (
    <React.Fragment>
      <div className="DeleteForm">
        <Popup
          isOpen={isOpen}
          modifier={deletePopup.name}
          closePopup={onClose}
          toggleEventListenerWindow={toggleEventListenerWindow}
        >
          <Form className='DeleteForm-container' nameFrom={deletePopup.name} onSubmit={handleSubmit}>
            <h2 className='DeleteForm-title'>{deletePopup.title}</h2>
            <Button className={'Button-Submit'} type='submit' title='Удалить'>
              Удалить картинку
            </Button>
            <Button className={'Button-Close'} type='button' title='закрыть' onChange={onClose} />
          </Form>
        </Popup>
      </div>
    </React.Fragment>
  );
}

DeleteForm.propTypes = {
  isCard: PropTypes.object.isRequired,
  buttonLoading: PropTypes.bool.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleEventListenerWindow: PropTypes.func.isRequired,
};

export default DeleteForm;
