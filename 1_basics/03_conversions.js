let score1 = "17ab";
let score2 = undefined;
let score3 = null;
let score4 = true;
let score5 = "17";

// console.log("types:");
// console.table([typeof score1, typeof score2, typeof score3, typeof score4, typeof score5]);

// if we convert to number:

score1 = Number(score1);
score2 = Number(score2);
score3 = Number(score3);
score4 = Number(score4);
score5 = Number(score5);

console.table([ score1, score2, score3, score4, score5]);

/*when we use Number converter:
"24" => 24
"24ab" => NaN (not a number) but typeof will give Number
true => 1
false => 0
*/

//Booleans
console.log("Boolean string conversion returns true: ", Boolean("Ez"));


/*
When we use Boolean conversion

Boolean("") => false
"some alphabets" => true
NaN => false

*/

