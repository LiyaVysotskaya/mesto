const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const closeBtn = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.edit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editName = document.querySelector('.edit__input_profile_name');
const editDescription = document.querySelector('.edit__input_profile_description');

function openEditWindow() {
  popup.classList.add('popup_opened');
  editName.value = profileName.textContent;
  editDescription.value = profileDescription.textContent;
}

function closeEditWindow() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileDescription.textContent = editDescription.value;
  closeEditWindow();
}

editBtn.addEventListener('click', openEditWindow);
closeBtn.addEventListener('click', closeEditWindow);
form.addEventListener('submit', handleFormSubmit);
