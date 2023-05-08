import { initialCards, validationSettings, buttonEdit, buttonAddCard, profilePopupSelector } from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const userInfo = new UserInfo({ profileName: '.profile__name', profileDescription: '.profile__description' });

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

const popupProfile = new PopupWithForm(profilePopupSelector, userInfo.setUserInfo);
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm('.popup_place', values => cardsSection.addItem({ name: values['card-name'], link: values['card-source'] }));
popupPlace.setEventListeners();

const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
formList.forEach(formElement => {
  const formValidator = new FormValidator(validationSettings, formElement);
  formValidator.enableValidation();
});

buttonEdit.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});
buttonAddCard.addEventListener('click', popupPlace.open);
