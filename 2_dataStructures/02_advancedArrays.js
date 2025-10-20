//concatenation
//Note: don't use push for this. Push will modify the original array and will push the entire arr2 as a single element into arr1.
//USE SPREAD operator "..." instead (can also use .concat but spread is easier)
const arr1 = ["a", "b", "c"];
const arr2 = ["1", "2", "3"];

const concatenatedArray = [...arr1, ...arr2];
console.log("Concatenated Array:", concatenatedArray); // ["a", "b", "c", "1", "2", "3"]

//flat(): flattens nested arrays into a single array
const nestedArray = [1, 2, [3, 4], [5, 6, [7, 8]]];
const flattenedArray = nestedArray.flat(2); // 2 indicates the depth level to flatten (depth of nested arrays)
console.log("Flattened Array:", flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
