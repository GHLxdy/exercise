/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，
 * 该数组的最小值为 1。 NOTE：给出的所有元素都大于 0，若数组大小为 0，请返回 0。
 */

function minNumberInRotateArray(array) {
  if (array.length === 0) {
    return 0
  }
  let left = 0
  let right = array.length - 1
  while (right - left > 1) {
    let mid = Math.floor((left + right) / 2)
    if (array[mid] > array[right]) {
      left = mid
    } else {
      right = mid
    }
  }
  return Math.min(array[left], array[right])
}

console.log(minNumberInRotateArray([3, 4, 5, 1, 2]))