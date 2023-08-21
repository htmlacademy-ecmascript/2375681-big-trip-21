import { render } from './render.js';
import SitePresenter from './presenter/site-presenter';
import SortView from './view/sort-view.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';

const tripEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();

const sitePresenter = new SitePresenter({container: tripEventsElement, pointsModel, offersModel, destinationsModel});


render(new SortView(), tripEventsElement);

sitePresenter.init();

export { pointsModel, offersModel, destinationsModel };
