// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组


function concat(arr1, arr2) {
  let newArr = arr1.slice()
  newArr.push(...arr2)
  return newArr
}


console.log(concat([1,2,3,4],[7,8,9,10]))