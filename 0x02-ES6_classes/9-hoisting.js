// First define the classes before using them
export class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentALX {
  constructor(firstName, lastName, alxClass) { // Added missing alxClass parameter
    this._firstName = firstName;
    this._lastName = lastName;
    this._alxClass = alxClass; // Fixed assignment to use underscore
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get alxClass() {
    return this._alxClass; // Fixed to return _alxClass
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._alxClass.year} - ${this._alxClass.location}`; // Fixed self to this
  }
}

// Now create instances after class definitions
const class2019 = new ALXClass(2019, 'San Francisco');
const class2020 = new ALXClass(2020, 'San Francisco');

const student1 = new StudentALX('Guillaume', 'Salva', class2020);
const student2 = new StudentALX('John', 'Doe', class2020);
const student3 = new StudentALX('Albert', 'Clinton', class2019);
const student4 = new StudentALX('Donald', 'Bush', class2019);
const student5 = new StudentALX('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
