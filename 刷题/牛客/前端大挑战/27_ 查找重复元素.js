// 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
// 输入：[1, 2, 4, 4, 3, 3, 1, 5, 3]
// 输出：[1, 3, 4]

function duplicates(arr) {
  let res = [], tips = {}
  arr.forEach(item => {
    if (tips[item]) {
      if (tips[item]===1) {
        res.push(item)
      }
      tips[item]++
    } else {
      tips[item]=1
    }
  })
  return res
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))