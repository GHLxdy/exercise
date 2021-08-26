// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组

// 输入：[1, 2, 3, 4], 'z', 2
// 输出：[1, 2, 'z', 3, 4]


function insert(arr, item, index) {
  let newArr = arr.slice()
  newArr.splice(index, 0, item)
  return newArr
}

console.log(insert([1, 2, 3, 4], 'z', 2))