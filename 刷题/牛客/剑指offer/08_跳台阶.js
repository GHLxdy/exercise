/**
 * 一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级。
 * 求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 */

// 1级: 1种
// 2级: 2种
// 3级: 3种
// 4级: 5种
// ...
// 分析可得是 斐波那契数列，所以可以直接使用 07的代码


// 方法一：1. 动态规划
// function jumpFloor(n) {
//   let f = 0,
//     g = 1;
//   while (--n) {
//     g += f;
//     f = g - f; // 先计算后一项，再依据后一项得到前一项
//   }
//   return f;
// }

// 方法2：递归实现
function jumpFloor(n) {
  if (n == 0) {
    return 0
  }
  if (n == 1 || n == 2) {
    return 1
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2)
}