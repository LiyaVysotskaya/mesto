import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;
    this._fieldset = this._popup.querySelector('.form__fieldset');
    this._inputs = this._fieldset.querySelectorAll('.form__input');
    this.close = this.close.bind(this);
    this._getInputValues = this._getInputValues.bind(this);
    this._submitHandle = this._submitHandle.bind(this);
  }

  setEventListeners() {
    super.setEventListeners();
    this._fieldset.form.addEventListener('submit', this._submitHandle);
  }

  close() {
    this._fieldset.form.reset();
    super.close();
  }

  _submitHandle(evt) {
    this._submitFormFunction(evt, this._getInputValues());
    this.close();
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach(input => {
      const name = input.name;
      const value = input.value;
      values[name] = value;
    });
    return values;
  }
}
