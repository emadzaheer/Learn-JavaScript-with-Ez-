const num = 7;
console.log(`it outputs 7 simply : ${num}`);

const newNum = new Number(17);
console.log(`This has a different result in the browser console : ${newNum}`);
//Number {17}[[Prototype]]: Number[[PrimitiveValue]]: 17

console.log( newNum.toFixed(3)); //used for fixed point calcs

//similarly..
const length = 24.177;
console.log( length.toPrecision(2));

//to change big nums to comma representation
const USD = 100000;
console.log(USD.toLocaleString('en-US'));


/* ---------------------------------------MATHS--------------------------------- */
//built in inside js
console.log(Math.abs(-1)); //changes every num to uint
console.log(Math.round(6.9)); //can use ceil or floor as well



console.log(Math.min(2, 6, 1, 9));  //or max

//Random number
console.log(Math.random()); //by default it gives vals bw 1 and 0

//if we want random nums between a range:
const upperLimit = 24;
const lowerLimit = 17;
const randomNumber = Math.floor(Math.random() * ( (upperLimit - lowerLimit)  )) + lowerLimit;  
console.log(randomNumber);