import { initialCards, validationSettings, buttonEdit, formEdit, buttonAddCard, formAdd, popupList } from "../utils/constants.js";

import { openEditWindow, openAddWindow, submitEditProfileForm, createNewCard, submitAddCardForm } from "../utils/utils.js"

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";

const cardsSection = new Section({ items: initialCards, renderer: createNewCard }, '.elements__list');
cardsSection.renderElements();

const popupFullImage = new PopupWithImage('.popup_image');

popupList.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      closePopupWindow(popup);
    }
  });
});

const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
formList.forEach(formElement => {
  const formValidator = new FormValidator(validationSettings, formElement);
  formValidator.enableValidation();
});

buttonEdit.addEventListener('click', openEditWindow);
buttonAddCard.addEventListener('click', openAddWindow);
formEdit.addEventListener('submit', submitEditProfileForm);
formAdd.addEventListener('submit', evt => submitAddCardForm(evt, cardsSection));
