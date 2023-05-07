import { initialCards, validationSettings, buttonEdit, formEdit, buttonAddCard, formAdd } from "../utils/constants.js";

import { openEditWindow, openAddWindow, submitEditProfileForm, submitAddCardForm } from "../utils/utils.js"

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";

const popupFullImage = new PopupWithImage('.popup_image');
popupFullImage.setEventListeners();

const cardsSection = new Section(
    { items: initialCards, renderer: (cardData) => new Card(
        { data: cardData, handleCardClick: popupFullImage.open.bind(popupFullImage) },
        '#cards'
       ).generateNewCard() },
    '.elements__list'
   );
cardsSection.renderElements();

const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
formList.forEach(formElement => {
  const formValidator = new FormValidator(validationSettings, formElement);
  formValidator.enableValidation();
});

buttonEdit.addEventListener('click', openEditWindow);
buttonAddCard.addEventListener('click', openAddWindow);
formEdit.addEventListener('submit', submitEditProfileForm);
formAdd.addEventListener('submit', evt => submitAddCardForm(evt, cardsSection));
