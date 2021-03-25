class Api {
  constructor({
    url,
    login,
    user,
    cards,
    movies,
    register,
    headers,
  }) {
    this._url = url;
    this._user = user;
    this._cards = cards;
    this._movies = movies;
    this._login = login;
    this._register = register;
    this._headers = headers;
    this.token = '';
  }

  filterKeys(arg) {
    return Object.fromEntries(Object.entries(arg)
      .filter(([key, value]) => [key, value][1] !== ''));
  }

  _getResponse(res) {
    const status = [200, 201, 400, 401, 409, 500];
    if (status.includes(res.status)) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка api: ${res.status}`));
  }

  register(arg) { // регистрация
    return fetch(`${this._url}${this._register}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ ...this.filterKeys(arg) }),
    }).then(this._getResponse);
  }

  authorizationPost({ password, email }) {
    return fetch(`${this._url}${this._login}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ password, email }),
    }).then(this._getResponse);
  }

  getInfoForUser(token) {
    return fetch(`${this._url}${this._user}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }

  getInfoForMovies(token) {
    return fetch(`${this._url}${this._movies}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }

  getInfoForCards() {
    return fetch(`${this._url}${this._cards}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(this._getResponse);
  }

  getMovies() {
    return fetch(`${this._url}${this._movies}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(this._getResponse);
  }

  updateUserInfo(arg) {
    return fetch(`${this._url}${this._user}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ ...this.filterKeys(arg) }),
    }).then(this._getResponse);
  }

  addCard({ name, link }) {
    return fetch(`${this._url}${this._cards}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._getResponse);
  }

  changeLikeCardStatus(infoId, isLike) {
    const toggleMethod = isLike ? 'PUT' : 'DELETE';
    return fetch(`${this._url}${this._cards}/${infoId}/likes`, {
      method: toggleMethod,

      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(this._getResponse);
  }

  deleteCard(id) {
    return fetch(`${this._url}${this._cards}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(this._getResponse);
  }

  changeSaveMoviesStatus({
    _id,
    id,
    nameRU,
    nameEN,
    director,
    country,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
  }, isSave) {
    const link = `${isSave ? this._movies : `${this._movies}/${_id}`}`;
    const toggleMethod = isSave ? 'POST' : 'DELETE';
    return fetch(`${this._url}${link}`, {
      method: toggleMethod,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: `${isSave ? JSON.stringify({
        nameRU,
        nameEN,
        director,
        country,
        duration,
        year,
        id,
        description,
        image,
        trailerLink,
        thumbnail,
      }) : ''}`,
    }).then(this._getResponse);
  }
}

export default Api;
