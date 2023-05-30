import '../pages/index.css';

import { validationSettings, buttonEditProfile, buttonAddCard, buttonEditAvatar,
  profilePopupSelector, imagePopupSelector, cardAddPopupSelector, avatarPopupSelector, deleteConfirmPopupSelector, templateSelector,
  profileName, profileDescription, profileAvatar, cardsContainerSelector, formValidators, apiSettings } from "../utils/constants.js";

import { handleSubmit } from "../utils/utils.js"

import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupConfirm.js"
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';

const api = new Api(apiSettings);

let userId;
let cardsSection;

const userInfo = new UserInfo({ profileName: profileName, profileDescription: profileDescription, profileAvatar: profileAvatar });

api.getUserData().then(res => {
  userId = res._id;
  userInfo.setUserInfo(res);

  api.getCardsArray()
    .then(res => {
      res.forEach(card => card.myIdentifier = userId);
      cardsSection  = new Section(
        { items: res, renderer: cardData => getCardElement(cardData) },
        cardsContainerSelector
      );
      cardsSection.renderElements();
  })
  .catch(console.error);
})
.catch(console.error);

const popupFullImage = new PopupWithImage(imagePopupSelector);
popupFullImage.setEventListeners();

const getCardElement = cardData => new Card(
      cardData,
      popupFullImage.open.bind(popupFullImage),
      popupConfirmDelete.open.bind(popupConfirmDelete),
      (cardId, successHandle) => api.likeCard(cardId).then(successHandle).catch(console.error),
      (cardId, successHandle) => api.unlikeCard(cardId).then(successHandle).catch(console.error),
      templateSelector
      ).getElement();

const popupConfirmDelete = new PopupConfirm(deleteConfirmPopupSelector, card => {
  handleSubmit(api.deleteCard(card.id)
    .then(card.delete)
    .catch(console.error), popupConfirmDelete);
});
popupConfirmDelete.setEventListeners();

const popupProfile = new PopupWithForm(profilePopupSelector, data => {
  handleSubmit(api.editProfileInfo(data)
    .then(userInfo.setUserInfo)
    .catch(console.error), popupProfile);
});
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm(cardAddPopupSelector, values => {
  handleSubmit(api.addNewCard(values)
    .then(res => cardsSection.addItem({...res, myIdentifier: userId}, false))
    .catch(console.error), popupPlace);
});
popupPlace.setEventListeners();

const popupAvatar = new PopupWithForm(avatarPopupSelector, data => {
  handleSubmit(api.editAvatarImage(data)
    .then(userInfo.setUserInfo)
    .catch(console.error), popupAvatar);
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
