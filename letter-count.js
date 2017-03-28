/*
  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:
  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```
  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html
    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```
*/

// YOUR CODE HERE

// var y = 1989;
// var m = 3;
// var d = 23;

// function getDifference(y,m,d) {
//   var date = y + '.' + m + '.' + d;
//   console.log(date)
//   var difference = ((new Date().getTime() - new Date(date).getTime() / 1000) / 60 ) / 60) / 24) / 365);
//   var seconds = difference / 1000;
//   var minutes
//   var hours
//   var days
//    var years
//   return Math.floor(difference) + 'years!';
// getDifference(y,m,d)
// }

/*
 -  Create a function `letterCount` that accepts a string, and finds the number of times each letter
 -  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
 -  occurrences of the letters "a", "p", "l" and "e" and then return the following output:
 -  ```javascript
 -  {
 -    "a": 1,
 -    "p": 2,
 -    "l": 1,
 -    "e": 1
 -  }
 -  ```
 -  Bonuses
 -  - Make sure that lower case letters and upper case letters count for the same character.
 -  - Ignore spaces, special characters, and punctuation.
 -  - Instead of just counting letters, calculate their percent-based frequency.
 -    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html
 -    ```javascript
 -    {
 -      "a": 0.2, // percent
 -      "p": 0.4,
 -      "l": 0.2,
 -      "e": 0.2
 -    }
 -    ```
 -*/

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
