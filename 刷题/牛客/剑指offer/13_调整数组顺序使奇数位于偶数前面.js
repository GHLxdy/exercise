/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */

function reOrderArray(array) {
  const odds = [], evens = []
  for (let i = 0;i < array.length;i++){
    if (array[i] % 2 === 1) {
      odds.push(array[i])
    } else {
      evens.push(array[i])
    }
  }  
  return odds.concat(evens)
}

function reOrderArray(array) {
  const res = []
  let oddlen = 0, oddbegin = 0
  for (let i = 0;i < array.length;i++){
    if (array[i] % 2 === 1) {
      oddlen++
    }
  }
  for (let i = 0;i < array.length;i++){
    if (array[i] % 2 === 1) {
      res[oddbegin++] = array[i]
    } else {
      res[oddlen++] = array[i]
    }
  }
  return res
}
const array = new Array(1000).fill(0).map((item,index)=>index)
reOrderArray(array)