export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._card = this._getTemplateCard();
    this._imageElement = this._card.querySelector('.element__image');
    this._titleElement = this._card.querySelector('.element__text');
    this._likeButton = this._card.querySelector('.element__like-button');
    this._deleteButton = this._card.querySelector('.element__delete-button');

    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._titleElement.textContent = this._name;

    this._setEventListeners();
  }

  getElement() {
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

  _clickDeleteBtn(evt) {
    evt.target.closest('.element').remove();
  }

  _setEventListeners() {
    this._imageElement.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._likeButton.addEventListener('click', this._clickLikeBtn);
    this._deleteButton.addEventListener('click', this._clickDeleteBtn);
  }
}
