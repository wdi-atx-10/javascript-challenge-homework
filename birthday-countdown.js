
var ms = 1000 * 60 * 60 * 24;
var input =  new Date('12/12/1990');
var a = input.getTime();
var current = Date.now();
function daysUntilDate(input,current ){
  var diff = (current - a)
  return Math.ceil((diff/ ms) - 1);
}
  birthdays = [
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ];
  for(var i=0;i<birthdays.length;i++){
    birthdays[i].dob = new Date(birthdays[i].dob).setYear(2017)
    birthdays[i].dob = Math.ceil(((new Date(birthdays[i].dob).getTime() - current) / ms) - 1);
    console.log(birthdays[i].name + 's bithday is in: ' + birthdays[i].dob + ' days');
  }

 console.log('It has been: ' + daysUntilDate() + ' days since, ' + input);
