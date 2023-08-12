import { render } from '../render.js';
import EventListView  from './../view/event-list-view.js';
import FiltersView from './../view/filters-view.js';
import SortView from './../view/sort-view.js';
import FormCreateView from './../view/form-create-view.js';
import FormEditView from './../view/form-edit-view.js';
import PointsView from './../view/points-view.js';

const POINT_COUNT = 3;

const bodyElement = document.querySelector('.body');
const tripMainElement = bodyElement.querySelector('.trip-main');
const tripEventsElement = tripMainElement.querySelector('.trip-events');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');


export default class SitePresenter {

  listComponent = new EventListView();

  constructor({ container }) {
    this.container = container;
  }

  init(){

    render(new FiltersView(), tripFiltersElement);
    render(new SortView(), tripEventsElement);


    render(this.listComponent,this.container);
    render(new FormCreateView(), this.listComponent.getElement());
    render(new FormEditView(), this.listComponent.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new PointsView(), this.listComponent.getElement());
    }
  }
}




