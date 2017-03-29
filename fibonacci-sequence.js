var sequence = [0, 1];
var stop = 100;

// Skip the first two positions since they're already defined
function fib(a) {
  var f = [0,1];

  for (var i=2; i<=a; i++) {

    sequence.push( sequence[i] + sequence[i+1]);
  }
  return sequence;
}

fib(stop);


console.log(sequence.join());
