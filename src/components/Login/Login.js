import React, { useState, useEffect } from 'react';
import {
  useHistory,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from 'classnames';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Button from '../Button/Button';
import HeaderBar from '../HeaderBar/HeaderBar';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import './Login.css';

function Login({
  loggedIn,
  onLogin,
  buttonLoading,
  onHeader,
  stateHeader,
}) {
  const link = [{
    path: '/signup',
    text: 'Регистрация',
    active: '',
    title: 'Перейти на страницу регистрации',
    type: 'local',
  }];
  const history = useHistory();
  const localEmail = localStorage.getItem('email');
  const localName = localStorage.getItem('name');

  const [login, setLogin] = useState({ email: localEmail || '', password: '' });
  const [activeButton, setActiveButton] = useState(true);
  const [validCheck, setValidCheck] = useState({});
  const textButton = buttonLoading ? 'Проверка...' : 'Войти';
  const classButton = classes('Button__login', { Button__disabled: activeButton });

  function validationCheck(evt) {
    if (!evt.target.validity.valid) {
      return setValidCheck({ [evt.target.name]: evt.target.validationMessage });
    }
    return setValidCheck({ [evt.target.name]: '' });
  }

  function setEditLogin(evt) {
    setLogin({ ...login, [evt.target.name]: evt.target.value });
    if (Array.from(evt.target.form).some((e) => e.validationMessage)) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }

  function clearInput() {
    return setLogin({
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
    onLogin(evt, login)
      .then(() => {
        clearInput();
        history.push('/movies');
      }).catch((err) => err);
  }

  useEffect(() => {
    if (loggedIn) {
      history.push('/movies');
    }
  }, [history, loggedIn]);

  useEffect(() => {
    if (stateHeader) {
      onHeader(false);
    }
  }, [onHeader, stateHeader]);

  return (
    <section className='Login'>
      <Form className='Login-form' nameFrom='login-form' onSubmit={(evt) => verifiesAuthorization(evt)}>
        <HeaderBar component={Logo} place='login'>
          Рады видеть{` ${localName || ''}!`}
        </HeaderBar>
        <MarkupForForms.Login
          password={login.password}
          email={login.email}
          placeMessage={validCheck}
          setEditLogin={setEditLogin}
          validationCheck={validationCheck}/>
        <Button className={classButton} type='submit' title='Войти' status={activeButton}>
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
  onLogin: PropTypes.func.isRequired,
  onHeader: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  stateHeader: PropTypes.bool.isRequired,
  buttonLoading: PropTypes.bool.isRequired,
};

export default Login;
