import { initialCards, validationSettings, buttonEdit, buttonAddCard } from "../utils/constants.js";

import { submitEditProfileForm, submitAddCardForm } from "../utils/utils.js"

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const popupFullImage = new PopupWithImage('.popup_image');
popupFullImage.setEventListeners();

const getCard = cardData => new Card(
      { data: cardData, handleCardClick: popupFullImage.open.bind(popupFullImage) },
      '#cards'
      );

const cardsSection = new Section(
    { items: initialCards, renderer: cardData => getCard(cardData).generateNewCard() },
    '.elements__list'
   );
cardsSection.renderElements();

const popupProfile = new PopupWithForm('.popup_profile', submitEditProfileForm);
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm('.popup_place', (evt, values) => submitAddCardForm(evt, values, cardsSection));
popupPlace.setEventListeners();

const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
formList.forEach(formElement => {
  const formValidator = new FormValidator(validationSettings, formElement);
  formValidator.enableValidation();
});

buttonEdit.addEventListener('click', popupProfile.open);
buttonAddCard.addEventListener('click', popupPlace.open);
