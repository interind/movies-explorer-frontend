import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Navigation.css';

function Navigation() {
  const links = [
    {
      path: '/',
      text: 'Главная страница',
      active: '',
      title: 'Перейти на главную страницу',
    },
    {
      path: '/signup',
      text: 'Регистрация',
      active: '',
      title: 'Перейти на страницу регистрации',
    },
    {
      path: '/signin',
      text: 'Войти',
      active: 'Navigation-item_active',
      title: 'Перейти на страницу авторизации',
    },
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
