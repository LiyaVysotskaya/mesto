// const submitEditProfileForm = (evt) => {
//   evt.preventDefault();
//   userInfo.setUserInfo(popupProfile._getInputValues());
  // profileName.textContent = values['profile-name'];
  // profileDescription.textContent = values['profile-description'];
// }

const submitAddCardForm = (values, section) => {
  section.addItem({ name: values['card-name'], link: values['card-source'] });
}

export { submitAddCardForm };
