//NOTE: in browser's console, scope is diff from node environment

// inside a {} body, var is always in global scope and let/const are in block scope
//in nested functions, const and let can be accessed from inner functions, but not vice versa
{
    var a = 1;
    let b = 2;
    const c = 3;
}

console.log(a); // 1
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

//function vs function expression
callmeAnywhere(); // works fine even if u call before declaration
function callmeAnywhere() {
    console.log("I can be called anywhere");
}

callmeAfterDeclaration(); // Uncommenting this line before the declaration will cause an error
const callmeAfterDeclaration = function() {
    console.log("I can only be called after declaration");
};

callmeAfterDeclaration(); // works fine

