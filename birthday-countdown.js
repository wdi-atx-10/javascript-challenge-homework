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

// Psuedo CODE
// console.log("first name")
// response var = firstName;
// console.log("Enter your birthdate");
// var birthday = birthdate || form(mm/dd/yyyy);
// daysUntilDate = (birthday - date);
// birthdayReminder("Your birthday is in " + daysUntilDate + "days");

var currentDate = new Date();
var oneDay = 24*60*60*1000;

function main(){
  var birthdayArray = [
      {
        name: "Jack",
        dob: "10/31/2013"
      },
      {
        name: "Jill",
        dob: "4/01/1975"
      }
    ];
  birthdayReminder(birthdayArray);
}
function birthdayReminder(birthdayArray){
   for (i=0, x = birthdayArray.length; i<x;i++){
    var name = birthdayArray[i].name;
    var dob = birthdayArray[i].dob;
    var newDateArray = dob.split('/');
    var bday = new Date(currentDate.getFullYear(),newDateArray[0]-1,newDateArray[1]);
   if (currentDate > bday){
    bday.setFullYear(bday.getFullYear() + 1);
    }
  var diff = Math.floor((bday-currentDate)/oneDay);
  console.log(name + "'s birthday is in "+ diff + ' days.');
  }
}
main();
