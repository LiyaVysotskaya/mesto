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
      .then(this._then)
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
    .then(this._then)
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
    .then(this._then)
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  editAvatarImage(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data['avatar-image']
      })
    })
    .then(this._then)
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards `, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data['card-name'],
        link: data['card-source']
      })
    })
    .then(this._then)
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  likeCard(data) {
    return fetch(`${this._url}/cards/${data._id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._then)
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  unlikeCard(data) {
    return fetch(`${this._url}/cards/${data._id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._then)
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }

  _then(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

}
