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
var oneDay=24*60*60*1000;
var currentDate: new Date();

// YOUR CODE HERE
$(function(){
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


  // $('#date-form').submit(function(evet){
  //   event.preventDefault();
  //   var newDate=new Date($('#date'),val)
  //   daysUntilDate(name, dob);
  // })
})

function daysUntilDate(name, dob) {
    var newDate=new Date(dob);

  //new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
  var diff=(newDate-currentDate)/oneDay;
  console.log(name +' birthay is in ' + diff + ' days.');
  // $return diff

}

function birthdayReminder(birthdayArray){


  for (i=0, x=birthdayArray.length; i< x; i++) {
    var name=birthdayArray[i].name;
    var dob=birthdayArray[i].dob;
      daysUntilDate(name, dob);


  }
}
