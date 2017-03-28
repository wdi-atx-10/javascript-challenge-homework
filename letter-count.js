var string = 'apple';

letterCount(string);



function letterCount(string){
  var lowerCase = string.toLowerCase();
  var noSpaces = lowerCase.replace(/\s/g, '');
  var noPuncuation = noSpaces.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  var stringArray = noSpaces.split('');
  var letters = {};
  for (var i = 0, x = stringArray.length; i<x;i++){
    if (!letters[stringArray[i]]){
      letters[stringArray[i]] = 1/x;
    } else{
      letters[stringArray[i]]+=1/x;
    }
  }
  console.log(letters);
}
