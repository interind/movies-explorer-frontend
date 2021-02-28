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
  const header = 'header';
  const page = { path: '/', title: 'на главную' };
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
        <Navigation place={place.right}>
          <NavTab links={link} place={place.left} onChange={onClose}/>
          <NavTab links={profileLink} place={place.right} onChange={onClose}/>
        </Navigation>
      </div>
    </header>
  );
}

Header.propTypes = {
  place: PropTypes.object.isRequired,
  link: PropTypes.array.isRequired,
  profileLink: PropTypes.array.isRequired,
  openPopup: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Header;
