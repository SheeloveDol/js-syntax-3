
// Creating a class in order to quickly create multiple instances of objects from the bluepoint of that class.

class Dog {
  constructor(name, age) {
    this._name = name,
    this._age = age,
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

