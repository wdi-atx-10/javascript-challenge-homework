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


//following code runs in repl.it (no html)


var todaysdate =  new Date();
var PeopleboxArray = [];
var bdayArray = [];

function Peoplebox(name, day) {
  this.name = name;
  this.day = day;
} 

function makepeoplearray(){
  var namestoenter = prompt("how many people are we putting in?", "gajillions");
  for (var i = 0; i < namestoenter; i++){
    var personname = prompt("Please enter this yokel's name", "some putz");
    var fuckyou = 0;
    while (fuckyou === 0){
      var bdaystring = prompt("Please enter your b-day (mm/dd/yyyy)", "");
      var bday = new Date(bdaystring);
      if (bday.getDate()===29 && bday.getMonth()===1){
        alert("fuck you, get born a different day");
        fuckyou = 0
      }else{
        fuckyou = 1;
      }
    }
    
    thisguy = new Peoplebox(personname, bday);
    PeopleboxArray.push(thisguy);
  }
}


function  birthdayReminder(){
  for (var i = 0;  i<PeopleboxArray.length; i++){
    var localbday = PeopleboxArray[i].day; 
    var daystillbday = null;
    
    dummystring = (localbday.getMonth() + 1).toString() + "/" + localbday.getDate().toString() + "/" + todaysdate.getFullYear().toString();
    var possiblebdaythisyear = new Date(dummystring);
    
    if (possiblebdaythisyear - todaysdate>=-86400000/*length of one day*/){
      daystillbday = Math.ceil((possiblebdaythisyear - todaysdate)/(1000*60*60*24));
    }else{
      dummystring = (localbday.getMonth() + 1).toString() + "/" + localbday.getDate().toString() + "/" + (todaysdate.getFullYear()+1).toString();
      var possiblebdaynextyear = new Date(dummystring);
      daystillbday = Math.ceil((possiblebdaynextyear - todaysdate)/(1000*60*60*24));
    }
      var dummybox = new Peoplebox(PeopleboxArray[i].name, daystillbday);
      bdayArray.push(dummybox);
  }
}
 
 
function bubbleSort()
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < bdayArray.length-1; i++) {
            if (bdayArray[i].day > bdayArray[i+1].day) {
                var tempday = bdayArray[i].day;
                var tempname = bdayArray[i].name;
                bdayArray[i].day = bdayArray[i+1].day;
                bdayArray[i].name = bdayArray[i+1].name;
                bdayArray[i+1].day = tempday;
                bdayArray[i+1].name = tempname;
                swapped = true;
            }
        }
    } while (swapped);
}

function makeasentence(){
  for (var i = 0; i<bdayArray.length; i++){
    console.log("It is " + bdayArray[i].day + " days until " + bdayArray[i].name + " has to put on the party hat of shame.");
    if (bdayArray[i].day === 0){
     console.log("Party hats! And cake! For EVVVVVVVVVVVEEEEEEEEEERRRRRRRRRRYYYYYYYYYYOOOOOOOOOOOONNNNNNNNNNNNEEEEEEEEEEE"); 
    }
  }
}
 

function main(){
  
  makepeoplearray();
  birthdayReminder();
  bubbleSort();
  makeasentence();
  
}

main();
