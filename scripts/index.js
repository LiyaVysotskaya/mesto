const form = document.querySelector('.form');

// profile edit variables
const editBtn = document.querySelector('.profile__edit-button');
const closeEditBtn = document.querySelector('.popup__close-button_edit');
const formEdit = document.querySelector('.popup__profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editName = document.querySelector('.form__input_profile_name');
const editDescription = document.querySelector('.form__input_profile_description');

// add-card variables
const addBtn = document.querySelector('.profile__add-button');
const formAdd = document.querySelector('.popup__place');
const closeAddCardBtn = document.querySelector('.popup__close-button_add-card');
const cardsContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#cards').content;
const cardItem = cardTemplate.querySelector('.element');
const cardItemImg = cardTemplate.querySelector('.element__image');
const cardItemBasement = cardTemplate.querySelector('.element__basement');
const cardItemTitle = cardTemplate.querySelector('.element__text');
const likeBtn = cardTemplate.querySelector('.element__like-button');
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
  closePopupWindow('.popup__profile');
}

// function to create new cards
function addNewCard(name, link) {
  cardItemImg.src = link;
  cardItemTitle.textContent = name;
  cardItemImg.alt = name;
  const newCardItem = cardItem.cloneNode(true);
  cardsContainer.append(newCardItem);

  return newCardItem;
}

// function to add new cards
function handleAddCardFormSubmit (evt) {
  evt.preventDefault();
  cardsContainer.append(addNewCard(formCardName.value, formCardDescription.value));
  closePopupWindow('.popup__place');
}

// function to add preinstalled cards
initialCards.map(card => cardsContainer.append(addNewCard(card.name, card.link)));

// on/off like function
function clickLikeBtn(e) {
  e.target.classList.toggle('.element__like-button_active');
}

editBtn.addEventListener('click', openEditWindow);
addBtn.addEventListener('click', openAddWindow);
closeEditBtn.addEventListener('click', () => closePopupWindow('.popup__profile'));
closeAddCardBtn.addEventListener('click', () => closePopupWindow('.popup__place'));
formEdit.addEventListener('submit', handleEditProfileFormSubmit);
formAdd.addEventListener('submit', handleAddCardFormSubmit);
likeBtn.addEventListener('click', clickLikeBtn);
