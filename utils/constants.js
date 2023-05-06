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

const validationSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

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

export { initialCards, validationSettings, profilePopup, buttonEdit, formEdit, profileName, profileDescription, formEditName, formEditDescription,
cardPopup, buttonAddCard, formAdd, cardsContainer, formCardName, formCardDescription, imagePopup, fullImage, fullImageCaption,
escapeKey, popupList };
