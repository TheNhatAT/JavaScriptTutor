const person = {
    // name: ['Bob', 'Smith'],
    name: {
        first: 'bob',
        last: 'smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
       return this.name[1] +' '+ this.age;
    },
    greeting: function() {
        return 'Hi! I\'m ' + this.name[0] + '.';
    }
};
//
// console.log(person.bio());
// console.log(person.greeting());

person.check = true;
person.test = true;
console.log(person);