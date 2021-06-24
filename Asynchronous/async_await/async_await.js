//-- async function
async function hello() {
    return 'hello';
}

// hello().then(value => {
//     console.log(value);
// }) .catch(e => {
//     console.log(e.message);
// });
let sayHello = async function () {
    return await hello();
}

sayHello().then(res => {
    console.log(res);
})

//-- test event loop
// let test = () => console.log('there!!');
// setTimeout(test, 2000);
// setTimeout(test, 2000);
// setTimeout(test, 2000);

//--