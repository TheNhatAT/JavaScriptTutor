function Person(first, last, age, gender, interests) {

    // property and method definitions
    this.name = {
        'first': first,
        'last' : last
    };
    this.age = age;
    this.gender = gender;
    //...see link in summary above for full definition
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

//== create new object from a specified prototype object
let person2 = Object.create(person1);
console.log(person2.__proto__); // return person1

//== prototype of two objects
console.log(Object.getPrototypeOf(person2))
console.log(Object.getPrototypeOf(person1))

//== prototype property
console.log(person1.prototype);
console.log(person2.prototype);
console.log(Object.getPrototypeOf(person1) ===  Person.prototype);
console.log(person1.__proto__ === Person.prototype);
console.log(person2.__proto__ === person1);

//== constructor property
console.log(person1.constructor);
console.log(person2.constructor);

let person3 = new person1.constructor('nhat', 'nguyen', 20, 'male');
console.log(person3);
//-- return name of constructor
console.log(person3.constructor.name);

//== modify prototype
Person.prototype.hello = () => {
    console.log('say hello!!!');
}

person2.hello();