// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

function prepend(arr, item) {
  let newArr = arr.slice()
  newArr.unshift(item)
  return newArr
}

console.log(prepend([1,2,3,4],9))