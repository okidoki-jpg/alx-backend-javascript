export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    if (typeof sqft !== 'number') throw new TypeError('sqft must be a number.');

    this._sqft = sqft;
  }

  set sqft(val) {
    if (typeof val !== 'number') throw new TypeError('sqft must be a number.');
    this._sqft = val;
  }

  get sqft() {
    return this._sqft;
  }
}
