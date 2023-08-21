import dayjs from 'dayjs';
import { getRandomArrayElement, getRandomInteger } from '../utils';
import { getRandomOffer } from './mocks-offers';
import { destinations } from './mocks-destinations';

const POINTS_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];


const MIN_PRICE = 1000;
const MAX_PRICE = 3000;


const TimeRanges = {
  DAYS: {
    MIN: 1,
    MAX: 3
  },
  HOURS: {
    MIN: 1,
    MAX: 10
  },
  MINUTES: {
    MIN: 1,
    MAX: 59
  },
};


const getRandomDate = () =>

  dayjs().add(getRandomInteger(TimeRanges.DAYS.MIN, TimeRanges.DAYS.MAX), 'day')
    .add(getRandomInteger(TimeRanges.HOURS.MIN, TimeRanges.HOURS.MAX), 'hour')
    .add(getRandomInteger(TimeRanges.MINUTES.MIN, TimeRanges.MINUTES.MAX), 'minute');

const createRandomDate = () => {
  const date1 = getRandomDate();
  const date2 = getRandomDate();

  if (date2.isAfter(date1)) {
    return {
      dateFrom: date1.toISOString(),
      dateTo: date2.toISOString()
    };
  }
  return {
    dateFrom: date2.toISOString(),
    dateTo: date1.toISOString()
  };
};


const createPoint = (index) => {
  const randomDates = createRandomDate();

  return {
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    dateFrom: randomDates.dateFrom,
    dateTo: randomDates.dateTo,
    destination: getRandomArrayElement(destinations).id,
    id: index,
    isFavorite: Boolean(getRandomInteger(0,1)),
    offers: getRandomOffer(),
    type: getRandomArrayElement(POINTS_TYPES)
  };
};


const createMockPoints = (count) => Array.from({length: count},(_, index) => createPoint(index));

export { createMockPoints, POINTS_TYPES };
