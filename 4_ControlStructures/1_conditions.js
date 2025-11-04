//== is used for loose equality comparison (type coercion is performed)
//=== is used for strict equality comparison (no type coercion)


//Truthy values are values that evaluate to true in a boolean context
//Falsy values are values that evaluate to false in a boolean context   
//Falsy values in JavaScript are: false, 0, -0, BigInt 0n, "", null, undefined, and NaN
//truthy: "0", "false", " ", [], {}, function() {}

//Switch case statement is used to perform different actions based on different conditions
let apiKey = "12345";

switch (apiKey) {
    case "12345":
        console.log("Valid API Key");
        break;                          //break is used to exit the switch case statement
    case "67890":
        console.log("Expired API Key");
        break;
    case "00000":
        console.log("Invalid API Key");
        break;
    default:                    //just like else in if-else statement
        console.log("Unknown API Key");
}

//checking if object is not empty
const object1 = {}

if (Object.keys(object1).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

//Ternary operator is a shorthand for if-else statement
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

//nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined
let defaultName = null ?? undefined ?? 12; //it will return 12 because null is not allowed, same with undefined
console.log(defaultName); // Output: "Guest"