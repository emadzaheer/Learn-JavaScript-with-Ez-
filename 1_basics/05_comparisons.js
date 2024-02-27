//It's fine when we have numbers on both sides of comparison operators 

// console.log(2>3);

//when its string vs number
// console.log("2">3);   //it converts the str to num but try to have same data type on both sides.

//working with null
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  //??????
//this is bec == and >,< ops work differently. 
//>< ops convert null to number, == doesn't
// console.log();

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);  //??????


//strict check
console.log("2" === 2);  //returns false