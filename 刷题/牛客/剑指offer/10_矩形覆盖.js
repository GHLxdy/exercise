/**
 * 我们可以用 2 * 1 的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用 n 个 2 * 1 的小矩形无重叠地覆盖一个 2 * n 的大矩形，总共有多少种方法？
 */

// 1个：1
// 2个：2
// 3个：3
// 4个：5


// 同样是斐波那契数列
// 递归
// function rectCover(n) {
//   if(n==0) return 0
//   if (n == 1 || n == 2) {
//     return n
//   }
//   return rectCover(n-1) + rectCover(n-2)
// }

// 动态规划
function rectCover(n) {
  if(n==0) return 0
  let f = 1, g = 2
  while (--n) {
    g = g + f
    f = g - f
  }
  return f
}
console.log(rectCover(5)) 