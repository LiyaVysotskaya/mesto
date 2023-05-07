import { profilePopup, profileName, profileDescription, formEditName, formEditDescription, cardPopup,
formCardName, formCardDescription, imagePopup, fullImage, fullImageCaption, escapeKey } from "../utils/constants.js";

import Card from "../components/Card.js";

// popup opening function
// const openPopup = popup => {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupWindowByEscape);
// }

// popup closing function
// const closePopupWindow = popup => {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupWindowByEscape);
// }

// profile editing opening function
const openEditWindow = () => {
  openPopup(profilePopup);
  formEditName.value = profileName.textContent;
  formEditDescription.value = profileDescription.textContent;
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

// function to create new cards
const createNewCard = cardData => {
  const cardItem = new Card(cardData, '#cards', openFullScreenImage);
  const cardElement = cardItem.generateNewCard();

  return cardElement;
}

// function to add new cards
const submitAddCardForm = (evt, section) => {
  evt.preventDefault();
  section.addItem({ name: formCardName.value, link: formCardDescription.value });
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
// const closePopupWindowByEscape = evt => {
//   if (evt.key === escapeKey) {
//     const openedWindow = document.querySelector('.popup_opened');
//     closePopupWindow(openedWindow);
//   };
// }

// openPopup, closePopupWindow,

export { openEditWindow, openAddWindow, submitEditProfileForm, createNewCard, submitAddCardForm,
openFullScreenImage };
