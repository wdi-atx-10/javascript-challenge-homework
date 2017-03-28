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
  var now = Date.now();
  var future = Date.parse(date);
  var daysUntil = Math.round((future-now)/86400000);
  //console.log(daysUntil);
  return daysUntil;

}

function birthdayReminder(birthdays) {
  birthdays.sort(function(a, b) {
    return Date.parse(a.dob) - Date.parse(b.dob);
});
  for (var i=0;i<birthdays.length; i++) {
    var bD = daysUntilDate(birthdays[i].dob);
    var nM = birthdays[i].name;
    console.log(nM+"'s birthday is in "+bD+" days.")
  }
}

//daysUntilDate('04/10/2017');

birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2017"
    },
    {
      name: "Jill",
      dob: "4/01/2017"
    }
  ]);
