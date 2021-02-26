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
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import ImagePopup from '../ImagePopup/ImagePopup';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const [moviesData, setMoviesDate] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [image, setImage] = React.useState({});
  const [filterDuration, setFilterDuration] = React.useState(false);
  const [isOpenImage, setIsOpenImage] = React.useState(false);

  function filterTimes(arr) {
    return arr.filter((item) => item.duration <= 60);
  }

  function isCheckFilter() {
    return setFilterDuration(!filterDuration);
  }

  function openImage({ src, name, description }) {
    setImage({ src, name, description });
    return setIsOpenImage(true);
  }
  function onCloseImage() {
    return setIsOpenImage(false);
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
      <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/movies' exact>
          <Movies
            filterTimes={filterTimes}
            isOpenCheck={filterDuration}
            movies={moviesData}
            openImage={openImage}
            toggleMovies={handleMovies}
            isCheckFilter={isCheckFilter}
            />
        </Route>
        <Route path='/saved-movies' exact>
          <SavedMovies
            movies={userMovies}
            isOpenCheck={filterDuration}
            filterTimes={filterTimes}
            openImage={openImage}
            toggleMovies={handleMovies}
            isCheckFilter={isCheckFilter}
          />
        </Route>
        <Route path='/profile' exact>
          <Profile />
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
      <Footer />
      </div>
      <Popup isOpen={isOpenImage}>
        <ImagePopup className='Popup-image' card={image}/>
        <p className='Popup-description'>{image.description}</p>
        <Button type="button" className='Popup-button-close' onChange={onCloseImage} title=''/>
      </Popup>
      </CurrentUserContext.Provider>
    </React.Fragment>
  );
}

export default App;
