import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Button from '../Button/Button';
import HeaderBar from '../HeaderBar/HeaderBar';
import MarkupForForms from '../MarkupForForms/MarkupForForms';
import NavTab from '../NavTab/NavTab';
import Navigation from '../Navigation/Navigation';
import './Register.css';

function Register({ onRegister, isLoadingButton }) {
  const link = [{
    path: '/signin',
    text: 'Войти',
    active: '',
    title: 'Перейти на страницу авторизации',
    type: 'local',
  }];
  const [register, setRegister] = useState({ name: 'Виталий', email: 'pochta@yandex.ru', password: '123456' });
  const [activeButton, setActiveButton] = useState(true);
  const [validCheck, setValidCheck] = useState({});
  const textButton = isLoadingButton ? 'Отправка...' : 'Редактировать';

  function validationCheck(evt) {
    if (!evt.target.validity.valid) {
      return setValidCheck({ [evt.target.name]: evt.target.validationMessage });
    }
    return setValidCheck({ [evt.target.name]: '' });
  }

  function setEditRegister(evt) {
    setRegister({ ...register, [evt.target.name]: evt.target.value });
    setActiveButton(!evt.target.value);
  }

  function clearInput() {
    setRegister({
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

  return (
    <section className='Register'>
      <Form className='Register-form' nameFrom='register-form' onSubmit={verifiesAuthorization}>
        <HeaderBar place='register'>
          Добро пожаловать!
        </HeaderBar>
        <MarkupForForms.Register
          name={register.name}
          password={register.password}
          email={register.email}
          placeMessage={validCheck}
          setEditRegister={setEditRegister}
          validationCheck={validationCheck}/>
        <Button className={'Button__register'} type='submit' title='Регистрация' status={activeButton}>
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
  onRegister: PropTypes.func,
  isLoadingButton: PropTypes.bool,
};

export default Register;
