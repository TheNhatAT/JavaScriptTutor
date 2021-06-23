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