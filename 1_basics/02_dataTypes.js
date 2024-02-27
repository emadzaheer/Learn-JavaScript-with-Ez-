"use strict";   //strictly uses the newer version of JS

//alert(2+2);   //node doesn't recognize, this is a browser command. It will work in the browser console.

/* types: 
PRIMITIVE:

Number : 2 ^ 53 range,
bigint: higher range
string: ""
boolean: true or false
null: object
undefined: undefined
symbol: unique stuff

NON PRIMITIVE:

object: 

*/

console.table([typeof undefined, typeof null]);
// output: 
// ┌─────────┬─────────────┐
// │ (index) │ Values      │
// ├─────────┼─────────────┤
// │ 0       │ 'undefined' │
// │ 1       │ 'object'    │