export const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'a107eb49-22ca-4876-bbd0-47e31c345082',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  })
}

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
export const avatarPopupSelector = '.popup_avatar';
export const deleteConfirmPopupSelector = '.popup_delete-card';
export const templateSelector = '#cards';
export const cardsContainerSelector = '.elements__list';
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
export const profileAvatar = '.profile__image';

export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonAddCard = document.querySelector('.profile__add-button');
export const buttonEditAvatar = document.querySelector('.profile__avatar-button');
export const profilePopup = document.querySelector(profilePopupSelector);
export const cardAddPopup = document.querySelector(cardAddPopupSelector);
