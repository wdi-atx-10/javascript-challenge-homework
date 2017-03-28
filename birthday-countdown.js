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

function daysUntilDate(your_date) {
  // Get todays Date
  var date_object = new Date();

  // Get the day
  var day = date_object.getDate();

  // Get the month. January starts at 0 so we need to add 1 to the month
  var month = date_object.getMonth() + 1;

  // Get the year.
  var year = date_object.getFullYear();

  // Build current date from variables
  var current_date = month + "/" + day + "/" + year;

  // We want to rebuild the dob to the persons upcoming birthday
  var date_split = your_date.split("/");

  // We want to check if the birthday has already passed this year. If it has, we need to use the next year.
  if (date_split[0] <= month && date_split[1] <= day) {
    var new_date_string = date_split[0] + "/" + date_split[1] + "/" + (year + 1);
  }
  else {
    var new_date_string = date_split[0] + "/" + date_split[1] + "/" + year;
  }

  // Turn the date strings into a Date Object
  var c_date = new Date(current_date);
  var u_date = new Date(new_date_string);

  // Subtract todays date from users date
  var time_diff = Math.abs(u_date.getTime() - c_date.getTime());

  // The time_diff is in milliseconds so we need to convert that into days.
  // Get the number of milliseconds in a day
  var millis_in_day = 24 * 60 * 60 * 1000;

  // Conver the time_diff into days
  var conversion = Math.ceil(time_diff / millis_in_day);
  // console.log(conversion);

  return conversion
}


function birthdayReminder(birthdayArray){
      ///creat a birthday//
      ///array//


      for (i=0; i<birthdayArray.length; i++) {
        /// return days between date//
        var returnDays = daysUntilDate (birthdayArray[i].dob);
        var message = birthdayArray[i].name +" Days from birthday " + returnDays ;
        ///distance from chris's birthday//


        console.log(message);




      }
    }
         var birthdayArray = [
          {
          name: "Chris",
        dob: "10/22/2017"
      },
        {
        name: "David",
        dob: "05/05/1999"
      }


        ]
        birthdayReminder(birthdayArray);


        
