function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.');
};

let person = new Person('nhat', 'nguyen', 20, 'male', 'nothing');
person.greeting();

//== inheritance with constructor function
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}

//-- inheritance prototype of Person
// console.log(Object.getOwnPropertyNames(Teacher.prototype));
// console.log(Object.getOwnPropertyNames(Person.prototype));
// console.log(Object.getOwnPropertyNames(Object.prototype));
 Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher.prototype.constructor);

Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });
console.log(Teacher.prototype.constructor)