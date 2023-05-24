export default class Api {
  constructor(settings) {
    this._url = settings.baseUrl;
    this._headers = settings.headers;
    this._token = settings.headers.authorization;
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


}
