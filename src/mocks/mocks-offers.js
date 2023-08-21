import { getRandomArrayElement, getRandomInteger } from '../utils';
import { POINTS_TYPES } from './mocks-point';


const MIN_OFFER_PRICE = 20;
const MAX_OFFER_PRICE = 250;

const MIN_OFFERS = 3;
const MAX_OFFERS = 8;

const OFFERS_COUNT = 10;

const getOffer = (index) => ({
  id: index + 1,
  price: getRandomInteger(MIN_OFFER_PRICE, MAX_OFFER_PRICE)
});

const createOffers = () => ({
  type: getRandomArrayElement(POINTS_TYPES),
  offers: Array.from({length: getRandomInteger(MIN_OFFERS, MAX_OFFERS)}, (_, index) => getOffer(index))
});

const offersType = Array.from({length: OFFERS_COUNT}, createOffers);

const getRandomOffer = () => {
  const randomOffer = getRandomArrayElement(offersType).offers;

  const ids = [];
  const lengthOfOffer = getRandomInteger(1, randomOffer.length);
  while (ids.length < lengthOfOffer) {
    const currentElement = getRandomInteger(1, randomOffer.length);
    if(!ids.includes(currentElement)) {
      ids.push(currentElement);
    }
  }
  return ids;

};

export { createOffers, getRandomOffer, offersType, OFFERS_COUNT };
