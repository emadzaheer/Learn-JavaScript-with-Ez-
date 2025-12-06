// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log("Iteration number: " + element);
//     for (let j = 0; j < 5; j++) { //nested loop
//         console.log("  Nested iteration number: " + j);
//     }       
//     console.log("inner loop completed");
// }
// console.log("outerr loop completed");

//break and continue statements
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i = " + i);
        break; //exits the loop when i is 5
    }
    if (i % 2 === 0) {
        console.log("Skipping even number: " + i);
        continue; //skips the rest of the loop when i is even
    }
    console.log("Current value of i: " + i);
}

//Use for when the number of iterations is known
//Use while when the number of iterations is unknown and condition needs to be checked first
//Use do...while when the number of iterations is unknown and condition needs to be checked after at least one iteration

//while loop example
let counter = 0;
while (counter < 5) {
    console.log(`while counter is now ${counter}`);
    counter++;
}

//do...while loop example
let count = 7;
do {
    console.log(`do while count is now ${count}`);
    count++;
} while (count < 5);
    