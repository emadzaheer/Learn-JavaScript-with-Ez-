// constants 
const accountId = 1232344;
let accountEmail = "ez@gmail.com"
var accountPassword = "1234567890"                //don't use var because it has block scope issues
let accountState;       //undefined

console.log("This is the tabular way to print something");

//this is a quicker way to print multiple vars
console.table([accountId, accountEmail, accountPassword, accountState]);