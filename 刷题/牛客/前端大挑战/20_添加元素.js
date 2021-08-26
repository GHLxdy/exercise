// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
function append(arr, item) {
  let newArr = arr.slice()
  newArr.push(item)
  return newArr
}

console.log(append([1,2,3,4],9))