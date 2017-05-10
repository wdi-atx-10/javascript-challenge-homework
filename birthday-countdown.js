// Finds days until next birthday.  Works w/ test data
function daysUntilDate(date) {
   var month = date.substr(0,2)-1;
   var day = date.substr(3,2);
   var year = new Date().getFullYear();
   var today = new Date();
   var checkDate = new Date(year, month, day);

  d = Math.floor((checkDate-today)/86400000);

  if( d < 0) {
    return (d + 365)
  } else {
    return d
  }
}

// Testing daysUntilDate function
daysUntilDate('04/19/81');

// Birthday objects to run through functions.
var birthdays= ([
{
name: "Jack",
dob: "10/31/2013"
},
{
name: "Jill",
dob: "4/01/1975"
}
]);
// Runs through function objects and drills down to birthdays, then evaluating how many days until w our daysUntilDate function.
function birthdayReminder(b) {
    for (var i = 0, x= b.length; i<x; i++){
      console.log(b[i].name + 's birthday is in ' + daysUntilDate(b[i].dob) + ' days');
   }
  }

  birthdayReminder(birthdays)
