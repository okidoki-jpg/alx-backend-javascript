export default class Car {
  constructor(brand, motor, color) {

    this._brand = Symbol.for(brand);
    this._motor = Symbol.for(motor);
    this._color = Symbol.for(color);
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
