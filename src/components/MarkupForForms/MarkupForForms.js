import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types';

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
          autoCorrect='off'
          autoCapitalize='words'
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
          placeholder='E-mail'
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
  Login: function Login({
    email,
    password,
    setEditLogin,
    validationCheck,
    placeMessage,
  }) {
    Login.propTypes = {
      password: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      setEditLogin: PropTypes.func.isRequired,
      validationCheck: PropTypes.func.isRequired,
      placeMessage: PropTypes.object.isRequired,
    };
    const inputValidClass = classes('Login__input', {
      Login__input_type_error: password || email,
    });
    return (
      <React.Fragment>
         <label className='Login__label' htmlFor='input-email'>
            Почта
        <input
          className={inputValidClass}
          type='email'
          placeholder='E-mail'
          id='input-email'
          value={email}
          name='email'
          onChange={setEditLogin}
          onInput={validationCheck}
          required
        />
        </label>
        {email !== '' && (
          <div className='Login__error'>
            <span
              className='Login__input-error Login__input-error_active'
              id='input-email-error'
            >
              {placeMessage.email}
            </span>
          </div>
        )}
         <label className='Login__label' htmlFor='input-password'>
            Пaроль
        <input
          className={inputValidClass}
          type='password'
          placeholder='Пароль'
          id='input-password'
          name='password'
          minLength='6'
          value={password}
          maxLength='30'
          onChange={setEditLogin}
          onInput={validationCheck}
          autoComplete='off'
          required
        />
        </label>
        {password && (
          <div className='Login__error'>
            <span
              className='Login__input-error Login__input-error_active'
              id='input-password-error'
            >
              {placeMessage.password}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  },
  Register: function Register({
    name,
    email,
    password,
    setEditRegister,
    placeMessage,
    validationCheck,
  }) {
    Register.propTypes = {
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      setEditRegister: PropTypes.func.isRequired,
      validationCheck: PropTypes.func.isRequired,
      placeMessage: PropTypes.object.isRequired,
    };
    const inputValidClass = classes('Register__input', {
      Register__input_type_error:
       (password || email || name),
    });
    return (
      <React.Fragment>
        <label className='Register__label' htmlFor='input-name'>
            Имя
        <input
          className={inputValidClass}
          id='input-name'
          type='text'
          name='name'
          autoCorrect='off'
          autoCapitalize='words'
          minLength='2'
          maxLength='40'
          placeholder='Ваше имя'
          value={name}
          onChange={setEditRegister}
          onInput={validationCheck}
          required
        />
        </label>
        {name !== '' && (
          <div className='Register__error'>
            <span
              className='Register__input-error Register__input-error_active'
              id='input-name-error'
            >
              {placeMessage.name}
            </span>
          </div>
        )}
         <label className='Register__label' htmlFor='input-email'>
            Почта
        <input
          className={inputValidClass}
          type='email'
          placeholder='Ваш e-mail'
          id='input-email'
          value={email}
          name='email'
          onChange={setEditRegister}
          onInput={validationCheck}
          required
        />
        </label>
        {email !== '' && (
          <div className='Register__error'>
            <span
              className='Register__input-error Register__input-error_active'
              id='input-email-error'
            >
              {placeMessage.email}
            </span>
          </div>
        )}
         <label className='Register__label' htmlFor='input-password'>
            Пaроль
        <input
          className={inputValidClass}
          type='password'
          placeholder='Придумайте надежный пароль'
          id='input-password'
          name='password'
          minLength='6'
          value={password}
          maxLength='30'
          onChange={setEditRegister}
          onInput={validationCheck}
          autoComplete='off'
          required
        />
        </label>
        {password && (
          <div className='Register__error'>
            <span
              className='Register__input-error Register__input-error_active'
              id='input-password-error'
            >
              {placeMessage.password}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  },
  Search: function Search({
    movie,
    setEditMovies,
    validationCheck,
    placeMessage,
  }) {
    Search.propTypes = {
      movie: PropTypes.string,
      placeMessage: PropTypes.string,
      setEditMovies: PropTypes.func,
      validationCheck: PropTypes.func,
    };
    return (
      <React.Fragment>
        <input
        className='SearchForm__input'
        name='search'
        value={movie}
        type='text'
        placeholder='Фильм'
        minLength='1'
        onChange={setEditMovies}
        onInput={validationCheck}
        autoComplete='off'
        autoFocus={true}
        required />
        { placeMessage && (
          <div className='SearchForm__error'>
            <span
              className='SearchForm__input-error SearchForm__input-error_active'
              id='input-search-error'
            >
              {placeMessage}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  },
};
