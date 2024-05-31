import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a Number');
    if (!(curr instanceof Currency)) throw new TypeError('Currency must be an instance of Currency');

    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a Number');
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(curr) {
    if (!(curr instanceof Currency)) throw new TypeError('Currency must be an instance of Currency');
    this._currency = curr;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof anount !== 'number') throw new TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number') throw new TypeError('conversionRate must be a number');
    return amount * conversionRate;
  }
}
