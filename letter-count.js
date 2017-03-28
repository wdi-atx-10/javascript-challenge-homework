
function letterCounter(w){
  var word = w;
  var letters={};
for(var i=0;i<word.length;i++){
    if(!letters[word[i]]){
    letters[word[i]]=1/word.length;
    }else{
      letters[word[i]]+=(1/word.length);
    }
  }
console.log(letters);
}
letterCounter('hello')
