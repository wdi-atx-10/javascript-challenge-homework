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
      },
      {
        name: "James",
        dob: "6/07/1985"
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
  birthdayArray[i].daysUntilBirthday = diff;

  }
  birthdayArray.sort(function(a,b){
    return parseFloat(a.daysUntilBirthday) - parseFloat(b.daysUntilBirthday);
  });
  for (i=0,x=birthdayArray.length;i<x;i++){
      console.log(birthdayArray[i].name + "'s birthday is in "+ birthdayArray[i].daysUntilBirthday + ' days.');
  }
}

main();
