const object1 = { a: 1, b: 2, c: 3 };
const array1 = [10, 20, 30];
const string1 = "Hello";

//for...in loop to iterate over object properties without the index (when you need to print everything)

for (const element of array1) {
    console.log(`${element} is an element in array1`);
}

// For..in is used to iterate over object properties 
for (const key in object1) {
    console.log(`object has key: ${key} and value : ${object1[key]} `);
}
// however for in can also print the index number of an array instead of its value
for (const index in array1) {
    console.log(`index ${index} has value ${array1[index]}`);
}

for (const char of string1) {
    console.log(`character ${char}`);   
}

//Map : Kinda like an object but remebers the insertion order of the keys
const map1 = new Map(); //Call constructor bec map is an object
map1.set('name', 'Emad');
map1.set('age', 27);
map1.set('city', 'Abu Dhabi');

console.log(`map output = \n`, map1);

//how to loop using map?
for (const [key, value] of map1) { //destructuring assignment to get key and value
    console.log(`${key} : ${value}`);
}

//different ways to print map1  
//1. direct logging
//2. convert to array of entries
//3. JSON representation
//4. convert to object (if keys are strings)

//1. direct logging

