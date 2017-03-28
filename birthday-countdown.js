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
