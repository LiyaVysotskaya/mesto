import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;
    this._form = this._popup.querySelector('.form');
    this._submitButton = this._popup.querySelector('.form__button');

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
    this._submitFormFunction(this._caller);
  }
}
