export default class Api {
  constructor(settings) {
    this._url = settings.baseUrl;
    this._headers = settings.headers;
    this._token = settings.headers.authorization;
    this._body = settings.body;
    this._contentType = settings.headers.contentType;
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  getCardsArray() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  editProfileInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name:  data['profile-name'],
        about: data['profile-description']
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }



}
