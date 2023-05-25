export default class Card {
  constructor({ data, handleCardClick, popupConfirmDelete }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardOwnerid = data.owner._id;
    this._id = 'e4a24a7ddd17785f2e38c891';
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._popupConfirmDelete = popupConfirmDelete;
    this._card = this._getTemplateCard();
    this._imageElement = this._card.querySelector('.element__image');
    this._titleElement = this._card.querySelector('.element__text');
    this._likeButton = this._card.querySelector('.element__like-button');
    this._deleteButton = this._card.querySelector('.element__delete-button');
    this._likesElement = this._card.querySelector('.element__like-info');

    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._titleElement.textContent = this._name;
    this._likesElement.textContent = data.likes.length;

    this._clickDeleteBtn = this._clickDeleteBtn.bind(this);
    this._deleteCard = this._deleteCard.bind(this);

    this._setEventListeners();
  }

  getElement() {
    if (this._cardOwnerid != this._id) {
      this._deleteButton.remove();
    }
    return this._card;
  }

  _getTemplateCard() {
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
    this._popupConfirmDelete.open(this._deleteCard);
  }

  _deleteCard() {
    this._card.remove();
  }

  _setEventListeners() {
    this._imageElement.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._likeButton.addEventListener('click', this._clickLikeBtn);
    this._deleteButton.addEventListener('click', this._clickDeleteBtn);
  }
}
