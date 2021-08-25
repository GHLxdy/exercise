/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
 * 判断数组中是否含有该整数。
 */

function find(target, array) {
  const ylen = array.length
  const xlen = array[0].length
  if (ylen === 0 && xlen === 0) {
    return false
  }
  let col = 0;
  let row = ylen - 1;
  while (row >= 0 && col <= xlen - 1) {
    if (array[row][col] > target) {
      row--
    } else if (array[row][col] < target) {
      col++
    } else {
      return true
    }
  }
  return false
}

const target = 5
const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(find(target, array))

// 二次分查找加快查询
function findByBinary(target, array) {
  const ylen = array.length
  const xlen = array[0].length
  if (ylen === 0 && xlen === 0) {
    return false
  }
  let col = 0;
  let row = ylen - 1;
  row = binary_search(array, target)
  while (row >= 0 && col <= xlen - 1) {
    if (array[row][col] < target) {
      col++
    } else {
      return true
    }
  }
  return false
}

function binary_search(arr, key) {
  var low = 0,
    high = arr.length - 1;
  while (low <= high) {
    var mid = Math.floor((high + low) / 2);
    if (key === arr[mid][0] || (key > arr[mid][0] && key < arr[mid+1][0])) {
      return mid;
    } else if (key > arr[mid][0]) {
      low = mid + 1;
    } else if (key < arr[mid][0]) {
      high = mid - 1;
    } else {
      return -1;
    }
  }
  return -1;
};