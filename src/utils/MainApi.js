import Api from './Api';

class MainApi extends Api {
  constructor({
    url,
    movies,
    user,
    register,
    login,
    headers,
  }) {
    super({
      url,
      movies,
      user,
      register,
      login,
      headers,
    });
  }
}

const headers = { 'Content-type': 'application/json; charset=UTF-8' };

const mainApi = new MainApi({
  url: '/',
  movies: 'movies',
  user: 'users/me',
  register: 'signup',
  login: 'signin',
  headers,
});

export default mainApi;
