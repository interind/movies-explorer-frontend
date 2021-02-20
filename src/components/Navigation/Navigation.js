import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Navigation.css';

function Navigation() {
  const links = [
    { path: '/', text: 'Главная страница', active: '' },
    { path: '/signup', text: 'Регистрация', active: '' },
    { path: '/signin', text: 'Войти', active: 'Navigation-item_active' },
  ];
  const handleLinkClick = (evt) => {
    console.dir(evt.target);
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
