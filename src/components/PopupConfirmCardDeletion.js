import Popup from "./Popup.js";

export default class PopupConfirmCardDeletion extends Popup {
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;
    this._form = this._popup.querySelector('.form');

    this._submitHandle = this._submitHandle.bind(this);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitHandle);
  }

  open(card) {
    super.open();
    this._card = card;
  }

  _submitHandle(evt) {
    evt.preventDefault();
    this._submitFormFunction(this._card);
    this.close();
  }
}
