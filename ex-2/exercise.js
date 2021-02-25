// Example
/*
var nameOfUser = prompt("Enter your name, please")
var currentAge = parseInt(prompt("What is your age?"));
var birthOfYear = parseInt(prompt("when were you born?"));
var currentYear = parseInt( prompt("Enter the current year"));
var futureYear = parseInt(prompt("what is the future year?"))
var diff = futureYear - currentYear;
var res = currentAge + diff;
window.alert("Hi "+nameOfUser+ "Your age will be "+res);
*/
// My age according the month i was born.
/*
var myAge = 28;
var monthOfBrith = 4;
var yearOfBirth = 1992;
var currentYear = 2021;
var future = parseInt(prompt("Enter the future year"));
window.alert("I will be either "+(myAge +(future - currentYear)) + " or "+((myAge +(future - currentYear)) +1));
*/
//date i was born
var day = 17;
var month = 4;
var year = 1992;

//I was born the 1970 month 3 day 7 and now it is 2021 month 4 day 25 --> 51 years 1 month and 18 days
//date today
var nowYear = 2021;
var nowMonth = 2;
var nowDay = 25;
//my age today 
window.alert("I was born the "+year + " month "+month +" day " +day+" and now it is "+nowYear+
" month "+nowMonth + " day "+ nowDay +" --> "+((nowYear - year)));
