// arrays can have both deep and shallow copies
//deep copy = no reference to the original array
//shallow copy = reference to the original array

let arr1 = [1, 2, 3, 4, 5];

//shallow copy
let arr2 = arr1;
arr2.push(6);
console.log(arr1); // [1, 2, 3, 4, 5, 6]
console.log(arr2); // [1, 2, 3, 4, 5, 6]

//deep copy
let arr3 = [...arr1]; //spread operator
arr3.push(7);
console.log(arr1); // [1, 2, 3, 4, 5, 6]
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7]

//another way to create a deep copy
let arr4 = Array.from(arr1);
arr4.push(8);
console.log(arr1); // [1, 2, 3, 4, 5, 6]
console.log(arr4); // [1, 2, 3, 4, 5, 6, 8]

//shift() and unshift()
arr1.unshift('unshifted element');
console.log(arr1);
arr1.shift(); //removes the first element
console.log(arr1);


//asking questions from the array
//checking if an element exists in the array
console.log(arr1.includes(3)); //true
console.log(arr1.includes(10)); //false

//finding the index of an element
console.log(arr1.indexOf(4)); //3
console.log(arr1.indexOf(10)); //-1 (not found)
console.log(arr1[-1]);

//join 
console.log(arr1.join("|")); // 1|2|3|4|5|6 joins all elements of the array into a string with the specified separator

//slice: returns a section of an array, doesn't modify the original array
console.log("returns a section of an array", arr1.slice(0,2)); // [1, 2] (from index 0 to index 2, not including index 2)

//splice: modifies the original array, can add or remove elements
arr1.splice(1,4,"added element"); // from index 1, remove 4 elements and add "added element"
console.log("after splice", arr1); // returns [1, "added element", 6]

//turn string to an array 
console.log(Array.from("Emad")); // ['E', 'm', 'a', 'd']

//turn multiple vars into array:
let myName = "ez";
let age = "27";

console.log("Using of in arrays", Array.of(myName, age));




//turn array-like object to an array
const arrayLikeObject = {
    0: 'a',
    1: 'b',
    2: 'c',         

    length: 3
};
const convertedArray = Array.from(arrayLikeObject);
console.log(convertedArray); // ['a', 'b', 'c']

