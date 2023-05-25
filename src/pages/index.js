import '../pages/index.css';

import { validationSettings, buttonEditProfile, buttonAddCard, buttonEditAvatar,
  profilePopupSelector, imagePopupSelector, cardAddPopupSelector, avatarPopupSelector, deleteConfirmPopupSelector, templateSelector,
  profileName, profileDescription, profileAvatar, cardsContainerSelector, formCardName,
  formCardDescription, formValidators, apiSettings, identifier, buttonDeleteCard } from "../utils/constants.js";

import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirmCardDeletion from "../components/PopupConfirmCardDeletion.js"
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';

const api = new Api(apiSettings);

const userInfo = new UserInfo({ profileName: profileName, profileDescription: profileDescription, profileAvatar: profileAvatar });

api.getUserData().then(userInfo.setUserInfo)

const popupFullImage = new PopupWithImage(imagePopupSelector);
popupFullImage.setEventListeners();

const popupConfirmDelete = new PopupConfirmCardDeletion(deleteConfirmPopupSelector);
popupConfirmDelete.setEventListeners();

const getCardElement = cardData => new Card(
      { data: cardData, handleCardClick: popupFullImage.open.bind(popupFullImage), popupConfirmDelete: popupConfirmDelete },
      templateSelector
      ).getElement();

let cardsSection;
api.getCardsArray()
  .then(res => {
    cardsSection  = new Section(
      { items: res, renderer: cardData => getCardElement(cardData) },
      cardsContainerSelector
    );
    cardsSection.renderElements();
});

const popupProfile = new PopupWithForm(profilePopupSelector, data => api.editProfileInfo(data).then(userInfo.setUserInfo));
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm(cardAddPopupSelector, values => {
  api.addNewCard(values)
    .then( () => cardsSection.addItem({ name: values[formCardName], link: values[formCardDescription] }))
});
popupPlace.setEventListeners();

const popupAvatar = new PopupWithForm(avatarPopupSelector, data => api.editAvatarImage(data).then(userInfo.setUserInfo));
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
