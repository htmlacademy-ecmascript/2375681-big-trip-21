
import { render } from '../render.js';
import { getRandomArrayElement } from '../utils.js';
import EventListView from './../view/event-list-view.js';
import FiltersView from './../view/filters-view.js';
import FormCreateView from './../view/form-create-view.js';
import FormEditView from './../view/form-edit-view.js';
import PointsView from './../view/points-view.js';


const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');

export default class SitePresenter {

  listComponent = new EventListView();

  constructor({ container, pointsModel }) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init(){
    this.listPoints = [...this.pointsModel.getPoints()];

    render(new FiltersView(), tripFiltersElement);
    render(this.listComponent,this.container);
    render(new FormCreateView(), this.listComponent.getElement());
    render(new FormEditView(getRandomArrayElement(this.listPoints)), this.listComponent.getElement());

    for (let i = 0; i < this.listPoints.length; i++) {
      render(new PointsView({point: this.listPoints[i]}), this.listComponent.getElement());
    }
  }
}


