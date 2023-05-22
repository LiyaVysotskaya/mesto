import '../pages/index.css';

import { initialCards, validationSettings, buttonEditProfile, buttonAddCard, buttonEditAvatar,
  profilePopupSelector, imagePopupSelector, cardAddPopupSelector, avatarPopupSelector, templateSelector,
  profileName, profileDescription, cardsContainerSelector, formCardName,
  formCardDescription, formValidators, formAvatarImage, avatarImage } from "../utils/constants.js";

import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const userInfo = new UserInfo({ profileName: profileName, profileDescription: profileDescription });

const popupFullImage = new PopupWithImage(imagePopupSelector);
popupFullImage.setEventListeners();

const getCardElement = cardData => new Card(
      { data: cardData, handleCardClick: popupFullImage.open.bind(popupFullImage) },
      templateSelector
      ).getElement();

const cardsSection = new Section(
    { items: initialCards, renderer: cardData => getCardElement(cardData) },
    cardsContainerSelector
   );
cardsSection.renderElements();

const popupProfile = new PopupWithForm(profilePopupSelector, userInfo.setUserInfo);
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm(cardAddPopupSelector, values => cardsSection.addItem({ name: values[formCardName], link: values[formCardDescription] }));
popupPlace.setEventListeners();

const popupAvatar = new PopupWithForm(avatarPopupSelector, data => {
  avatarImage.src = data[formAvatarImage];
});
popupAvatar.setEventListeners();

const enableValidation = validationSettings => {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationSettings, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationSettings);

buttonEditProfile.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
})
buttonAddCard.addEventListener('click', popupPlace.open);
buttonEditAvatar.addEventListener('click', popupAvatar.open);
