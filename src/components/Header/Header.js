import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  const history = useHistory();
  const [status, setStatus] = React.useState(false);
  const page = {
    path: '/',
    text: 'Главная страница',
    active: '',
    title: 'Перейти на главную страницу',
    type: 'local',
  };
  const moviesPage = [
    {
      path: '/movies',
      text: 'Фильмы',
      active: '',
      title: 'Перейти на страницу поиска фильмов',
      type: 'local',
    },
    {
      path: '/saved-movies',
      text: 'Сохраненные Фильмы',
      active: '',
      title: 'Перейти на страницу поиска фильмов',
      type: 'local',
    },
  ];
  const dataLinks = [
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

  const openPopup = () => {
    setStatus(true);
  };
  const closePopup = () => {
    setStatus(false);
  };
  const editAvatar = () => {
    history.push('/profile');
    closePopup();
  };
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
          <Button
            title={'Профиль'}
            type={'button'}
            className={'Button-avatar Button_hidden'}
            onChange={editAvatar}
          />
        <Navigation place={header.place}>
          <NavTab links={moviesPage} place={header.place}/>
          <NavTab links={dataLinks} place={header.place}/>
        </Navigation>
      </div>
      <Popup isOpen={status} closePopup={closePopup}>
        <Button
          title={'Закрыть'}
          type={'button'}
          className={'Button__close_place_header'}
          onChange={closePopup}
          />
        <Navigation place={popup.place}>
          <NavTab links={[page, ...dataLinks]} place={popup.place}/>
          <Button
            title={'Профиль'}
            type={'button'}
            className={'Button-avatar'}
            onChange={editAvatar}
          />
        </Navigation>
      </Popup>
    </header>
  );
}

export default Header;
