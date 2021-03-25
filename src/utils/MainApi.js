import Api from './Api';

class MainApi extends Api {
  constructor({
    url,
    movies,
    cards,
    user,
    register,
    login,
    headers,
  }) {
    super({
      url,
      movies,
      cards,
      user,
      register,
      login,
      headers,
    });
  }
}

const headers = { 'Content-type': 'application/json; charset=UTF-8' };

const mainApi = new MainApi({
  url: 'https://api.interind.students.nomoredomains.monster/',
  cards: 'cards',
  movies: 'movies',
  user: 'users/me',
  register: 'signup',
  login: 'signin',
  headers,
});

export default mainApi;
