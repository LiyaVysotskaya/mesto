import { profilePopup, profileName, profileDescription, formEditName, formEditDescription, cardPopup,
formCardName, formCardDescription } from "../utils/constants.js";

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

// function to add new cards
const submitAddCardForm = (evt, section) => {
  evt.preventDefault();
  section.addItem({ name: formCardName.value, link: formCardDescription.value });
  closePopupWindow(cardPopup);
  evt.target.reset();
}

export { openEditWindow, openAddWindow, submitEditProfileForm, submitAddCardForm };
