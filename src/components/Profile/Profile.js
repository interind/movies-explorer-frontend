import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Button from '../Button/Button';
import HeaderBar from '../HeaderBar/HeaderBar';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import CurrentUserContext from '../../context/CurrentUserContext';
import './Profile.css';

function Profile({
  onEditProfile,
  isLoadingButton,
  signOut,
  onHeader,
}) {
  const userArr = React.useContext(CurrentUserContext);
  const user = userArr[0];
  const [profile, setProfile] = useState({ ...user });
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
    onEditProfile(profile);
  }

  useEffect(() => {
    onHeader(true);
  });

  return (
    <section className='Profile'>
      <Form className='Profile-form' nameFrom='profile-form' onSubmit={handleEditProfile}>
        <HeaderBar place='profile'>
        {`Привет, ${user.name}!`}
        </HeaderBar>
        <MarkupForForms.Profile
          name={profile.name}
          email={profile.email}
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
  isLoadingButton: PropTypes.bool,
};

export default Profile;
