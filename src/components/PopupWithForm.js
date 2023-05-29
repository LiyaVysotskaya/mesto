import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;
    this._fieldset = this._popup.querySelector('.form__fieldset');
    this._submitButton = this._popup.querySelector('.form__button');
    this._inputs = this._fieldset.querySelectorAll('.form__input');

    this._submitButtonDefaulText = this._submitButton.textContent;

    this.close = this.close.bind(this);
    this._getInputValues = this._getInputValues.bind(this);
    this._submitHandle = this._submitHandle.bind(this);
    this.setInputValues = this.setInputValues.bind(this);
  }

  setEventListeners() {
    super.setEventListeners();
    this._fieldset.form.addEventListener('submit', this._submitHandle);
  }

  close() {
    this._fieldset.form.reset();
    super.close();
  }

  setInputValues(values) {
    this._inputs.forEach(input => {
      input.value = values[input.name];
    })
  }

  renderLoading(isLoading, loadingText) {
    if(isLoading){
      this._submitButton.classList.add('form__button_inactive');
      this._submitButton.textContent = loadingText;
    }else{
      this._submitButton.classList.remove('form__button_inactive');
      this._submitButton.textContent = this._submitButtonDefaulText;
    }
  }

  _submitHandle(evt) {
    evt.preventDefault();
    this._submitFormFunction(this._getInputValues());
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
