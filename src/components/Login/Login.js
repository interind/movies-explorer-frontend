import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Button from '../Button/Button';
import HeaderBar from '../HeaderBar/HeaderBar';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import './Login.css';
import Logo from '../Logo/Logo';

function Login({ onLogin, isLoadingButton }) {
  const link = [{
    path: '/signup',
    text: 'Регистрация',
    active: '',
    title: 'Перейти на страницу регистрации',
    type: 'local',
  }];
  const [login, setLogin] = useState({ email: '', password: '' });
  const [activeButton, setActiveButton] = useState(true);
  const [validCheck, setValidCheck] = useState({});
  const textButton = isLoadingButton ? 'Проверка...' : 'Войти';

  function validationCheck(evt) {
    if (!evt.target.validity.valid) {
      return setValidCheck({ [evt.target.name]: evt.target.validationMessage });
    }
    return setValidCheck({ [evt.target.name]: '' });
  }

  function setEditLogin(evt) {
    setLogin({ ...login, [evt.target.name]: evt.target.value });
    setActiveButton(!evt.target.value);
  }

  function clearInput() {
    setLogin({
      ...login,
      email: '',
      password: '',
    });
  }

  function verifiesAuthorization(evt) {
    evt.preventDefault();
    if (!login.password || !login.email) {
      return;
    }
    clearInput();
    onLogin(login);
  }

  return (
    <section className='Login'>
      <Form className='Login-form' nameFrom='login-form' onSubmit={verifiesAuthorization}>
        <HeaderBar component={Logo} place='login'>
          Рады видеть!
        </HeaderBar>
        <MarkupForForms.Login
          password={login.password}
          email={login.email}
          placeMessage={validCheck}
          setEditLogin={setEditLogin}
          validationCheck={validationCheck}/>
        <Button className={'Button__login'} type='submit' title='Войти' status={activeButton}>
          {textButton}
        </Button>
        <Navigation place={'login'}>
          <p>Еще не зарегистрированы?</p>
          <NavTab links={link} place={'login'}/>
        </Navigation>
      </Form>
    </section>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
  isLoadingButton: PropTypes.bool,
};

export default Login;
