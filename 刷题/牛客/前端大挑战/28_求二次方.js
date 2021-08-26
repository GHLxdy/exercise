// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

function square(arr) {
  return arr.map(item => item * item)
}

console.log(square([1, 2, 3, 4]).join(' '))