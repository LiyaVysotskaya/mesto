import Popup from "./Popup.js";

export default class PopupConfirmCardDeletion extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');

    this._submitHandle = this._submitHandle.bind(this);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitHandle);
  }

  open(submitFunction) {
    super.open();
    this._submitFormFunction = submitFunction;
  }

  _submitHandle(evt) {
    evt.preventDefault();
    this._submitFormFunction();
    this.close();
  }
}
