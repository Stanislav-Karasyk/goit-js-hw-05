class Car {
  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    console.log(maxSpeed, speed, isOn, distance, price);
  }

  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    if (!this.isOn) {
      this.isOn = false;
      this.speed = 0;
    }
  }

  accelerate(value) {
    if (this.speed + value < this.maxSpeed && this.isOn) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed + value < this.speed) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance = hours * this.speed;
    }
  }
}

// для проверки
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang); // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
