var words = ["ground", "control", "to", "major", "tom"];
function map(arr, letterCounter){
 var output = [];
 for (i = 0; i < arr.length; i++) {
   output.push(letterCounter(arr[i]));
 }
 return output;
}
function findLength(word){

 return word.length;
}
console.log(map(words, findLength));



/* ALTERNATIVE SOLUTION

var words = ["ground", "control", "to", "major", "tom"];



function map(arr, letterCounter) {
  var newMap = [];
  for (var i = 0; i < arr.length; i++) {
  newMap.push(letterCounter(arr[i]));
  }
  return newMap;
}

console.log(map(words, function(word) { return word.length }));

*/
