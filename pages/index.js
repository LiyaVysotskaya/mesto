import { initialCards, validationSettings, buttonEditProfile, buttonAddCard, profilePopupSelector, imagePopupSelector, cardAddPopupSelector,
  templateSelector, profileName, profileDescription, cardsContainerSelector, formCardName, formCardDescription, formList } from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const userInfo = new UserInfo({ profileName: profileName, profileDescription: profileDescription });

const popupFullImage = new PopupWithImage(imagePopupSelector);
popupFullImage.setEventListeners();

const getCard = cardData => new Card(
      { data: cardData, handleCardClick: popupFullImage.open.bind(popupFullImage) },
      templateSelector
      );

const cardsSection = new Section(
    { items: initialCards, renderer: cardData => getCard(cardData).generateNewCard() },
    cardsContainerSelector
   );
cardsSection.renderElements();

const popupProfile = new PopupWithForm(profilePopupSelector, userInfo.setUserInfo);
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm(cardAddPopupSelector, values => cardsSection.addItem({ name: values[formCardName], link: values[formCardDescription] }));
popupPlace.setEventListeners();

formList.forEach(formElement => {
  const formValidator = new FormValidator(validationSettings, formElement);
  formValidator.enableValidation();
})

buttonEditProfile.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
})
buttonAddCard.addEventListener('click', popupPlace.open)
