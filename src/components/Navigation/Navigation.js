import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Navigation.css';

function Navigation() {
  const links = [
    { path: '/signup', text: 'Регистрация' },
    { path: '/signin', text: 'Войти' },
  ];
  const handleLinkClick = (evt) => {
    evt.preventDefault();
  };
  return (
    <nav>
      <ul className='Navigation-links'>
        <NavTab links={links} handleLinkClick={handleLinkClick} mod={'Navigation-item'}/>
      </ul>
    </nav>
  );
}

export default Navigation;
