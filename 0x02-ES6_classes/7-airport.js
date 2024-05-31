export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') throw new TypeError('Name must be string');
    if (typeof code !== 'string') throw new TypeError('Code must be string');

    this._name = name;
    this._code = code;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('Name must be string');
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set code(val) {
    if (typeof val !== 'string') throw new TypeError('Code must be string');
    this._code = val;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
