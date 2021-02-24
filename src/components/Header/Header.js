import React from 'react';
import Logo from '../Logo/Logo';
import Popup from '../Popup/Popup';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  const [status, setStatus] = React.useState(false);
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
      active: 'active',
      title: 'Перейти на страницу авторизации',
      type: 'local',
    },
  ];
  const header = {
    title: '',
    place: 'header',
  };
  const popup = {
    title: '',
    place: 'popup',
  };
  const toggleNavbar = () => setStatus(!status);
  return (
    <header className='Header'>
      <Logo />
      <label>
        <input
          type='checkbox'
          className='Header__button-menu'
          onChange={toggleNavbar}></input>
        <span id='span' className='Header__button-menu'></span>
      </label>
      <Navigation place={header.place}>
        <NavTab links={dataLinks} place={header.place} hidden={true}/>
        <NavTab links={dataLinks} place={header.place}/>
      </Navigation>
    {status && (
      <Popup>
        <Navigation place={popup.place}>
          <NavTab links={dataLinks} place={popup.place}/>
          <button />
        </Navigation>
      </Popup>)}
    </header>
  );
}

export default Header;
