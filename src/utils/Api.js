class Api {
  constructor({
    url,
    login,
    user,
    movies,
    register,
    headers,
  }) {
    this._url = url;
    this._user = user;
    this._movies = movies;
    this._login = login;
    this._register = register;
    this.token = localStorage.getItem('jwt');
    this._headers = !headers ? {
      authorization: `Bearer ${this.token}`,
      'Content-type': 'application/json; charset=UTF-8',
    } : headers;
  }

  filterKeys(arg) {
    return Object.fromEntries(Object.entries(arg)
      .filter(([key, value]) => [key, value][1] !== ''));
  }

  _getResponse(res) {
    const status = [200, 201, 400, 401, 409];
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

  getInfoForUser() {
    return fetch(`${this._url}${this._user}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponse);
  }

  getInfoForMovies() {
    return fetch(`${this._url}${this._movies}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponse);
  }

  updateUserInfo(arg) {
    return fetch(`${this._url}${this._user}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ ...this.filterKeys(arg) }),
    }).then(this._getResponse);
  }

  changeSaveMoviesStatus(infoId, isSave) {
    const toggleMethod = isSave ? 'PUT' : 'DELETE';
    return fetch(`${this._url}${this._movies}/${infoId}/likes`, {
      method: toggleMethod,
      headers: this._headers,
    }).then(this._getResponse);
  }
}

export default Api;
