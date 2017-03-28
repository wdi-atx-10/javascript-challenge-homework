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

function daysUntilDate(dob){
  var today = new Date();
  var birthday = new Date(dob);
  return today-birthday;
}

function birthdayReminder(people){
  var theThing = [];
  for (var i = 0; i < people.length; i++) {
    var name = people[i].name; //"Jack"
    var dob = people[i].dob; //"01/01/0001"
    var dobArr = dob.split('/'); //["01","01","0001"]
    var result = daysUntilNext(dobArr[0], dobArr[1]); // 45

    var reminder = (name + '`s birthday is in ' + result + ' days');
    theThing.push(reminder);
  }
  return theThing;
}

function daysUntilNext(month, day){
    var tday= new Date(), y= tday.getFullYear(), next= new Date(y, month-1, day);
    tday.setHours(0, 0, 0, 0);
    if(tday>next) next.setFullYear(y+1);
    return Math.round((next-tday)/8.64e7);
}
