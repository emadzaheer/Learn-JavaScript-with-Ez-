//this helps to refer to the current object context
const object1 = {
    name: "Ez",
    regularFunction: function() {
        console.log("Inside regularFunction, this refers to:", this.name);
    }
};

object1.regularFunction(); // "Ez"
object1.name = "JOHN";
object1.regularFunction(); // "JOHN" because 'this' refers to the current object 

//printing this in global scope will return an empty object in node
console.log("In global scope, this refers to:", this); // In Node.js, this is an empty object {}
//NOTE: In browsers, 'this' in the global scope refers to the 'window' object

function random1() {
    let a = 10;
    console.log("Inside random1 function, this refers to:", this); // In a function it prints alot of properties
    console.log(`this doesn't work for variables in a function like ${this.a}`);
}
random1();

//Arrow functions do not have their own 'this', they inherit 'this' from the surrounding lexical context

const f1 = () => {
    console.log("Inside arrow function f1, this refers to:", this); // Inherits 'this' from the surrounding context
};
console.log(f1());

//one liner arrow funnction
const arrowFunc = (num1, num2) => (num1 + num2); // Implicit return (the () around num1 + num2 is a substitute for {} and return)
console.log("Result of arrowFunc:", arrowFunc(5, 10)); // 15

const arrowFunc2 = () => ({key: "1", key2: "2"}); // Returning an object literal, need to wrap in parentheses
console.log("Result of arrowFunc2:", arrowFunc2()); // { key: '1', key2: '2' }