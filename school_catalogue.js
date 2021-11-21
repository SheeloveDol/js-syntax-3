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

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    // substituteTeachers = ['Julie', 'Arnoux', 'Carter', 'Walker'];
    const randomSub = Math.floor(Math.random() * (substituteTeachers.length - 1))
    return substituteTeachers[randomSub] 
  }

  set numberOfStudents(number) {
    if (typeof number === 'number') { 
    this._numberOfStudents = number
      } else {
   console.log('Invalid input: numberOfStudents must be set to a Number')
    }
  }

}

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

//--CREATING PRIMARY SUBCLASS

class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
}

const sebastien = new Primary('Primary Saint', 'primary', 500, 'ID');

//--TESTING PRIMARY SUBCLASS--
// console.log(sebastien.name)
// console.log(sebastien.numberOfStudents)
// sebastien.numberOfStudents = 1000;
// console.log(sebastien.numberOfStudents)
console.log(sebastien.quickFacts())

//--CREATING MIDDLE SUBCLASS
class Middle extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents)
  }
}

//--CREATING HIGH SUBCLASS 
class High extends School {
  constructor(name, level, numberOfStudents, sportTeams) {
    super(name, level, numberOfStudents);
    this._sportTeams = sportTeams;
  }
}