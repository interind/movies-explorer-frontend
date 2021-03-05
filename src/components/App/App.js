import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import NavTab from '../NavTab/NavTab';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import mainApi from '../../utils/MainApi';
import Profile from '../Profile/Profile';
import InfoTool from '../InfoTool/InfoTool';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Preloader from '../Preloader/Preloader';
import ErrorBoundary from '../Error/ErrorBoundary';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';
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
  const [currentUser, setCurrentUser] = React.useState({ name: 'Виталий', email: 'pochta@yandex.ru' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [stateHeader, setStateHeader] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [isStatusPopup, setStatusPopup] = React.useState(false);
  const [statusInfo, setStatusInfo] = React.useState({ type: false, message: '', visible: false });
  const [movApi, setMovApi] = React.useState([]);
  const [moviesData, setMoviesDate] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [filterDuration, setFilterDuration] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const infoMessage = React.useCallback((text, type, visible) => {
    setStatusInfo({
      ...statusInfo,
      type,
      message: text,
      visible,
    });
  }, [statusInfo]);

  function onHeader(bool) {
    setStateHeader(bool);
  }

  function filterTimes(arr) {
    return arr.filter((item) => item.duration <= 40);
  }
  function filterMovies(arr) {
    return arr.filter((item) => item.image !== null || undefined);
  }
  function searchMovies(arr, str) {
    const reg = new RegExp((str), 'gmi');
    return arr.filter((movie) => reg.test(movie.nameRU)
     || reg.test(movie.nameEN));
  }
  function onSearch(str) {
    setMoviesDate(searchMovies(movApi, str));
  }
  function searchSaveMovies(str) {
    setMoviesDate(searchMovies(userMovies, str));
  }
  function onEditProfile(profile) {
    setCurrentUser({ ...currentUser, ...profile });
  }
  function isCheckFilter() {
    return setFilterDuration(!filterDuration);
  }
  const openPopup = () => {
    setStatusPopup(true);
  };
  const closePopup = () => {
    setStatusPopup(false);
  };

  function onRegister(arg) {
    setButtonLoading(true);
    mainApi
      .register(arg)
      .then((res) => {
        if (res) {
          setButtonLoading(false);
          infoMessage('Успешная регистрация', true, true);
          localStorage.setItem('email', res.email);
          localStorage.setItem('name', res.name);
          history.push('/signin');
        } else if (res.error) {
          infoMessage(res.error, false, true);
        } else if (res.message) {
          infoMessage(res.message, false, true);
        } else {
          infoMessage('другая ошибка: res', false, true);
        }
      })
      .catch((err) => {
        infoMessage(err.message, false, true);
      })
      .finally(() => {
        setButtonLoading(false);
      });
  }

  function handleLogin(evt) {
    evt.preventDefault();
    history.push('/');
    setLoggedIn(true);
    setLoading(true);
  }

  function start() {
    Promise.all([mainApi.getInfoForUser(), mainApi.getInfoForMovies()])
      .then(([dataUser, dataMovies]) => {
        if (!(dataUser && dataMovies) || (dataUser.error && dataMovies.error)) {
          infoMessage('ошибка данных', false, true);
          return Promise.reject(new Error('ошибка данных'));
        }
        setCurrentUser({ ...currentUser, ...dataUser });
        setUserMovies(dataMovies);
        return infoMessage('', true, false);
      })
      .catch((err) => {
        infoMessage(err.message, false, true);
        localStorage.removeItem('jwt');
        setLoggedIn(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onLogin(evt, login) {
    setButtonLoading(true);
    mainApi
      .authorizationPost({
        ...login,
      })
      .then((data) => {
        setButtonLoading(false);
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          handleLogin(evt);
          start();
          infoMessage('Добро пожаловать на проект Movies', true, true);
        } else if (!data.token && data.message) {
          infoMessage(data.message, false, true);
        }
      })
      .catch((err) => {
        infoMessage(err.message, false, true);
      })
      .finally(() => {
        setButtonLoading(false);
      });
  }

  function signOut() {
    localStorage.clear();
    history.push('/signin');
  }
  function handleMovies(card) {
    const cardID = userMovies.some((c) => c.id === card.id);
    if (cardID) {
      setUserMovies(userMovies.filter((car) => car !== card));
    } else {
      setUserMovies([card, ...userMovies]);
    }
  }

  React.useEffect(() => {
    moviesApi.getInfoForMovies()
      .then((movies) => setMovApi(movies))
      .catch((error) => infoMessage(error.message, false, true));
    return infoMessage();
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setLoading(true);
      setLoggedIn(true);
      start();
    } else {
      localStorage.clear();
    }
  }, []);

  return (
    <React.Fragment>
      <CurrentUserContext.Provider value={[currentUser, userMovies]}>
        <ErrorBoundary>
          <div className='App'>
            {stateHeader && (<Header openPopup={openPopup}>
              {loggedIn ? (<Navigation place={'header'}>
                <NavTab links={moviesPage} place={'header'} onChange={closePopup}/>
                <NavTab links={avatar} place={'avatar'} onChange={closePopup}/>
                </Navigation>) : (<Navigation place={'header'}>
                <NavTab links={[page]} onChange={closePopup}/>
                <NavTab links={dataLinks} place={'header'} onChange={closePopup}/>
              </Navigation>)}
            </Header>)}
            <Popup isOpen={isStatusPopup} closePopup={closePopup}>
              <Button
                title={'Закрыть'}
                type={'button'}
                className={'Button__close_place_header'}
                onChange={closePopup}
                />
              <Navigation place={'popup'}>
               {loggedIn ? (<>
                 <NavTab links={[page, ...moviesPage]} place={'popup'} onChange={closePopup}/>
                 <NavTab links={avatar} place={'avatar-popup'} onChange={closePopup}/>
                 </>) : (<>
                  <NavTab links={[page]} place={'popup'} onChange={closePopup}/>
                  <NavTab links={dataLinks} place={'popup'} onChange={closePopup}/>
                </>)}
              </Navigation>
            </Popup>
            {statusInfo.visible && <InfoTool data={statusInfo} />}
            {(loggedIn && loading) && <Preloader />}
            <Switch>
              <Route path='/' exact>
                <Main onHeader={onHeader}/>
                <Footer />
              </Route>
              <Route path='/movies' exact>
                <Movies
                  onHeader={onHeader}
                  filterTimes={filterTimes}
                  filterMovies={filterMovies}
                  isOpenCheck={filterDuration}
                  movies={moviesData}
                  toggleMovies={handleMovies}
                  onSearch={onSearch}
                  isCheckFilter={isCheckFilter}
                  />
                <Footer />
              </Route>
              <Route path='/saved-movies' exact>
                <SavedMovies
                  onHeader={onHeader}
                  isOpenCheck={filterDuration}
                  filterTimes={filterTimes}
                  toggleMovies={handleMovies}
                  isCheckFilter={isCheckFilter}
                  onSearch={searchSaveMovies}
                />
                <Footer />
              </Route>
              <Route path='/profile' exact>
                <Profile
                  onHeader={onHeader}
                  onEditProfile={onEditProfile}
                  signOut={signOut}
                />
              </Route>
              <Route path='/signup' exact>
                <Register
                  onRegister={onRegister}
                  onHeader={onHeader}
                  buttonLoading={buttonLoading}
                />
              </Route>
              <Route path='/signin' exact>
                <Login
                  onLogin={onLogin}
                  onHeader={onHeader}
                  buttonLoading={buttonLoading}
                />
              </Route>
              <Route path='*'>
                <NotFound onHeader={onHeader} />
              </Route>
              <Redirect to='/' />
            </Switch>
          </div>
        </ErrorBoundary>
      </CurrentUserContext.Provider>
    </React.Fragment>
  );
}

export default App;
