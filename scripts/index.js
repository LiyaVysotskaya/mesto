const form = document.querySelector('.form');

// profile edit variables
const editBtn = document.querySelector('.profile__edit-button');
const closeEditBtn = document.querySelector('.popup__close-button_edit');
const formEdit = document.querySelector('.popup_profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editName = document.querySelector('.form__input_profile_name');
const editDescription = document.querySelector('.form__input_profile_description');

// add-card variables
const addBtn = document.querySelector('.profile__add-button');
const formAdd = document.querySelector('.popup_place');
const closeAddCardBtn = document.querySelector('.popup__close-button_add-card');
const cardsContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#cards').content;
const cardItem = cardTemplate.querySelector('.element');
const formCardName = document.querySelector('.form__input_place_name');
const formCardDescription = document.querySelector('.form__input_place_description');
// preinstalled cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// full-image variables
const fullImgPopup = document.querySelector('.popup_full-image')
const fullImgContainer = document.querySelector('.popup_full-image-content');
const closeFullImgBtn = document.querySelector('.popup__close-button_full-image');

// popup opening function
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// profile editing opening function
function openEditWindow() {
  openPopup(formEdit);
  editName.value = profileName.textContent;
  editDescription.value = profileDescription.textContent;
}

// function to open adding cards
function openAddWindow() {
  formCardName.value = null;
  formCardDescription.value = null;
  openPopup(formAdd);
}

// popup closing function
function closePopupWindow(popupSelector) {
  const popup = document.querySelector(popupSelector);
  popup.classList.remove('popup_opened');
}

// form submission handling function
function handleEditProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileDescription.textContent = editDescription.value;
  closePopupWindow('.popup_profile');
}

// function to create new cards
function addNewCard(name, link) {
  const newCardItem = cardItem.cloneNode(true);

  const imgEl = newCardItem.querySelector('.element__image');
  const titleEl = newCardItem.querySelector('.element__text');
  const likeBtn = newCardItem.querySelector('.element__like-button');
  const deleteBtn = newCardItem.querySelector('.element__delete-button');

  // fill image
  imgEl.src = link;
  imgEl.alt = name;
  imgEl.addEventListener('click', () => openFullScreenImage(name, link));

  // fill title
  titleEl.textContent = name;

  // add on/off like listener
  likeBtn.addEventListener('click', clickLikeBtn);

  // add delete listener
  deleteBtn.addEventListener('click', clickDeleteBtn);

  cardsContainer.prepend(newCardItem);

  return newCardItem;
}

// function to add new cards
function handleAddCardFormSubmit (evt) {
  evt.preventDefault();
  addNewCard(formCardName.value, formCardDescription.value);
  closePopupWindow('.popup_place');
}

// function to add preinstalled cards
initialCards.map(card => addNewCard(card.name, card.link));

// on/off like function
function clickLikeBtn(e) {
  e.target.classList.toggle('element__like-button_active');
}

//card delete function
function clickDeleteBtn(e) {
  const removeCardItem = e.target.closest('.element');
  removeCardItem.remove();
}

// function to open the image in full screen
function openFullScreenImage(name, link) {
  openPopup(fullImgPopup);
  const fullImg = document.querySelector('.popup__full-image-image');
  const fullImgCaption = document.querySelector('.popup__full-image-caption');
  fullImg.src = link;
  fullImgCaption.textContent = name;
  fullImg.alt = name;
};

editBtn.addEventListener('click', openEditWindow);
addBtn.addEventListener('click', openAddWindow);
closeEditBtn.addEventListener('click', () => closePopupWindow('.popup_profile'));
closeAddCardBtn.addEventListener('click', () => closePopupWindow('.popup_place'));
closeFullImgBtn.addEventListener('click', () => closePopupWindow('.popup_full-image'));
formEdit.addEventListener('submit', handleEditProfileFormSubmit);
formAdd.addEventListener('submit', handleAddCardFormSubmit);
