import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import data from '../../vendor/data/response.json';
import CurrentUserContext from '../../context/CurrentUserContext';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import NavTab from '../NavTab/NavTab';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import ErrorBoundary from '../Error/ErrorBoundary';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';
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
  const [user, setUser] = React.useState({ name: 'Виталий', email: 'pochta@yandex.ru' });
  const [isStatusPopup, setStatusPopup] = React.useState(false);
  const [moviesData, setMoviesDate] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [filterDuration, setFilterDuration] = React.useState(false);
  const [place, setPlace] = React.useState('');

  function tooglePlace(str) {
    setPlace(str);
  }
  function filterTimes(arr) {
    return arr.filter((item) => item.duration < 60);
  }
  function filterMovies(arr) {
    return arr.filter((item) => item.image !== null || undefined);
  }

  function onEditProfile(profile) {
    setUser({ ...user, ...profile });
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
    const arr = JSON.parse(JSON.stringify(data));
    setMoviesDate(arr);
  }, []);

  return (
    <React.Fragment>
      <CurrentUserContext.Provider value={userMovies}>
        <ErrorBoundary>
          <div className='App'>
            <Popup isOpen={isStatusPopup} closePopup={closePopup}>
              <Button
                title={'Закрыть'}
                type={'button'}
                className={'Button__close_place_header'}
                onChange={closePopup}
                />
              {!place ? (<Navigation place={'popup'}>
                <NavTab links={[page, ...moviesPage]} place={'popup'} onChange={closePopup}/>
                <NavTab links={avatar} place={'avatar-popup'} onChange={closePopup}/>
              </Navigation>)
                : (<Navigation place={'popup'}>
                <NavTab links={[page, ...moviesPage]} place={'popup'} onChange={closePopup}/>
                <NavTab links={dataLinks} place={'popup'} onChange={closePopup}/>
              </Navigation>)}
            </Popup>
            <Switch>
              <Route path='/' exact>
                <Header openPopup={openPopup}>
                    <Navigation place={'header'}>
                      <NavTab links={moviesPage} place={'header'} onChange={closePopup}/>
                      <NavTab links={dataLinks} place={'header'} onChange={closePopup}/>
                    </Navigation>
                  </Header>
                <Main />
                <Footer />
              </Route>
              <Route path='/movies' exact>
                <Header openPopup={openPopup}>
                    <Navigation place={'header'}>
                      <NavTab links={moviesPage} place={'header'} onChange={closePopup}/>
                      <NavTab links={avatar} place={'avatar'} onChange={closePopup}/>
                    </Navigation>
                </Header>
                <Movies
                  filterTimes={filterTimes}
                  filterMovies={filterMovies}
                  isOpenCheck={filterDuration}
                  movies={moviesData}
                  toggleMovies={handleMovies}
                  isCheckFilter={isCheckFilter}
                  />
                <Footer />
              </Route>
              <Route path='/saved-movies' exact>
                <Header openPopup={openPopup}>
                    <Navigation place={'header'}>
                      <NavTab links={moviesPage} place={'header'} onChange={closePopup}/>
                      <NavTab links={avatar} place={'avatar'} onChange={closePopup}/>
                    </Navigation>
                </Header>
                <SavedMovies
                  movies={userMovies}
                  isOpenCheck={filterDuration}
                  filterTimes={filterTimes}
                  toggleMovies={handleMovies}
                  isCheckFilter={isCheckFilter}
                />
                <Footer />
              </Route>
              <Route path='/profile' exact>
                <Header openPopup={openPopup}>
                    <Navigation place={'header'}>
                      <NavTab links={moviesPage} place={'header'} onChange={closePopup}/>
                      <NavTab links={avatar} place={'avatar'} onChange={closePopup}/>
                    </Navigation>
                  </Header>
                <Profile
                  onEditProfile={onEditProfile}
                  user={user}
                  signOut={signOut}
                />
              </Route>
              <Route path='/signup' exact>
                <Register tooglePlace={tooglePlace} />
              </Route>
              <Route path='/signin' exact>
                <Login tooglePlace={tooglePlace} />
              </Route>
              <Route path='*' component={NotFound} />
              <Redirect to='/' />
            </Switch>
          </div>
        </ErrorBoundary>
      </CurrentUserContext.Provider>
    </React.Fragment>
  );
}

export default App;
