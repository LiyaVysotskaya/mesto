export class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._title = data.title;
    this._link = data.link;
  }

  _getTemplate() {
    const templateElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

      this._template = templateElement;
  }


}
