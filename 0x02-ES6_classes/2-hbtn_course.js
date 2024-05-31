export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) {
      throw new TypeError('Input is not an array');
    }
    if (!students.every((e) => typeof e === 'string')) {
      throw new TypeError('Array elements must be a string');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(len) {
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    this._length = len;
  }

  get length() {
    return this._name;
  }

  set students(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Input is not an array');
    }
    if (!arr.every((e) => typeof e === 'string')) {
      throw new TypeError('Array elements must be a string');
    }
    this._students = arr;
  }

  get students() {
    return this._students;
  }
}
