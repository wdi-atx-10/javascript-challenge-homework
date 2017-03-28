// var sequence = [0, 1];
// var stop = 100;

// // Skip the first two positions since they're already defined
// for (var i=2; i<=stop; i++) {
//   sequence[i] = sequence[i-2] + sequence[i-1];
// }



// console.log(sequence.join());

//// mathematical sequence  begings 0 1 1, 2, 3, 5, 8, 13, 21 etc...

function fib(n) {
  var f = [0,1];
  var stop = 100;

  for(var i = 0; i < n-2; i++){
    f.push( f[i] + f[i+1] );
  }
    return f;
}

fib(100)
