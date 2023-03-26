const form = document.querySelector('.form');

// profile edit variables
const editBtn = document.querySelector('.profile__edit-button');
const closeEditBtn = document.querySelector('.popup__close-button_edit');
const formEdit = document.querySelector('.popup__profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editName = document.querySelector('.form__input_type_name');
const editDescription = document.querySelector('.form__input_type_description');

// profile add-card variables
const addBtn = document.querySelector('.profile__add-button');
const formAdd = document.querySelector('.popup__place');
const closeAddCardBtn = document.querySelector('.popup__close-button_add-card');

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
  openPopup(formAdd);
}

// popup closing function
function closePopupWindow(popupSelector) {
  const popup = document.querySelector(popupSelector);
  popup.classList.remove('popup_opened');
}

// form submission handling function
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileDescription.textContent = editDescription.value;
  closePopupWindow();
}

editBtn.addEventListener('click', openEditWindow);
addBtn.addEventListener('click', openAddWindow);
closeEditBtn.addEventListener('click', ()=>closePopupWindow('.popup__profile'));
closeAddCardBtn.addEventListener('click', ()=>closePopupWindow('.popup__place'));
form.addEventListener('submit', handleFormSubmit);
