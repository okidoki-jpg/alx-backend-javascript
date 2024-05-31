export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('Size must be a number');
    if (typeof location !== 'string') throw new TypeError('location must be a string');

    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'string':
        return this._location;
      case 'number':
        return this._size;
      default:
        return this._size;
    }
  }
}
