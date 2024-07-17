const SampleString = "Emadzaheer";

// console.log( SampleString.toUpperCase());
// console.log(SampleString.indexOf("E"));
// console.log( SampleString.substring(0,3) );    //last value does not include
const slicedString = SampleString.slice(-5, 4);
console.log( slicedString );
const inputStringWithSpace = "   bob   ";
console.log( inputStringWithSpace.trim());       //trim removes unnecessary spaces

const url = "www.ez.co/store%substore";
console.log(url.replace("%", "-"));

//ask if substring exists
console.log( url.includes("ez") );

//split string on basis of a char
console.log( url.split("%"));