import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') throw new TypeError('Floors must be a number');

    super(sqft);
    this._floors = floors;
  }

  set floors(val) {
    if (typeof val !== 'number') throw new TypeError('Floors must be a number');
    this._floors = val;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
