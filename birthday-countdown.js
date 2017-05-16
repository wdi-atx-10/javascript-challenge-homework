/*
  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.
  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).
  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);
  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```
  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?
*/

// YOUR CODE HERE

var today = new Date();
var birthday = new Date(1965, 03, 28)
var elapsedTime = (today - birthday);

var years = parseInt(elapsedTime * 3.1689E-11);
var months = parseInt(elapsedTime * 3.8027E-10);
var days = parseInt(elapsedTime * 1.1574E-8);

 // yourFunctionReturn = printElapsedTime(yourFunction);

 console.log(today);
 console.log(years);
 console.log(months, days);

 console.log(new Date().getTime());
 console.log(new Date('1965 March 28').getTime());
 console.log(new Date().getTime() - new Date('1965 March 28').getTime());

 var difference = new Date().getTime() - new Date('1965 March 28').getTime();
 var seconds = difference / 1000;
 var minutes = seconds / 60;
 var hours = minutes / 60;
 var days = hours / 24;
 var years = days / 365;

 console.log(years);

 var y = 1965;
 var m = 3;
 var d = 28;

 function getDifference(y,m,d){
   var date = y + '.' + m + '.' + d;
   console.log(date);
   var difference = new Date().getTime() - new Date(date).getTime();
   var seconds = difference / 1000;
   var minutes = seconds / 60;
   var hours = minutes / 60;
   var days = hours / 24;
   var years = days / 365;

   return Math.floor(years) + ' years!';
 }

 getDifference(y,m,d);
