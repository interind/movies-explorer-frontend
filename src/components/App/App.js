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
  const [filterDataTimes, setFilterDateTimes] = React.useState([]);
  const [moviesDataTimes, setMoviesDateTimes] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [check, setCheck] = React.useState(false);

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
    return arr.filter((item) => item.image !== null || undefined);
  }
  function searchMovies(arr, str) {
    return arr.filter((mov) => JSON.stringify(mov.nameRU).toLowerCase().includes(str.toLowerCase())
      || JSON.stringify(mov.nameEN).toLowerCase().includes(str.toLowerCase()));
  }
  function onSearch(evt, str) {
    setLoading(true);
    evt.preventDefault();
    if (evt.target[2].checked === true) {
      setCheck(true);
      setFilterDate(searchMovies(moviesData, str));
    } else {
      setCheck(true);
      setFilterDateTimes(searchMovies(moviesDataTimes, str));
    } setLoading(false);
  }
  function searchSaveMovies(str) {
    setMoviesDate(searchMovies(userMovies, str));
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
        if (!res.message) {
          setButtonLoading(false);
          localStorage.setItem('email', res.email);
          localStorage.setItem('name', res.name);
          setCurrentUser({ ...currentUser, email: res.email, name: res.name });
          infoMessage(`${res.name} мы добавили вас!`, true, true);
          history.push('/signin');
        } if (res.error) {
          infoMessage(`${res.error}!`, false, true);
        } if (res.message) {
          infoMessage(`${res.message}!`, false, true);
        }
      })
      .catch((err) => infoMessage(err.message, false, true))
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
        setLoading(false);
      });
  }

  function signOut() {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
  }

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
        } else {
          const movies = userMovies.filter((m) => m.id !== card.id);
          setUserMovies(movies);
          infoMessage(newCard.message, true, true);
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
            setLoading(false);
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
          setMoviesDateTimes(filterTimes(movies, 40));
          setMoviesDate(filterTimes(movies));
          setCheck(false);
        })
        .catch((err) => {
          signOut();
          return new Error(err.message);
        })
        .finally(() => setLoading(false));
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <React.Fragment>
      <CurrentUserContext.Provider value={currentUser}>
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
                <Main onHeader={onHeader} stateHeader={stateHeader}/>
                <Footer />
              </Route>
              <ProtectedRoute
                path='/movies' exact
                loggedIn={loggedIn}
                footer={Footer}
              >
                <Movies
                  onHeader={onHeader}
                  stateHeader={stateHeader}
                  check={check}
                  movies={filterData}
                  moviesDataTimes={filterDataTimes}
                  userMovies={userMovies}
                  toggleMovies={handleSavedMovies}
                  onSearch={onSearch}/>
              </ProtectedRoute>
              <ProtectedRoute
                path='/saved-movies' exact
                loggedIn={loggedIn}
                footer={Footer}
              >
                <SavedMovies
                  onHeader={onHeader}
                  stateHeader={stateHeader}
                  movies={userMovies}
                  userMovies={userMovies}
                  filterTimes={filterTimes}
                  toggleMovies={handleSavedMovies}
                  onSearch={searchSaveMovies}/>
              </ProtectedRoute>
              <ProtectedRoute
                path='/profile' exact
                loggedIn={loggedIn}
                >
                  <Profile
                    onHeader={onHeader}
                    stateHeader={stateHeader}
                    onEditProfile={handleUpdateUser}
                    signOut={signOut}
                  />
                </ProtectedRoute>
              <Route path='/signup' exact>
                <Register
                  onRegister={onRegister}
                  stateHeader={stateHeader}
                  onHeader={onHeader}
                  buttonLoading={buttonLoading}
                />
              </Route>
              <Route path='/signin' exact>
                <Login
                  onLogin={onLogin}
                  onHeader={onHeader}
                  stateHeader={stateHeader}
                  buttonLoading={buttonLoading}
                />
              </Route>
              <Route path='*'>
                <NotFound onHeader={onHeader} stateHeader={stateHeader} />
              </Route>
            </Switch>
          </div>
        </ErrorBoundary>
      </CurrentUserContext.Provider>
    </React.Fragment>
  );
}

export default App;
