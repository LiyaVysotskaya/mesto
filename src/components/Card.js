export default class Card {
  constructor( data, handleCardClick, handleDeleteClick, handleLikeClick, handleUnlikeClick, templateSelector) {
    this.id = data._id;

    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._currentUserId = data.myIdentifier;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._handleUnlikeClick = handleUnlikeClick;
    this._isLiked = data.likes.some(user => user._id === data.myIdentifier);

    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.element__image');
    this._titleElement = this._element.querySelector('.element__text');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._likesElement = this._element.querySelector('.element__like-info');

     this._isLiked
       ? this._likeButton.classList.add('element__like-button_active')
       : this._likeButton.classList.remove('element__like-button_active');

    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._titleElement.textContent = this._name;

    this.delete = this.delete.bind(this);
    this._clickDeleteBtn = this._clickDeleteBtn.bind(this);
    this._clickLikeBtn = this._clickLikeBtn.bind(this);

    this._setLikeCount(data.likes);
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
    const clickHandle = this._isLiked
    ? this._handleUnlikeClick
    : this._handleLikeClick;

    const successHandle = (res) => {
      evt.target.classList.toggle('element__like-button_active');
      this._isLiked = !this._isLiked;
      this._setLikeCount(res.likes);
    }

    clickHandle(this.id, successHandle);
  }

  _clickDeleteBtn() {
    this._handleDeleteClick(this);
  }

  _setLikeCount(likes) {
    this._likesElement.textContent = likes.length;
  }

  _setEventListeners() {
    this._imageElement.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._likeButton.addEventListener('click', this._clickLikeBtn);
    this._deleteButton.addEventListener('click', this._clickDeleteBtn);
  }
}
