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



var characterCountarray = [];

for (var i = 0; i<26; i++){
  characterCountarray.push(0);
}


var testsentence = prompt("put in a sentence you putz", "")
testsentence = testsentence.toUpperCase();
console.log(testsentence);

for(var i = 0; i < testsentence.length; i++){
  var charcodeval = testsentence.charCodeAt(i);
  if (charcodeval >= 65 && charcodeval <= 90){
    characterCountarray[charcodeval-65]++;
  }
}

console.log(characterCountarray);
var totalpercent = 0;


for (var i = 0; i<26; i++){
  totalpercent = characterCountarray[i] + totalpercent;
}

if (totalpercent>0) {
  for (var i = 0; i<26; i++){
    characterCountarray[i] = characterCountarray[i]/totalpercent;
  }
  console.log(characterCountarray);
}else{
  console.log("You have not printed any alphabetic characters");
}
