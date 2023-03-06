console.log('Hello');

const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const closeBtn = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.edit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editName = document.querySelector('#profile-name');
const editDescription = document.querySelector('#profile-description');

function openEditWindow() {
  popup.classList.toggle('popup_opened');
  const nameValue = profileName.textContent;
  editName.value = nameValue;
  const descriptionValue = profileDescription.textContent;
  editDescription.value = descriptionValue;
}

function closeEditWindow() {
  popup.classList.toggle('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  const nameValue = editName.value;
  profileName.textContent = nameValue;
  const descriptionValue = editDescription.value;
  profileDescription.textContent = descriptionValue;
  closeEditWindow();
}

editBtn.addEventListener('click', openEditWindow);
closeBtn.addEventListener('click', closeEditWindow);
form.addEventListener('submit', handleFormSubmit);
