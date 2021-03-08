import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import Form from '../Form/Form';
import Button from '../Button/Button';
import HeaderBar from '../HeaderBar/HeaderBar';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Register.css';

function Register({
  onRegister,
  buttonLoading,
  onHeader,
  stateHeader,
}) {
  const link = [{
    path: '/signin',
    text: 'Войти',
    active: '',
    title: 'Перейти на страницу авторизации',
    type: 'local',
  }];
  const [register, setRegister] = useState({ name: '', email: '', password: '' });
  const [activeButton, setActiveButton] = useState(true);
  const [validCheck, setValidCheck] = useState({});
  const textButton = buttonLoading ? 'Проверка...' : 'Зарегистрироваться';
  const classButton = classes('Button__register', { Button__disabled: activeButton });

  function validationCheck(evt) {
    if (!evt.target.validity.valid) {
      setActiveButton(!evt.target.validity.valid);
      return setValidCheck({ [evt.target.name]: evt.target.validationMessage });
    }
    setActiveButton(!evt.target.validity.valid);
    return setValidCheck({ [evt.target.name]: '' });
  }

  function setEditRegister(evt) {
    setRegister({ ...register, [evt.target.name]: evt.target.value });
  }

  function clearInput() {
    return setRegister({
      ...register,
      name: '',
      email: '',
      password: '',
    });
  }

  function verifiesAuthorization(evt) {
    evt.preventDefault();
    if (!register.password || !register.email || !register.name) {
      return;
    }
    clearInput();
    onRegister(register);
  }

  useEffect(() => {
    if (stateHeader) {
      onHeader(false);
    }
  }, [onHeader, stateHeader]);

  return (
    <section className='Register'>
      <Form className='Register-form' nameFrom='register-form' onSubmit={verifiesAuthorization}>
        <HeaderBar component={Logo} place='register'>
          Добро пожаловать!
        </HeaderBar>
        <MarkupForForms.Register
          name={register.name}
          password={register.password}
          email={register.email}
          placeMessage={validCheck}
          setEditRegister={setEditRegister}
          validationCheck={validationCheck}/>
        <Button className={classButton} type='submit' title='Регистрация' status={activeButton}>
          {textButton}
        </Button>
        <Navigation place={'register'}>
          <span>Уже зарегистрированы?</span>
          <NavTab links={link} place={'register'}/>
        </Navigation>
      </Form>
    </section>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
  onHeader: PropTypes.func.isRequired,
  stateHeader: PropTypes.bool.isRequired,
  buttonLoading: PropTypes.bool.isRequired,
};

export default Register;
