export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderElements() {
    this._items.forEach(item => this.addItem(item, true));
  }

  addItem(item, addToEnd) {
    addToEnd
      ? this._container.append(this._renderer(item))
      : this._container.prepend(this._renderer(item));
  }
}
