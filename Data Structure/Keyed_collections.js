/** Map */
let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
    console.log(key + ' goes ' +value)
}
// "cat goes meow"
// "elephant goes toot"
console.log(sayings)
sayings.clear();
sayings.size; // 0

/** WeakMap
 * key is an object
 * to store private data for an object -> can't exported form the module
 * */
const privates = new WeakMap();

function Public() {
    const me = {
        // Private data goes here
        name: 'nhat'
    };
    privates.set(this, me);
}

Public.prototype.method = function () {
    const me = privates.get(this);
    // Do stuff with private data in `me`...
    console.log(me);
};

let x = new Public();
x.method();
module.exports = Public;

/** Set
 * store unique values
 * can delete elements by their value
 */
let mySet = new Set();
mySet.add(1);
mySet.add(2);
let y = Array.from(mySet); console.log(y);

let mySet2 = new Set();
mySet2.add('x');
mySet2.add('y');
let z = [...mySet2]; console.log(z) // create array for a set
mySet2 = new Set([1, 2, 3, 4]); // create from an array
console.log( mySet2.entries())

/** WeakSet
 * just store object only
 * not enumerable
 */