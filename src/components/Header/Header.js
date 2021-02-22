import React from 'react';
import Logo from '../Logo/Logo';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  const dataLinks = [
    {
      path: '/',
      text: 'Главная страница',
      active: '',
      title: 'Перейти на главную страницу',
      type: 'local',
    },
    {
      path: '/signup',
      text: 'Регистрация',
      active: '',
      title: 'Перейти на страницу регистрации',
      type: 'local',
    },
    {
      path: '/signin',
      text: 'Войти',
      active: 'Navigation-item_active',
      title: 'Перейти на страницу авторизации',
      type: 'local',
    },
  ];
  const header = {
    title: '',
    place: 'header',
  };
  return (
    <header className='Header'>
      <Logo />
      <Navigation>
        <NavTab links={dataLinks} place={header.place}/>
      </Navigation>
    </header>
  );
}

export default Header;
