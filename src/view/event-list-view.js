import AbstractView from '../framework/view/abstract-view.js';

function createTemplate() {
  return `
  <ul class="trip-events__list">
  </ul>
  `;
}

export default class ListView extends AbstractView {

  get template() {
    return createTemplate();
  }
}
