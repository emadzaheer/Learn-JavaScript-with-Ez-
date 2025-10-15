// date is given in different formats

const currentDate = new Date();  //typeOf date is an obj
console.log(currentDate);  //returns in format: 2025-10-15T16:15:05.122Z
console.log(currentDate.toString()); //returns in format: Wed Oct 15 2025 16:18:47 GMT+0000 (Coordinated Universal Time)
console.log(currentDate.toLocaleString("en-US")); //returns in format: 10/15/2025, 4:22:34 PM.  "can use other locality languages"
console.log(currentDate.toLocaleString("en-US")); //returns in format: 10/15/2025, 4:22:34 PM.  "can use other locality languages"
console.log(currentDate.toDateString()); //returns in format: Wed Oct 15 2025


//Date as an input //Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
const inputDate = new Date(2025, 9, 15, 21, 45);  //date, time, seconds are optional
console.log(inputDate.toLocaleString());

//time stamp (milliseconds)
const currentTime = Date.now();     //new cannot be used here since date.now is a static method and returns a string
console.log(currentTime); //returns in format: 1739521174123
//converting time to timestamp
console.log(inputDate.getTime()); //returns in format: 1740008700000

//getting individual date or time components
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()); //month starts from 0 to 11
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());
console.log(currentDate.getDay()); //day starts from 0 to 6 (0-Sunday, 1-Monday, ...6-Saturday)

//customising date format. //returns: Wednesday, October 15, 2025 at 05:13:48 PM
console.log(currentDate.toLocaleString("dafault", {
                weekday: "long",
                timeZone: "UTC",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }) );