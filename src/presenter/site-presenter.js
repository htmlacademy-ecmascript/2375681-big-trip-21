
import { render, replace } from '../framework/render.js';
import { isEscKeydown } from '../utils.js';
import EventListView from './../view/event-list-view.js';
import FiltersView from './../view/filters-view.js';
import FormCreateView from './../view/form-create-view.js';
import FormEditView from './../view/form-edit-view.js';
import PointsView from './../view/points-view.js';
import NoPointsView from './../view/no-points-view.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');

export default class SitePresenter {

  #listComponent = new EventListView();
  #container = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #listPoints = [];

  constructor({ container, pointsModel, offersModel, destinationsModel }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }


  init() {
    this.#listPoints = [...this.#pointsModel.points];
    this.#renderList();

    render(new FiltersView(), tripFiltersElement);
    render(new FormCreateView(), this.#listComponent.getElement());
  }

  #getOffers(offersModel, chosenOffersIds) {
    const chosenOffers = [];
    if (!chosenOffersIds) {
      return;
    }
    chosenOffersIds.forEach((chosenId) => {
      const chosenOffer = offersModel.find((offer) => offer.id === chosenId);
      if (chosenOffer) {
        chosenOffers.push(chosenOffer);
      }
    });
    return chosenOffers;
  }

  #getDestination(destinationId) {
    return this.#destinationsModel.destinations.find((destination) => destination.id === destinationId);
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if(isEscKeydown(evt.key)) {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointsView({
      point,
      offers: this.#getOffers(this.#offersModel.offers, point.chosenOffers),
      destination: this.#getDestination(point.destinationId),
      onEditClick:() => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      },
    });

    const editComponent = new FormEditView({
      point,
      offers: this.#getOffers(this.#offersModel.offers, point.chosenOffers),
      destination: this.#getDestination(point.destinationId),
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,
    });

    function replaceCardToForm() {
      replace(editComponent, pointComponent);
    }

    function replaceFormToCard() {
      replace(pointComponent, editComponent);
    }

    render(pointComponent, this.#listComponent.element);
  }

  #renderList() {
    render(this.#listComponent, this.#container);

    if (this.#listPoints.length === 0) {
      render(new NoPointsView(), this.#listComponent.element);
      return;
    }

    for (let i = 0; i < this.#listPoints.length; i++) {
      this.#renderPoint(this.#listPoints[i]);
    }
  }
}


