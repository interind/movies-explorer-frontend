import React from 'react';
import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import NavTab from '../NavTab/NavTab';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Profile from '../Profile/Profile';
import InfoTool from '../InfoTool/InfoTool';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Preloader from '../Preloader/Preloader';
import ErrorBoundary from '../Error/ErrorBoundary';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../context/CurrentUserContext';
import './App.css';

function App() {
  const history = useHistory();
  const page = {
    path: '/',
    text: 'Главная',
    active: '',
    title: 'Перейти на главную страницу',
    type: 'local',
  };
  const avatar = [{
    path: '/profile',
    text: '',
    active: '',
    title: 'страница профиля',
    type: 'local',
  }];
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
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '', _id: '' });
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [stateHeader, setStateHeader] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [isStatusPopup, setStatusPopup] = React.useState(false);
  const [statusInfo, setStatusInfo] = React.useState({ message: '', type: false, visible: false });
  const [moviesData, setMoviesDate] = React.useState([]);
  const [filterData, setFilterDate] = React.useState([]);
  const [filterUserMovies, setFilterUserMovies] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const infoMessage = React.useCallback((text, type, visible) => {
    if (visible) {
      setStatusInfo({
        ...statusInfo,
        message: text,
        type,
        visible,
      });
    }
  }, [statusInfo]);

  function onHeader(bool) {
    setStateHeader(bool);
  }

  function filterTimes(arr, time) {
    return arr.filter((item) => (time ? item.duration <= time : item.duration > 40));
  }
  function filterMovies(arr) {
    const regCheck = (url) => {
      const reg = /^(http)+/;
      return reg.test(url) ? url : `https://api.nomoreparties.co${url}`;
    };
    return arr.map((mov) => {
      const { url } = mov.image
        ? mov.image : 'https://avatars.mds.yandex.net/get-zen_doc/1881616/pub_5e1ea9963639e600ad0cfebb_5e21840e86c4a900ac971659/scale_1200';
      const card = {
        image: regCheck(url),
        nameEN: mov.nameEN || 'Not names films',
        nameRU: mov.nameRU || 'Фильм без названия',
        country: mov.country || 'Россия',
        director: mov.director || 'неизвестный',
        duration: mov.duration || 100,
        year: mov.year || 2021,
        description: mov.description || 'без комментариев',
        id: mov.id,
        trailerLink: mov.trailerLink,
        thumbnail: regCheck(url),
      };
      return card;
    });
  }
  function searchMovies(arr, str) {
    return new Promise((resolve) => {
      if (arr.length > 0) {
        return resolve(arr.filter((mov) => JSON.stringify(mov.nameRU)
          .toLowerCase()
          .includes(str.toLowerCase())
          || JSON.stringify(mov.nameEN)
            .toLowerCase()
            .includes(str.toLowerCase())));
      }
      return resolve(arr);
    });
  }
  function onSearch(checked, nameForm, str) {
    setTimeout(() => {
      setLoading(true);
    }, 100);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (checked === true) {
      if (nameForm === 'movies') {
        searchMovies(moviesData, str)
          .then((data) => {
            if (data.length <= 0) {
              setFilterDate(filterTimes(data));
              infoMessage('Ничего не найдено', false, true);
            }
            setFilterDate(filterTimes(data));
          })
          .catch((err) => infoMessage(`ошибка фильтра ${err.name || '?'}`, false, true))
          .finally(() => setLoading(false));
      } else {
        searchMovies(userMovies, str)
          .then((data) => {
            if (data.length <= 0) {
              setFilterUserMovies(filterTimes(data));
              infoMessage('Ничего не найдено', false, true);
            }
            setFilterUserMovies(filterTimes(data));
          })
          .catch((err) => infoMessage(`ошибка фильтра ${err.name || '?'}`, false, true))
          .finally(() => setLoading(false));
      }
    } else if (checked === false) {
      if (nameForm === 'movies') {
        searchMovies(moviesData, str)
          .then((data) => {
            if (data.length <= 0) {
              setFilterDate(filterTimes(data, 40));
              infoMessage('Ничего не найдено', false, true);
            }
            setFilterDate(filterTimes(data, 40));
          })
          .catch((err) => infoMessage(`ошибка фильтра ${err.name || '?'}`, false, true))
          .finally(() => setLoading(false));
      } else {
        searchMovies(userMovies, str)
          .then((data) => {
            if (data.length <= 0) {
              setFilterUserMovies(filterTimes(data, 40));
              infoMessage('Ничего не найдено', false, true);
            }
            setFilterUserMovies(filterTimes(data, 40));
          })
          .catch((err) => infoMessage(`ошибка фильтра ${err.name || '?'}`, false, true))
          .finally(() => setLoading(false));
      }
    }
  }
  const openPopup = () => {
    setStatusPopup(true);
  };
  const closePopup = () => {
    setStatusPopup(false);
    setStatusInfo({ ...statusInfo, visible: false });
  };
  const closePopupEsc = (evt) => {
    if (evt.key === 'Escape') {
      closePopup();
    }
  };

  function onRegister(arg) {
    setButtonLoading(true);
    return mainApi.register(arg)
      .then((res) => {
        if (res && !res.error && !res.message) {
          setButtonLoading(false);
          localStorage.setItem('email', res.email);
          localStorage.setItem('name', res.name);
          setCurrentUser({ ...currentUser, email: res.email, name: res.name });
          setStatusInfo({
            ...statusInfo,
            message: `${res.name} Мы вас добавили!`,
            type: true,
            visible: true,
          });
          history.push('/signin');
          return Promise.resolve();
        }
        infoMessage(`${res.error ? res.error : res.message}!`, false, true);
        return Promise.reject(res.err);
      })
      .catch((err) => infoMessage(err.message, false, true))
      .finally(() => setButtonLoading(false));
  }

  function handleLogin(evt) {
    evt.preventDefault();
    setLoggedIn(true);
    setLoading(true);
  }

  function onLogin(evt, login) {
    setButtonLoading(true);
    return mainApi
      .authorizationPost({
        ...login,
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          handleLogin(evt);
          setStatusInfo({
            ...statusInfo,
            message: 'Добро пожаловать на проект Movies',
            type: true,
            visible: true,
          });
          return Promise.resolve();
        }
        infoMessage(data.message, false, true);
        return Promise.reject(data.err);
      })
      .catch((err) => infoMessage(err.message, false, true))
      .finally(() => {
        setButtonLoading(false);
        setLoading(false);
      });
  }
  async function toggleEventListenerWindow(bool) {
    if (bool) {
      window.addEventListener('keydown', closePopupEsc);
    } else {
      window.removeEventListener('keydown', closePopupEsc);
    }
  }
  async function toggleEventListenerWindowClick(bool) {
    if (bool) {
      window.addEventListener('click', closePopup);
    } else {
      window.removeEventListener('click', closePopup);
    }
  }

  const signOut = React.useCallback(() => {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    infoMessage('Вы вышли из системы', false, true);
  }, [infoMessage]);

  function handleSavedMovies(card) {
    let movie = card;
    const isSaved = userMovies.some((c) => c.id === card.id);
    if (isSaved && !card._id) {
      movie = userMovies.find((i) => i.id === card.id);
    }
    mainApi
      .changeSaveMoviesStatus(movie, !isSaved)
      .then((newCard) => {
        if (!isSaved) {
          setUserMovies([...userMovies, newCard]);
          infoMessage('Фильм сохранен', true, true);
        } else {
          const movies = userMovies.filter((m) => m.id !== card.id);
          const moviesFilter = filterUserMovies.filter((m) => m.id !== card.id);
          setUserMovies(movies);
          setFilterUserMovies(moviesFilter);
          infoMessage(newCard.message, false, true);
        }
      })
      .catch((err) => infoMessage(err.message, false, true));
  }

  function handleUpdateUser(user) {
    setButtonLoading(true);
    setLoading(true);

    mainApi
      .updateUserInfo(user)
      .then((infoUser) => {
        if (!infoUser || infoUser.error) {
          infoMessage('ошибка данных', false, true);
        } else {
          setCurrentUser({ ...currentUser, ...infoUser });
          infoMessage('Данные заменены успешно', true, true);
        }
      })
      .catch((err) => infoMessage(`Информация пользователя с ошибкой ${err.name}`, false, true))
      .finally(() => {
        setButtonLoading(false);
        setLoading(false);
      });
  }

  React.useEffect(() => {
    if (loggedIn && localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      mainApi.token = token;
      Promise.all([
        mainApi.getInfoForUser(token),
        mainApi.getInfoForMovies(token),
        moviesApi.getMovies(),
      ])
        .then(([dataUser, dataMovies, info]) => {
          if (!(dataUser && dataMovies) || (dataUser.error && dataMovies.error)) {
            setStatusInfo({
              message: 'ошибка данных',
              type: false,
              visible: true,
            });
            Promise.reject(new Error('ошибка данных'));
          }
          setLoading(true);
          setLoggedIn(true);
          setUserMovies(dataMovies);
          setCurrentUser({ ...dataUser });
          localStorage.setItem('email', dataUser.email);
          localStorage.setItem('name', dataUser.name);
          return filterMovies(info);
        })
        .then((movies) => {
          setMoviesDate(movies);
        })
        .catch((err) => {
          localStorage.clear();
          setLoggedIn(false);
          setStatusInfo({
            message: err.message,
            type: false,
            visible: true,
          });
        })
        .finally(() => setLoading(false));
    } else {
      localStorage.clear();
      setLoggedIn(false);
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      const films = JSON.parse(localStorage.getItem('movies'));
      setFilterDate(films);
    } else if (localStorage.getItem('movies-save')) {
      const filmsUser = JSON.parse(localStorage.getItem('movies-save'));
      setFilterUserMovies(filmsUser);
    }
  }, []);

  return (
    <React.Fragment>
      <CurrentUserContext.Provider value={currentUser}>
        <ErrorBoundary>
          <div className='App'>
            {stateHeader && (<Header openPopup={openPopup}>
              {loggedIn ? (
              <Navigation place={'header'}>
                <NavTab
                  links={moviesPage}
                  place={'header'}
                  onChange={closePopup}
                />
                <NavTab
                  links={avatar}
                  place={'avatar'}
                  onChange={closePopup}
                />
              </Navigation>) : (
              <Navigation place={'header'}>
                <NavTab
                  links={[page]}
                  onChange={closePopup}
                />
                <NavTab
                  links={dataLinks}
                  place={'header'}
                  onChange={closePopup}
                />
              </Navigation>)}
            </Header>)}
            <Popup
              isOpen={isStatusPopup}
              closePopup={closePopup}
              toggleEventListenerWindow={toggleEventListenerWindow}
            >
              <Button
                title={'Закрыть'}
                type={'button'}
                className={'Button__close_place_header'}
                onChange={closePopup}
                />
              <Navigation place={'popup'}>
               {loggedIn ? (
              <>
                <NavTab
                  links={[page, ...moviesPage]}
                  place={'popup'}
                  onChange={closePopup}
                />
                <NavTab links={avatar} place={'avatar-popup'} onChange={closePopup}/>
              </>) : (
              <>
                <NavTab
                  links={[page]}
                  place={'popup'}
                  onChange={closePopup}
                />
                <NavTab
                  links={dataLinks}
                  place={'popup'}
                  onChange={closePopup}
                />
              </>)}
              </Navigation>
            </Popup>
            {statusInfo.visible && <InfoTool
              data={statusInfo}
              toggleEventListenerWindowClick={toggleEventListenerWindowClick}
            />}
            {(loggedIn && loading) && <Preloader />}
            <Switch>
              <Route path='/' exact>
                <Main
                  onHeader={onHeader}
                  stateHeader={stateHeader}
                />
                <Footer />
              </Route>
              <ProtectedRoute
                path='/movies' exact
                loggedIn={loggedIn}
                footer={Footer}
              >
                <Movies
                  movies={filterData}
                  userMovies={userMovies}
                  stateHeader={stateHeader}
                  onSearch={onSearch}
                  onHeader={onHeader}
                  toggleMovies={handleSavedMovies}
                />
              </ProtectedRoute>
              <ProtectedRoute
                path='/saved-movies' exact
                loggedIn={loggedIn}
                footer={Footer}
              >
                <SavedMovies
                  movies={filterUserMovies}
                  stateHeader={stateHeader}
                  userMovies={userMovies}
                  onHeader={onHeader}
                  onSearch={onSearch}
                  toggleMovies={handleSavedMovies}
                />
              </ProtectedRoute>
              <ProtectedRoute
                path='/profile' exact
                loggedIn={loggedIn}
                >
                  <Profile
                    stateHeader={stateHeader}
                    signOut={signOut}
                    onHeader={onHeader}
                    onEditProfile={handleUpdateUser}
                  />
                </ProtectedRoute>
              <Route path='/signup' exact>
                <Register
                  stateHeader={stateHeader}
                  buttonLoading={buttonLoading}
                  onHeader={onHeader}
                  onRegister={onRegister}
                />
              </Route>
              <Route path='/signin' exact>
                <Login
                  loggedIn={loggedIn}
                  onLogin={onLogin}
                  onHeader={onHeader}
                  stateHeader={stateHeader}
                  buttonLoading={buttonLoading}
                />
              </Route>
              <Route path='*'>
                <NotFound
                  stateHeader={stateHeader}
                  onHeader={onHeader}
                />
              </Route>
            </Switch>
          </div>
        </ErrorBoundary>
      </CurrentUserContext.Provider>
    </React.Fragment>
  );
}

export default App;
