import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import data from '../../vendor/data/response.json';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const [moviesData, setMoviesDate] = React.useState([]);
  const [image, setImage] = React.useState({});
  const [isOpenImage, setIsOpenImage] = React.useState(false);

  function openImage({ src, name }) {
    setImage({ src, name });
    return setIsOpenImage(true);
  }
  function onCloseImage() {
    return setIsOpenImage(false);
  }

  React.useEffect(() => {
    const arr = JSON.parse(JSON.stringify(data));
    setMoviesDate(arr);
  }, []);

  return (
    <React.Fragment>
      <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/movies' exact>
          <Movies movies={moviesData} openImage={openImage}/>
        </Route>
        <Route path='/saved-movies' exact>
          <SavedMovies />
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
        <img src={image.src} alt={image.name} style={{ width: '100%' }}/>
        <Button type="button" style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'orange',
          position: 'absolute',
          top: '40px',
          right: '40px',
        }} onChange={onCloseImage} className='' title=''/>
      </Popup>
    </React.Fragment>
  );
}

export default App;
