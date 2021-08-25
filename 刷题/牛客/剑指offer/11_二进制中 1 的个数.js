/**
 * 输入一个整数，输出该数二进制表示中 1 的个数。其中负数用补码表示。
 */


// function NumberOf1(n) {
//   let count = 0
//   while (n) {
//     n = n & (n - 1)
//     count++
//   }
//   return count
// }

function NumberOf1(n) {
  let count = 0, flag = 1
  while (flag) {
    // 循环的次数等于整数二进制的位数，32位的整数需要循环32位
    if (flag & n) count++
    flag = flag << 1
  }
  return count
}

console.log(NumberOf1(7))