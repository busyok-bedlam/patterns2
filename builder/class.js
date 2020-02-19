class CarDirector {
  constructor() {
    this.orders = [];
    this.stockpile = new Map();
  }
  receiveOrder(order) {
    this.orders.push(order);
    return;
  }
  getProduction(builder) {
    if(this.stockpile.has(builder)) {
      return this.stockpile.get(builder);
    }
    throw new Error('No such buider production');
  }
  saveToStockpile(car, builder) {
    this.stockpile.set(builder, car);
    return;
  }
  constructCar(builder, orderNum) {
    const order = this.orders[orderNum] || null;
    if(order) {
      const { engine, parktronic, signalling } = order;
      const car = builder.reset().setEngine(engine).setParktronic(parktronic).setSignalling(signalling).build();
      this.saveToStockpile(car, builder);
      return
    }
    throw new Error('no such order');

  }
}
class Car {
  constructor(){
    this.engine = null;
    this.parktronic = null;
    this.signalling = null;

  }
}
class CarBuilder {
  reset() {
    this.car = new Car();
    return this;
  }
  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }
  setParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }
  setSignalling(signalling) {
    this.car.signalling = signalling;
    return this;
  }

  build() {
    return this.car;
  }
}

const director = new CarDirector();
const builder1 = new CarBuilder();
director.receiveOrder({ engine: 'engine1', parktronic: 'parktronic1', signalling: 'signalling1' });
director.constructCar(builder1, 0);
const result = director.getProduction(builder1);
console.log(result);
