import '../pages/index.css';

import { validationSettings, buttonEditProfile, buttonAddCard, buttonEditAvatar,
  profilePopupSelector, imagePopupSelector, cardAddPopupSelector, avatarPopupSelector, deleteConfirmPopupSelector, templateSelector,
  profileName, profileDescription, profileAvatar, cardsContainerSelector, formValidators, apiSettings, identifier } from "../utils/constants.js";

import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupConfirm.js"
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';

const api = new Api(apiSettings);

const userInfo = new UserInfo({ profileName: profileName, profileDescription: profileDescription, profileAvatar: profileAvatar });

api.getUserData().then(userInfo.setUserInfo)

const popupFullImage = new PopupWithImage(imagePopupSelector);
popupFullImage.setEventListeners();

const getCardElement = cardData => new Card(
      cardData,
      popupFullImage.open.bind(popupFullImage),
      popupConfirmDelete.open.bind(popupConfirmDelete),
      api.likeCard.bind(api),
      api.unlikeCard.bind(api),
      templateSelector
      ).getElement();

let cardsSection;
api.getCardsArray()
  .then(res => {
    res.forEach(card => card.myIdentifier = identifier);
    cardsSection  = new Section(
      { items: res, renderer: cardData => getCardElement(cardData) },
      cardsContainerSelector
    );
    cardsSection.renderElements();
});

const popupConfirmDelete = new PopupConfirm(deleteConfirmPopupSelector, card => api.deleteCard(card.id).then(card.delete));
popupConfirmDelete.setEventListeners();

const popupProfile = new PopupWithForm(profilePopupSelector, data => api.editProfileInfo(data).then(userInfo.setUserInfo));
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm(cardAddPopupSelector, values => {
  api.addNewCard(values)
    .then(res => cardsSection.addItem({...res, myIdentifier: identifier}, false));
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
