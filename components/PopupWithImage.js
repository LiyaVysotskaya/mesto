import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupFullImage = this._popup.querySelector('.popup__full-image-image');
    this._popupDescription = this._popup.querySelector('.popup__full-image-caption');
  }

  open(data) {
    this._popupFullImage.src = data.link;
    this._popupFullImage.alt = data.name;
    this._popupDescription.textContent = data.name;
    super.open();
  }
}
