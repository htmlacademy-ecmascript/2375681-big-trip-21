import { offersType } from '../mocks/mocks-offers.js';

export default class OffersModel {
  #offers = offersType.slice();

  getPoints() {
    return this.#offers;
  }
}


