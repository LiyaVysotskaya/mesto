export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose(this._popupSelector));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose(this._popupSelector));
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
        this.close(this._popup);
      }
    });
  }

  _handleEscClose(evt) {
    if (evt.key === escapeKey) {
      this.close(this._popupSelector);
    };
  }
}
