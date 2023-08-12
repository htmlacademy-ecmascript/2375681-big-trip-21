import { SitePresenter } from './presenter/site-presenter';
const tripEventsElement = document.querySelector('.trip-events');

const sitePresenter = new SitePresenter({container: tripEventsElement});

sitePresenter.init();
