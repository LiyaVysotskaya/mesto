import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
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

  open(caller) {
    super.open();
    this._caller = caller;
  }

  _submitHandle(evt) {
    evt.preventDefault();
    this._submitFormFunction(this._caller);
    this.close();
  }
}
