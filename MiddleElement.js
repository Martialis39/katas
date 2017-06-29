//Find the Middle Element Kata 

<!-- As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

-->

var gimme = function (inputArray) {
  
  let arr = inputArray.map(function(e, i){
      return [[e],[i]]
      
  }).sort(function(a,b){
    return a[0] - b[0];
    })
  
  return Number(arr[1][1]);
};
