export default class FormValidator {
  constructor(settings, elementValidation) {
    this._elementValidation = elementValidation;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._inputList = Array.from(this._elementValidation.querySelectorAll(this._inputSelector));
    this._buttonElement = this._elementValidation.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners = () => {
    this._toggleButtonState();
    this._elementValidation.addEventListener('reset', () => {
      this._inputList.forEach(inputElement => this._hideInputError(inputElement)); // очищаем возможные ошибки у старых значений input'ов
      this._disableButton();
    });

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _disableButton = () => {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableButton = () => {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _checkValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._elementValidation.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._elementValidation.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
}
