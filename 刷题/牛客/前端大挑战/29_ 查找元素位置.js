// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
  const res = []
  arr.forEach((ele, index) => {
    if (ele === target) {
      res.push(index)
    }
  })
  return res
}

console.log(findAllOccurrences(['a','b','c','d','e','f','a','b','c'],'a'))