//IIFE functions - Immediately Invoked Function Expressions
//These functions run as soon as they are defined ()();

(function() {
    console.log("This is an IIFE function that runs immediately upon definition.");
})();

//IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}! This IIFE function received a parameter.`);
})("Ez");

//IIFE with return value
const result = (function(num1, num2) {
    return num1 + num2;
})(5, 10);

console.log("The result of the IIFE addition is:", result); // 15

// main purpose of IIFE is to create a new scope and avoid polluting the global namespace
const globalVar = "I am a global variable";

(function() {
    const localVar = "I am a local variable inside IIFE";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
})();   