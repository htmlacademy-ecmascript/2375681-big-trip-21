import { createMockPoints } from '../mocks/mocks-point';


const POINTS_COUNT = 5;

export default class PointsModel {
  points = Array.from({ length: POINTS_COUNT }, createMockPoints);

  getPoints() {
    return this.points;
  }
}


