import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;
    this._fieldset = this._popup.querySelector('.form__fieldset');
    this._inputs = this._fieldset.querySelectorAll('.form__input');
  }

  setEventListeners() {

  }

  close() {

  }

  _getInputValues() {

  }
}
