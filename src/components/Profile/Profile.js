import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Button from '../Button/Button';
import HeaderBar from '../HeaderBar/HeaderBar';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import CurrentUserContext from '../../context/CurrentUserContext';
import './Profile.css';
import guest from '../../utils/constants';

function Profile({
  onEditProfile,
  isLoadingButton,
  signOut,
  onHeader,
  stateHeader,
}) {
  const { name, email } = React.useContext(CurrentUserContext);
  const [profile, setProfile] = useState({ name: name || '', email: email || '' });
  const [activeButton, setActiveButton] = useState(true);
  const [validCheck, setValidCheck] = useState({});
  const textButton = isLoadingButton ? 'Отправка...' : 'Редактировать';

  function validationCheck(evt) {
    if (!evt.target.validity.valid) {
      return setValidCheck({ [evt.target.name]: evt.target.validationMessage });
    }
    return setValidCheck({ [evt.target.name]: '' });
  }

  function setEditProfile(evt) {
    setProfile({ ...profile, [evt.target.name]: evt.target.value });
    if (Array.from(evt.target.form).some((e) => e.validationMessage)) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }

  function handleEditProfile(evt) {
    evt.preventDefault();
    if (localStorage.getItem('email') === guest.email) {
      onEditProfile({ name: '', email: '' });
    } else {
      onEditProfile(profile);
    }
  }

  useEffect(() => {
    if (!stateHeader) {
      onHeader(true);
    }
  }, [onHeader, stateHeader]);

  return (
    <section className='Profile'>
      <Form className='Profile-form' nameFrom='profile-form' onSubmit={handleEditProfile}>
        <HeaderBar place='profile'>
        {`Привет, ${name}!`}
        </HeaderBar>
        <MarkupForForms.Profile
          name={name}
          email={email}
          profileMessage={validCheck}
          setEditProfile={setEditProfile}
          validationProfile={validationCheck}/>
        <Button className={'Button__profile-edit'} type='submit' title='изменить' status={activeButton}>
          {textButton}
        </Button>
        <Button className={'Button__profile-exit'} onChange={signOut} type='button' title='выйти'>
          Выйти из профиля
        </Button>
      </Form>
    </section>
  );
}

Profile.propTypes = {
  onEditProfile: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  onHeader: PropTypes.func.isRequired,
  stateHeader: PropTypes.bool.isRequired,
  isLoadingButton: PropTypes.bool,
};

export default Profile;
