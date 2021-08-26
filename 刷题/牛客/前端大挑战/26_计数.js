// 统计数组 arr 中值等于 item 的元素出现的次数


function count(arr, item) {
  let res = 0
  arr.forEach(ele => {
    if (ele === item) {
      res++
    }
  })
  return res
}

console.log(count([1, 2, 4, 4, 3, 4, 3], 4))