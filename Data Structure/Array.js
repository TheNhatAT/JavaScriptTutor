//-- create
let arr1 = new Array();
let arr2 = Array();
let arr3 = [];
console.log(arr1.length);

//-- create with single element
let oneArr = Array.of('nhat');
oneArr.push(1);
console.log(oneArr);

//-- careful with length
let lengths = []
lengths[22] = ['nhat'];
console.log(lengths)

//-- methods
let myArray = [1, 2, 3]
myArray = myArray.concat('a', 'b', 'c')
console.log(myArray);
console.log(myArray.join('-'));
console.log(myArray);
