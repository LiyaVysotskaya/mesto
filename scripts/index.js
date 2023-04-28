import { initialCards, validationSettings } from "./data.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// profile edit variables
const profilePopup = document.querySelector('.popup_profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const formEdit = document.forms['edit-profile-info'];
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formEditName = document.querySelector('.form__input_profile_name');
const formEditDescription = document.querySelector('.form__input_profile_description');

// add-card variables
const cardPopup = document.querySelector('.popup_place');
const buttonAddCard = document.querySelector('.profile__add-button');
const formAdd = document.forms['add-new-card'];
const cardsContainer = document.querySelector('.elements__list');
const formCardName = document.querySelector('.form__input_place_name');
const formCardDescription = document.querySelector('.form__input_place_description');

// full-image variables
const imagePopup = document.querySelector('.popup_image');
const fullImage = document.querySelector('.popup__full-image-image');
const fullImageCaption = document.querySelector('.popup__full-image-caption');

// popup close function by esc variables
const escapeKey = "Escape";

// popup close function by overlay variables
const popupList = document.querySelectorAll('.popup');

// popup opening function
const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWindowByEscape);
}

// popup closing function
const closePopupWindow = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWindowByEscape);
}

// profile editing opening function
const openEditWindow = () => {
  formEdit.reset();   // генерируем событие для очистки ошибок у полей
  formEditName.value = profileName.textContent;
  formEditDescription.value = profileDescription.textContent;
  openPopup(profilePopup);
}

// function to open adding cards
const openAddWindow = () => {
  openPopup(cardPopup);
}

// form submission handling function
const submitEditProfileForm = evt => {
  evt.preventDefault();
  profileName.textContent = formEditName.value;
  profileDescription.textContent = formEditDescription.value;
  closePopupWindow(profilePopup);
}

// function to add new cards
const appendNewCard = (cardData) => {
  const cardItem = new Card(cardData, '#cards', openFullScreenImage);
  const cardElement = cardItem.generateNewCard();

  cardsContainer.prepend(cardElement);
}

// function to add new cards
const submitAddCardForm = evt => {
  evt.preventDefault();
  appendNewCard({ name: formCardName.value, link: formCardDescription.value });
  closePopupWindow(cardPopup);
  evt.target.reset();
}

// function to open the image in full screen
const openFullScreenImage = (name, link) => {
  fullImage.src = link;
  fullImageCaption.textContent = name;
  fullImage.alt = name;
  openPopup(imagePopup);
}

// popup close function by esc
const closePopupWindowByEscape = evt => {
  if (evt.key === escapeKey) {
    const openedWindow = document.querySelector('.popup_opened');
    closePopupWindow(openedWindow);
  };
}

initialCards.forEach(appendNewCard);

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
formAdd.addEventListener('submit', submitAddCardForm);
