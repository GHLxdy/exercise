/**
 * 大家都知道斐波那契数列，现在要求输入一个整数 n，请你输出斐波那契数列的第 n 项。 n<=39
 */


// 斐波那契数列 0,1,1,2,3,5,8,...

// 方法一：1. 动态规划
// 动态规划的特点是：最优子结构、无后效性、子问题重叠。
// function Fibonacci(n) {
//   let f = 0,
//     g = 1;
//   while (n--) {
//     g += f;
//     f = g - f; // 先计算后一项，再依据后一项得到前一项
//   }
//   return f;
// }

// 方法2：递归实现
function Fibonacci(n) {
  if (n == 0) {
    return 0
  }
  if (n == 1 || n == 2) {
    return 1
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2)
}
console.log(Fibonacci(3) === 2)
console.log(Fibonacci(4) === 3)
console.log(Fibonacci(5) === 5)
console.log(Fibonacci(6) === 8)
console.log(Fibonacci(7) === 13)
console.log(Fibonacci(8) === 21)