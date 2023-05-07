import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupFullImage = this._popup.querySelector('.popup__full-image-image');
    this._popupDescription = this._popup.querySelector('.popup__full-image-caption');
  }

  open(name, link) {
    this._popupFullImage.src = link;
    this._popupFullImage.alt = name;
    this._popupDescription.textContent = name;
    super.open();
  }
}
