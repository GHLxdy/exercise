/**
 * 给定一个 double 类型的浮点数 base 和 int 类型的整数 exponent。求 base 的 exponent 次方。
 * 保证 base 和 exponent 不同时为 0
 */


// function Power(base, exponent) {
//   let res = 1, n;
//   if (exponent > 0) {
//     n = exponent
//   } else if (exponent < 0) {
//     n =-exponent
//   } else {
//     return 1
//   }
//   while (n--) {
//     res *=base
//   }
//   return exponent > 0 ? res : 1/res
// }

function Power(base, exponent) {
  let n,res = 1
  if (exponent > 0) {
    n = exponent
  } else if (exponent < 0) {
    n =-exponent
  } else {
    return 1
  }
  while (n) {
    if (n & 1)
      res *= base
    base *= base
    n = n >> 1
  }
  return exponent > 0 ? res : 1 / res
}

console.log(Power(2,-2))