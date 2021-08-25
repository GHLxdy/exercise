// function sum(arr) {
//   return arr.reduce((a,b)=> a+b,0)
// }

function sum(arr) {
  var sum = 0;
  for (var i = 0;i < arr.length;i++) {
    sum += arr[i];
  }
  return sum;
}