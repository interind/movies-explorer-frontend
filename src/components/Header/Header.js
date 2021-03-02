import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Header.css';

function Header({
  className,
  children,
  openPopup,
}) {
  return (
    <header className='Header'>
      <div className={`Header__container ${className ? `Header__container_place_${className}` : ''}`}>
        <Logo />
        {openPopup && (<Button
          title={'Открыть'}
          type={'button'}
          className={'Button__open_place_header'}
          onChange={openPopup}
        />)}
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  openPopup: PropTypes.func,
  children: PropTypes.any,
};

export default Header;
