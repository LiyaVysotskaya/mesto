import Popup from "./Popup.js";

export default class PopupConfirmCardDeletion extends Popup {
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;
  }

  setEventListeners() {
    super.setEventListeners();

  }

  open(item) {
    this._item = item;
    super.open();
  }
}
