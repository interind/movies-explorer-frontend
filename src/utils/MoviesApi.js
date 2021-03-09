import Api from './Api';

class MoviesApi extends Api {
  constructor({ url, movies, headers }) {
    super({ url, movies, headers });
  }
}
const headers = { 'Content-type': 'application/json; charset=UTF-8' };
const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/',
  movies: 'beatfilm-movies',
  headers,
});

export default moviesApi;
