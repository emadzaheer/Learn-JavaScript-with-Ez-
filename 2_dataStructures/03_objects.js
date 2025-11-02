//Two ways to declare an object
//1 singleton object
const obj1 = new Object(); //object constructor syntax

//2 object literal syntax
// const obj2 = {}; //empty object

const symbolInJSObj = Symbol("symbol1");
const User = {          //The keys are always strings by default even if not declared (can be either str or symbol)
  name: "Ez",
  "Sir name": "Z",
  age: 27,
  location: "Dubai",
  email: "ez@js.com",
  [symbolInJSObj]: "key1",      //This is how symbols must be added to objects (while printing object, it prints as: [Symbol(symbol1)]: 'key1')
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"],
};



//print object item but this isnt the standard syntax
console.log(User.name);
//standard syntax to print object item especially when key has space
console.log(User["Sir name"]);
//print symbol
// console.log(User["symbolInJSObj"]); //retuens undefined
console.log(User[symbolInJSObj]); //correct way to print symbol value


//Modify object properties
User.age = 28;
User["location"] = "Abu Dhabi";
console.log(User);

//Freeze object to prevent modification of any kind
// Object.freeze(User);     //no way to un freeze an object
// Object.seal(User);       //can modify existing properties but cannot add or delete properties
User.age = 29; //this will not change the age as object is frozen
console.log(User);

//adding function as object property

User.function1 = function() {
    //how to reference to a property of the same object from inside the function
    console.log(`This function is for the obj user whose name is ${this.name}`);
    
    return "function inside object";
    }
console.log("printing obj with function", User);

// console.log("printing function def in an obj", User.function1); //prints the function definition or reference 
console.log("printing function ret val in an obj", User.function1()); //prints the function val


