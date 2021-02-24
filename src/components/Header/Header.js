import React from 'react';
import Logo from '../Logo/Logo';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
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
      <div className='Header__container'>
        <Logo />
         <Button
          title={'Открыть'}
          type={'button'}
          className={'Header__button-open'}
          onChange={toggleNavbar}
          />
        <Navigation place={header.place}>
          <NavTab links={dataLinks} place={header.place}/>
        </Navigation>
      </div>
    {status && (
      <Popup>
        <Button
          title={'Закрыть'}
          type={'button'}
          className={'Header__button-close'}
          onChange={toggleNavbar}
          />
        <Navigation place={popup.place}>
          <NavTab links={dataLinks} place={popup.place}/>
          <button />
        </Navigation>
      </Popup>)}
    </header>
  );
}

export default Header;
