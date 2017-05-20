

// YOUR CODE HERE

function letterCount(word) {
  var letters = {};
  for(var i=0; i<word.length; i++){
    letters[word[i]] = letters[word[i]] + 1 || 1;
  }
  return letters;
}

console.log(letterCount('right now i must find the way to the nearest bathroom'))
