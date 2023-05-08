import { profileName, profileDescription, formCardName, formCardDescription } from "../utils/constants.js";

const submitEditProfileForm = (evt, values) => {
  evt.preventDefault();
  profileName.textContent = values['profile-name'];
  profileDescription.textContent = values['profile-description'];
}

const submitAddCardForm = (evt, values, section) => {
  evt.preventDefault();
  section.addItem({ name: values['card-name'], link: values['card-source'] });
}

export { submitEditProfileForm, submitAddCardForm };
