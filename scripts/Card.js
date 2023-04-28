export class Card {
  constructor(data, templateSelector, onImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._onImageClick = onImageClick;
  }

  generateNewCard() {
    const card = this._getTemplateCard();

    const imageElement = card.querySelector('.element__image');
    const titleElement = card.querySelector('.element__text');
    const likeButton = card.querySelector('.element__like-button');
    const deleteButton = card.querySelector('.element__delete-button');

    imageElement.src = this._link;
    imageElement.alt = this._name;
    titleElement.textContent = this._name;

    this._setEventListeners(imageElement, likeButton, deleteButton);

    return card;
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

  _setEventListeners(imageElement, likeButton, deleteButton) {
    imageElement.addEventListener('click', () => this._onImageClick(this._name, this._link));
    likeButton.addEventListener('click', this._clickLikeBtn);
    deleteButton.addEventListener('click', this._clickDeleteBtn);
  }
}
