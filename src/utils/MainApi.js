import Api from './Api';

class MainApi extends Api {
  constructor({
    url,
    movies,
    user,
    register,
    login,
  }) {
    super({
      url,
      movies,
      user,
      register,
      login,
    });
  }
}

const mainApi = new MainApi({
  url: '/',
  movies: 'movies',
  user: 'users/me',
  register: 'signup',
  login: 'signin',
});

export default mainApi;
