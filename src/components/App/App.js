import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Header />
      <Navigation/>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/movies' exact>
          <Movies />
        </Route>
        <Route path='/saved-movies' exact>
          <SavedMovies />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
        <Route path='/sign-up' exact>
          <Register/>
        </Route>
        <Route path='/sign-in' exact>
          <Login/>
        </Route>
        <Route path='/404' exact>
          <NotFound/>
        </Route>
        <Redirect to='/404' />
      </Switch>
      <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
