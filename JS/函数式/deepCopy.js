function deepCopy(obj) {
  if (obj == null || typeof obj !== 'object') {
    // 如果不是引用类型直接返回
    return obj
  }
  let result = null
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
      // 保证 key 不是原型的属性
    if (!Object.hasOwnProperty(obj, key)) {
      // 递归
      result[key] = deepCopy[obj[key]]
    }
  }
  return result
}