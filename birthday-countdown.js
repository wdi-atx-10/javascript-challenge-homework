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

function daysUntilDate(date) {
  var month = date.substr(0,2)-1;
  var day = date.substr(3,2);
  var year = new Date().getFullYear();
  var today = new Date;
  var checkDate = new Date(year, month, day);
  // var birthday = new Date(1995, 11, 17);

  d = Math.floor((checkDate-today)/86400000);

  return d
}

daysUntilDate('04/16/2017');

var birthdays = [
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "04/01/1975"
    }];

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]

 function birthdayReminder(b) {
   for (var i = 0, x= b.length; i<x; i++){
     console.log(b[i].name + 's birthday is in ' + daysUntilDate(b[i].dob) + ' days');
   }
 }

 birthdayReminder(birthdays);
