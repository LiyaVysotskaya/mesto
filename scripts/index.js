// profile edit variables
const profilePopup = document.querySelector('.popup_profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseProfileEdit = document.querySelector('.popup__close-button_edit');
const formEdit = document.querySelector('.popup_profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formEditName = document.querySelector('.form__input_profile_name');
const formEditDescription = document.querySelector('.form__input_profile_description');

// add-card variables
const cardPopup = document.querySelector('.popup_place');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonClosePopupCard = document.querySelector('.popup__close-button_add-card');
const formAdd = document.querySelector('.popup_place');
const cardsContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#cards').content;
const cardItem = cardTemplate.querySelector('.element');
const formCardName = document.querySelector('.form__input_place_name');
const formCardDescription = document.querySelector('.form__input_place_description');

// full-image variables
const imagePopup = document.querySelector('.popup_image');
const buttonCloseFullImage = document.querySelector('.popup__close-button_full-image');
const fullImage = document.querySelector('.popup__full-image-image');
const fullImageCaption = document.querySelector('.popup__full-image-caption');

// popup close function by esc variables
const escapeKey = "Escape";

// popup close function by overlay variables
const popupList = document.querySelectorAll('.popup');

// popup opening function
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWindowByEscape);
}

// popup closing function
function closePopupWindow(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWindowByEscape);
}

// profile editing opening function
function openEditWindow() {
  openPopup(formEdit);
  formEditName.value = profileName.textContent;
  formEditDescription.value = profileDescription.textContent;
}

// function to open adding cards
function openAddWindow() {
  formCardName.value = null;
  formCardDescription.value = null;
  openPopup(formAdd);
}

// form submission handling function
function handleEditProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = formEditName.value;
  profileDescription.textContent = formEditDescription.value;
  closePopupWindow(profilePopup);
}

// function to create new cards
function createNewCard(name, link) {
  const newCardItem = cardItem.cloneNode(true);

  const imageElement = newCardItem.querySelector('.element__image');
  const titleElement = newCardItem.querySelector('.element__text');
  const likeButton = newCardItem.querySelector('.element__like-button');
  const deleteButton = newCardItem.querySelector('.element__delete-button');

  // fill image
  imageElement.src = link;
  imageElement.alt = name;
  imageElement.addEventListener('click', () => openFullScreenImage(name, link));

  // fill title
  titleElement.textContent = name;

  // add on/off like listener
  likeButton.addEventListener('click', clickLikeBtn);

  // add delete listener
  deleteButton.addEventListener('click', clickDeleteBtn);

  return newCardItem;
}

// function to add new cards
function handleAddCardFormSubmit (evt) {
  evt.preventDefault();
  cardsContainer.prepend(createNewCard(formCardName.value, formCardDescription.value));
  closePopupWindow(cardPopup);
}

// function to add preinstalled cards
initialCards.forEach(card => cardsContainer.prepend(createNewCard(card.name, card.link)));

// on/off like function
function clickLikeBtn(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

//card delete function
function clickDeleteBtn(evt) {
  const removeCardItem = evt.target.closest('.element');
  removeCardItem.remove();
}

// function to open the image in full screen
function openFullScreenImage(name, link) {
  openPopup(imagePopup);
  fullImage.src = link;
  fullImageCaption.textContent = name;
  fullImage.alt = name;
}

// popup close function by esc
function closePopupWindowByEscape(evt) {
  if (evt.key === escapeKey) {
    const openedWindow = document.querySelector('.popup_opened');
    closePopupWindow(openedWindow);
  };
}

// popup close function by overlay click
function closePopupWindowByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const openedWindow = document.querySelector('.popup_opened');
    closePopupWindow(openedWindow);
  }
}

buttonEdit.addEventListener('click', openEditWindow);
buttonAddCard.addEventListener('click', openAddWindow);
buttonCloseProfileEdit.addEventListener('click', () => closePopupWindow(profilePopup));
buttonClosePopupCard.addEventListener('click', () => closePopupWindow(cardPopup));
buttonCloseFullImage.addEventListener('click', () => closePopupWindow(imagePopup));
formEdit.addEventListener('submit', handleEditProfileFormSubmit);
formAdd.addEventListener('submit', handleAddCardFormSubmit);
popupList.forEach(popupElement => popupElement.addEventListener('click', closePopupWindowByOverlay));
