//nested objects and optional chaining (checking for undefined properties in an object)

const User1 =  { 
    id: "123",
    fullname : { 
        firstName: "E",
        lastName: "Z",
    },
}

console.log(User1);
//optional chaining to check if property exists before accessing it otherwise print the next in nested object
console.log(User1.fullname?.firstName); //prints E
  
  
//merging objects using assign keyword
const objA = {
    key1: "value1",
    key2: "value2",
};

const objB = {
    key3: "value3",
    key4: "value4",
};

//merging objA and objB into objC
const objC = Object.assign({}, objA, objB); //first param is target object (empty here) followed by source objects to merge
console.log("merged object", objC);

//merging using spread operator
const objD = { ...objA, ...objB }; //spread operator to merge objects
console.log("merged object using spread", objD);

//get keys and values of an object
const keys = Object.keys(objA);
const values = Object.values(objA);
const entries = Object.entries(objA); //array of [key, value] pairs

console.log("keys", keys);
console.log("values", values);
console.log("entries", entries);    

//check if a key exists in an object0
console.log( "if obj has a certain property", objA.hasOwnProperty("key1") );        

//Destructuring objects
const EstateProperty = {
    address : "123 Main St",
    city: "Metropolis",
    country: "Freedonia",
};

const {address: addr, country: ctry} = EstateProperty;
console.log("destructured address", addr, "country", ctry);

//API format is in JSON

// {
//     "id": "001",
//     "name": "John Doe",
//     "email": "
// }

// or 

// [
//     {},
//     {},
//     {},
// ]


