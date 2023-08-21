import { getRandomArrayElement, getRandomInteger, getRandomElementsArray} from '../utils.js';

const CITYES = ['Amsterdam', 'Shachty', 'Taganrog', 'Rome', 'Rostov', 'Moscow'];
const CITYES_DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. ',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
  'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus. ',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis.',
];

const MIN_DESCRIPTION = 1;
const MAX_DESCRIPTION = 3;

const MIN_PICTURES = 2;
const MAX_PICTURES = 5;

const DESTINATION_COUNT = 5;

const getRandomPictures = () => ({

  src: `https://loremflickr.com/248/152?random=${getRandomInteger(1, 100)}`,
  description: getRandomArrayElement(CITYES_DESCRIPTIONS)

});

const createDestination = (index) => ({
  id: index + 1,
  description: getRandomElementsArray(CITYES_DESCRIPTIONS, getRandomInteger(MIN_DESCRIPTION, MAX_DESCRIPTION)),
  name: getRandomArrayElement(CITYES),
  pictures: Array.from({length: getRandomInteger(MIN_PICTURES, MAX_PICTURES)}, getRandomPictures)
});

const destinations = Array.from({length: getRandomInteger(1, DESTINATION_COUNT)}, (_, index) => createDestination(index));

export { createDestination, destinations, DESTINATION_COUNT };
