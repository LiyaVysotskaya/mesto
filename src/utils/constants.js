const arkhyzImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
const chelyabinskImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
const ivanovoImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
const camchatkaImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
const holmogorskyiImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
const baikalImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';

export const initialCards = [
  { name: 'Архыз', link: arkhyzImage },
  { name: 'Челябинская область', link: chelyabinskImage },
  { name: 'Иваново',  link: ivanovoImage },
  { name: 'Камчатка', link: camchatkaImage },
  { name: 'Холмогорский район', link: holmogorskyiImage },
  { name: 'Байкал', link: baikalImage }
];

export const validationSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

export const formValidators = {};

export const profilePopupSelector = '.popup_profile';
export const cardAddPopupSelector = '.popup_place';
export const imagePopupSelector = '.popup_image';
export const templateSelector = '#cards';
export const cardsContainerSelector = '.elements__list';
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
export const formCardName = 'card-name';
export const formCardDescription = 'card-source';

export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonAddCard = document.querySelector('.profile__add-button');
export const profilePopup = document.querySelector(profilePopupSelector);
export const cardAddPopup = document.querySelector(cardAddPopupSelector);
export const formEditProfile = profilePopup.querySelector('.form');
export const formAddCard = cardAddPopup.querySelector('.form');
