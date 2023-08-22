import { destinations} from '../mocks/mocks-destinations';

export default class DestinationsModel {
  #destination = destinations.slice();

  getPoints() {
    return this.#destination;
  }
}
