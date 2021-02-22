import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ toggleNavbar }) {
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
  const [status, setStatus] = React.useState(false);
  const header = {
    title: '',
    place: 'header',
  };
  React.useEffect(() => {
    if (window.innerWidth <= '800') {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, []);

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
      {!status && (<Navigation>
        <NavTab links={dataLinks} place={header.place} hidden={true}/>
        <NavTab links={dataLinks} place={header.place}/>
      </Navigation>)}
    </header>
  );
}

Header.propTypes = {
  toggleNavbar: PropTypes.func,
};

export default Header;
