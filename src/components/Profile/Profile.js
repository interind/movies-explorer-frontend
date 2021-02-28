import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Button from '../Button/Button';
import HeaderBar from '../HeaderBar/HeaderBar';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import './Profile.css';

function Profile({ isLoadingButton }) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });
  const [activeButton, setActiveButton] = useState(true);
  const [validCheck, setValidCheck] = useState({});
  const textButton = isLoadingButton ? 'Отправка...' : 'Изменить';

  function validationCheck(evt) {
    if (!evt.target.validity.valid) {
      return setValidCheck({ [evt.target.name]: evt.target.validationMessage });
    }
    return setValidCheck({ [evt.target.name]: '' });
  }

  function setEditProfile(evt) {
    setProfile({ ...profile, [evt.target.name]: evt.target.value });
    setActiveButton(!evt.target.value);
  }

  function clearInput() {
    setProfile({
      ...profile,
      name: '',
      email: '',
    });
  }

  function handleEditProfile(evt) {
    evt.preventDefault();
    clearInput();
  }
  return (
    <section className='Profile'>
      <Form className='Profile-form' nameFrom='profile-form' onSubmit={handleEditProfile}>
        <HeaderBar modifier={{ place: 'profile' }}>
          Привет, Виталий!
        </HeaderBar>
        <MarkupForForms.Profile
          name={profile.name}
          email={profile.email}
          profileMessage={validCheck}
          setEditProfile={setEditProfile}
          validationProfile={validationCheck}/>
        <Button className={'Profile-button-edit'} type='submit' title='изменить' onClick={handleEditProfile} status={activeButton}>
          {textButton}
        </Button>
        <Button className={'Profile-button-exit'} type='button' title='сохранить' status={activeButton}/>
      </Form>
    </section>
  );
}

Profile.propTypes = {
  isLoadingButton: PropTypes.bool,
};

export default Profile;
