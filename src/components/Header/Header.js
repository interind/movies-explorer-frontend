import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({
  place,
  link,
  profileLink,
  onClose,
  openPopup,
}) {
  const page = { path: '/', title: 'на главную' };
  const avatar = [{
    path: '/profile',
    text: '',
    active: '',
    title: 'страница профиля',
    type: 'local',
  }];
  return (
    <header className='Header'>
      <div className='Header__container'>
        <Logo element={page}/>
         <Button
          title={'Открыть'}
          type={'button'}
          className={'Button__open_place_header'}
          onChange={openPopup}
        />
        <Navigation place={place}>
          <NavTab links={link} place={place} onChange={onClose}/>
          <NavTab links={avatar} place={'avatar'} onChange={onClose}/>
          <NavTab links={profileLink} place={place} onChange={onClose}/>
        </Navigation>
      </div>
    </header>
  );
}

Header.propTypes = {
  place: PropTypes.string.isRequired,
  link: PropTypes.array.isRequired,
  profileLink: PropTypes.array.isRequired,
  openPopup: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Header;
