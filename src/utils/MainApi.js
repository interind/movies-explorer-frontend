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

const mainApi = new MainApi({
  url: '/',
  movies: 'movies',
  user: 'users/me',
  register: 'signup',
  login: 'signin',
  headers: false,
});

export default mainApi;
