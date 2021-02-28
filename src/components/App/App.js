import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import data from '../../vendor/data/response.json';
import CurrentUserContext from '../../context/CurrentUserContext';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorBoundary from '../Error/ErrorBoundary';
import './App.css';

function App() {
  const [user, setUser] = React.useState({ name: 'Виталий', email: 'pochta@yandex.ru' });
  const [moviesData, setMoviesDate] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [filterDuration, setFilterDuration] = React.useState(false);

  function filterTimes(arr) {
    return arr.filter((item) => item.duration < 60);
  }

  function onEditProfile(profile) {
    setUser({ ...user, ...profile });
  }
  function isCheckFilter() {
    return setFilterDuration(!filterDuration);
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
            <Header />
            <Switch>
              <Route path='/' exact>
                <Main />
                <Footer />
              </Route>
              <Route path='/movies' exact>
                <Movies
                  filterTimes={filterTimes}
                  isOpenCheck={filterDuration}
                  movies={moviesData}
                  toggleMovies={handleMovies}
                  isCheckFilter={isCheckFilter}
                  />
                  <Footer />
              </Route>
              <Route path='/saved-movies' exact>
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
                <Profile onEditProfile={onEditProfile} user={user}/>
              </Route>
              <Route path='/signup' exact>
                <Register />
              </Route>
              <Route path='/signin' exact>
                <Login />
              </Route>
              <Route path='/404' exact>
                <NotFound />
              </Route>
              <Redirect to='/404' />
            </Switch>
          </div>
        </ErrorBoundary>
      </CurrentUserContext.Provider>
    </React.Fragment>
  );
}

export default App;
