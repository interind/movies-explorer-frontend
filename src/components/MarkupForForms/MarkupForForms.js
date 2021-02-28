import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

export default {
  Profile: function Profile({
    name,
    email,
    setEditProfile,
    validationProfile,
    profileMessage,
  }) {
    Profile.propTypes = {
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      setEditProfile: PropTypes.func.isRequired,
      validationProfile: PropTypes.func.isRequired,
      profileMessage: PropTypes.object.isRequired,
    };
    const inputValidClass = classes('Profile__input', {
      Profile__input_type_error: name || email,
    });
    return (
      <React.Fragment>
        <label className='Profile__label' htmlFor='input-name'>
          Имя
        <input
          className={inputValidClass}
          id='input-name'
          type='text'
          name='name'
          minLength='2'
          maxLength='40'
          placeholder='Имя'
          defaultValue={name}
          onChange={setEditProfile}
          onInput={validationProfile}
          required
        />
        </label>
        {name === '' && (
          <div className='Profile__error'>
            <span
              className='Profile__input-error Profile__input-error_active'
              id='input-name-error'
            >
              {profileMessage.name}
            </span>
          </div>
        )}
          <label className='Profile__label' htmlFor='input-email'>
            Почта
          <input
          className={inputValidClass}
          type='email'
          placeholder='Почта'
          id='input-email'
          defaultValue={email}
          name='email'
          onChange={setEditProfile}
          onInput={validationProfile}
          required
        />
        </label>
        {email !== '' && (
          <div className='Profile__error'>
            <span
              className='Profile__input-error Profile__input-error_active'
              id='input-email-error'
            >
              {profileMessage.email}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  },
  Login: function Login(props) {
    Login.propTypes = {
      password: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      editEmail: PropTypes.func.isRequired,
      editPassword: PropTypes.func.isRequired,
      validationCheck: PropTypes.func.isRequired,
      placeMessage: PropTypes.object.isRequired,
    };
    const inputValidClass = classes('popup__input popup__input_type_check', {
      popup__input_type_error: props.password || props.email,
    });
    return (
      <React.Fragment>
        <input
          className={inputValidClass}
          type='email'
          placeholder='Почта'
          id='input-email'
          value={props.email}
          name='email'
          onChange={props.editEmail}
          onInput={props.validationCheck}
          required
        />
        {props.email !== '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-email-error'
            >
              {props.placeMessage.email}
            </span>
          </div>
        )}
        <input
          className={inputValidClass}
          type='password'
          placeholder='Пароль'
          id='input-password'
          name='password'
          minLength='6'
          value={props.password}
          maxLength='30'
          onChange={props.editPassword}
          onInput={props.validationCheck}
          autoComplete='off'
          required
        />
        {props.password && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-password-error'
            >
              {props.placeMessage.password}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  },
  Register: function Register(props) {
    Register.propTypes = {
      email: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      editName: PropTypes.func.isRequired,
      editAbout: PropTypes.func.isRequired,
      editEmail: PropTypes.func.isRequired,
      editPassword: PropTypes.func.isRequired,
      editAvatar: PropTypes.func.isRequired,
      validationCheck: PropTypes.func.isRequired,
      placeMessage: PropTypes.object.isRequired,
    };
    const inputValidClass = classes('popup__input popup__input_type_check', {
      popup__input_type_error:
       (props.password || props.email || props.name || props.about || props.avatar),
    });
    return (
      <React.Fragment>
        <input
          className={inputValidClass}
          id='input-name'
          type='text'
          name='name'
          minLength='2'
          maxLength='40'
          placeholder='Ваше имя'
          value={props.name}
          onChange={props.editName}
          onInput={props.validationCheck}
        />
        {props.name !== '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-name-error'
            >
              {props.placeMessage.name}
            </span>
          </div>
        )}
        <input
          className={inputValidClass}
          id='input-about'
          type='text'
          name='about'
          minLength='2'
          maxLength='200'
          placeholder='Ваша профессия'
          value={props.about}
          onChange={props.editAbout}
          onInput={props.validationCheck}
        />
        {props.about !== '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-about-error'
            >
              {props.placeMessage.about}
            </span>
          </div>
        )}
        <input
          className={inputValidClass}
          type='email'
          placeholder='Почта'
          id='input-email'
          value={props.email}
          name='email'
          onChange={props.editEmail}
          onInput={props.validationCheck}
          title='обязательное поле'
          required
        />
        {props.email !== '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-email-error'
            >
              {props.placeMessage.email}
            </span>
          </div>
        )}
        <input
          className={inputValidClass}
          type='password'
          placeholder='Пароль'
          id='input-password'
          name='password'
          minLength='6'
          value={props.password}
          maxLength='30'
          onChange={props.editPassword}
          onInput={props.validationCheck}
          autoComplete='off'
          title='обязательное поле'
          required
        />
        {props.password && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-password-error'
            >
              {props.placeMessage.password}
            </span>
          </div>
        )}
        <input
          className={inputValidClass}
          type='url'
          placeholder='Ссылка на аватарку'
          id='input-avatar'
          name='avatar'
          value={props.avatar}
          onChange={props.editAvatar}
          onInput={props.validationCheck}
        />
        {props.avatar !== '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-avatar-error '
            >
              {props.placeMessage.avatar}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  },
  Search: function Search({ movie, onFind }) {
    Search.propTypes = {
      movie: PropTypes.string,
      onFind: PropTypes.func,
    };
    return (
      <React.Fragment>
        <input className='SearchForm-input' name='search' defaultValue={movie} type='text' placeholder='Фильм' />
        <Button className='Button__search' type='submit' title='Поиск' onChange={onFind}/>
      </React.Fragment>
    );
  },
};
