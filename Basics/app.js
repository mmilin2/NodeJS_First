/**
 * Created by milin on 3/1/2016.
 */

var person = {
    firstName : "Milind",
    lastName: "Sapra",
    age: 25
};

console.log(person);

function addNumber(a, b){
    return a+b;
}

console.log(addNumber(15, 20));

var hello = function () {
    console.log("hello there!! Anonymous function call in JS");
};

setTimeout(hello, 10000);