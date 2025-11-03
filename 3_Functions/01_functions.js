function printName (Name) {
    console.log("Name is: ", Name);
}

function returnName (Name) {
    return `Returned Name is: ${Name}`;
}

const fullName = returnName("John Doe");
printName(fullName);
console.log("when empty argument is passed, the parameter type is undefined", returnName());


//Function with default parameters
function greetUser (userName = "Guest") {
    console.log(`Hello, ${userName}! Welcome to our website.`);
}

greetUser("Alice");
greetUser(); //uses default parameter

// passing multiple arguments to a function
function printNumbers (...num) {         //rest parameter (also spread operator but rest parameter here)
    return num;
}
console.log(printNumbers(1, 2, 3, 4, 5));

//passing object as argument
function displayUserInfo (user) {
    console.log(`User Name: ${user.name}, Age: ${user.age}`);
}

const userObj = { name: "Bob", age: 30 };
displayUserInfo(userObj);

