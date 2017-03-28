var sequence = [0, 1];
var stop = 100;

// Skip the first two positions since they're already defined
for (var i=2; i<=stop; i++) {
  sequence[i] = sequence[i-2] + sequence[i-1];
}

console.log(sequence.join());


function fib(){
  var f = [0,1];

  for(var i=0; i<n; i++){
    f.push(f[i] + f[i+1]);
  }
  return f;
}

fib(100)
