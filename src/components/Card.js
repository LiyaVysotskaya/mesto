export default class Card {
  constructor({ data, handleCardClick, popupConfirmDelete }, templateSelector) {
    // console.log(data)
    this.id = data._id;

    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._currentUserId = data.myIdentifier;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._popupConfirmDelete = popupConfirmDelete;
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.element__image');
    this._titleElement = this._element.querySelector('.element__text');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._likesElement = this._element.querySelector('.element__like-info');

    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._titleElement.textContent = this._name;
    this._likesElement.textContent = data.likes.length;

    this.delete = this.delete.bind(this);
    this._clickDeleteBtn = this._clickDeleteBtn.bind(this);

    this._setEventListeners();
  }

  delete() {
    this._element.remove();
  }

  getElement() {
    if (this._ownerId !== this._currentUserId) {
      this._deleteButton.remove();
    }
    return this._element;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _clickLikeBtn(evt) {
    evt.target.classList.toggle('element__like-button_active');
  }

  _clickDeleteBtn() {
    this._popupConfirmDelete.open(this);
  }

  _setEventListeners() {
    this._imageElement.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._likeButton.addEventListener('click', this._clickLikeBtn);
    this._deleteButton.addEventListener('click', this._clickDeleteBtn);
  }
}
