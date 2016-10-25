function reverseByCenter(s){
  // ...
  var slicer = s.length % 2 === 0 ? s.length / 2 : (s.length-1) / 2; 
  var h1 = s.slice(0, slicer); // first half
  var h2 = s.slice(-slicer); // second half
  var res = h2 + h1; // potential result(is result if even)
  return res.length === s.length ? res : res = h2+ s.slice(slicer, -slicer) + h1;
  // return, check if return value is same length as input
  // if yes, return it
  // else, add the middle bit between the two bits
}
