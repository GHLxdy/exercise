
function fibonacci(n) {
  if (n == 1 || n == 2) return 1
  
  return fibonacci(n-1) + fibonacci(n-2)
}

function fibonacci(n) {
   let f=0,g=1
   while(n--){
      g = g + f
      f = g - f
   }
    return f
}

console.log(fibonacci(10))