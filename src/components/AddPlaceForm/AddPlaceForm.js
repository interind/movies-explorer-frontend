import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Button from '../Button/Button';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import imagesCheck from '../../utils/utils';
import './AddPlaceForm.css';

function AddPlaceForm({
  buttonLoading,
  onAddPlace,
}) {
  const textButton = buttonLoading ? 'Сохранение...' : 'Сохранить';
  const placePopup = {
    name: 'form-place',
    title: 'Новое место',
    buttonTitle: `${textButton}`,
  };
  const message = {
    place: localStorage.getItem('place'),
    link: localStorage.getItem('link'),
  };
  const [addPlace, setAddPlace] = React.useState({ place: message.place || '', link: message.link || '' });

  const [validPlace, setValidPlace] = React.useState({
    place: '',
    link: '',
  });
  const [activeButton, setActiveButton] = React.useState(true);

  function validationPlace(evt) {
    if (!evt.target.validity.valid) {
      return setValidPlace({
        [evt.target.name]: evt.target.validationMessage,
      });
    }
    return setValidPlace({ [evt.target.name]: '' });
  }

  function messageStorage({ place = addPlace.place, link = addPlace.link }) {
    localStorage.setItem('place', place);
    localStorage.setItem('link', link);
  }

  function setPlace(evt) {
    setAddPlace({ ...addPlace, [evt.target.name]: evt.target.value });
    messageStorage({ [evt.target.name]: evt.target.value });
    if (Array.from(evt.target.form).some((e) => e.validationMessage)) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }

  function clearInput() {
    localStorage.removeItem('place');
    localStorage.removeItem('link');
    setAddPlace({ ...addPlace, place: '', link: '' });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    imagesCheck(addPlace.link)
      .then(() => {
        onAddPlace(addPlace)
          .then(() => clearInput())
          .catch((err) => err);
      })
      .catch((err) => {
        setValidPlace({ ...validPlace, link: err.message });
      });
  }

  return (
    <section className="AddPlaceForm">
      <Form className='AddPlaceForm-container' nameFrom={placePopup.name} onSubmit={handleSubmit}>
        <MarkupForForms.Place
          link={addPlace.link}
          place={addPlace.place}
          placeMessage={validPlace}
          editPlace={setPlace}
          validationPlace={validationPlace}
        />
        <Button className={'Button-Add'} type='submit' title='Добавить' status={activeButton}>
          Добавить картинку
        </Button>
      </Form>
    </section>
  );
}

AddPlaceForm.propTypes = {
  buttonLoading: PropTypes.bool.isRequired,
  onAddPlace: PropTypes.func.isRequired,
};

export default AddPlaceForm;
