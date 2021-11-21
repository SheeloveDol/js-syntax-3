class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents
  }

  set numberOfStudents(number) {
    typeof number === 'Number' ? this._numberOfStudents = number : 'Must be number'
  }
}

//Creating primary class
class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
}

const sebastien = new Primary('Primary Saint', 'primary', 500, 'ID');

console.log(sebastien.name)
console.log(sebastien.numberOfStudents)
// sebastien.numberOfStudents(500);
console.log(sebastien.numberOfStudents)