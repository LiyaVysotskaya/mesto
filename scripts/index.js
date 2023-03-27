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
const fullImgPopup = document.querySelector('.popup__full-image')
const fullImgContainer = document.querySelector('.popup__full-image_content');
const fullImg = document.querySelector('.popup__full-image-image');
const fullImgCaption = document.querySelector('.popup__full-image-caption');
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
  closePopupWindow('.popup__profile');
}

// function to create new cards
function addNewCard(name, link) {
  cardItemImg.src = link;
  cardItemTitle.textContent = name;
  cardItemImg.alt = name;
  const newCardItem = cardItem.cloneNode(true);

  // function to open the image in full screen
  newCardItem.addEventListener('click', function (name, link) {
    openPopup(fullImgPopup);
    fullImg.src = link;
    fullImgCaption.textContent = name;
    fullImg.alt = name;
  });

  // on/off like
  const likeBtn = newCardItem.querySelector('.element__like-button');
  likeBtn.addEventListener('click', clickLikeBtn);

  //card delete function
  const deleteBtn = newCardItem.querySelector('.element__delete-button');
  deleteBtn.addEventListener('click', function () {
    const removeCardItem = deleteBtn.closest('.element');
    removeCardItem.remove();
  });



  cardsContainer.append(newCardItem);

  return newCardItem;
}

// function to add new cards
function handleAddCardFormSubmit (evt) {
  evt.preventDefault();
  cardsContainer.prepend(addNewCard(formCardName.value, formCardDescription.value));
  closePopupWindow('.popup__place');
}

// function to add preinstalled cards
initialCards.map(card => cardsContainer.prepend(addNewCard(card.name, card.link)));

// on/off like function
function clickLikeBtn(e) {
  e.target.classList.toggle('element__like-button_active');
}

editBtn.addEventListener('click', openEditWindow);
addBtn.addEventListener('click', openAddWindow);
closeEditBtn.addEventListener('click', () => closePopupWindow('.popup__profile'));
closeAddCardBtn.addEventListener('click', () => closePopupWindow('.popup__place'));
closeFullImgBtn.addEventListener('click', () => closePopupWindow('.popup__full-image'));
formEdit.addEventListener('submit', handleEditProfileFormSubmit);
formAdd.addEventListener('submit', handleAddCardFormSubmit);
