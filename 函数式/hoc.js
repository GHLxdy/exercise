// 高阶函数
/**
 * 询问弹窗
 * @param {string} message 
 * @returns 
 */
function confirmMessage(message) {
  return new Promise((resolve, reject) => {
    const res = window.confirm(message)
    if (res) {
      resolve()
    } else {
      reject()
    }
  })
}

/**
 * 高阶函数：带询问的方法
 * @param {*} fn 
 * @param {*} message 
 * @returns 
 */
export function withConfirm(fn,message) {
  return function () {
    return confirmMessage(message).then(() => {
      fn && fn()
    })
  }
}

// /**
//  * 删除
//  */
// function deleteFun() {
//   console.log('删除')
// }

// /**
//  * 带询问的删除
//  */
// const deleteWithConfirm = withConfirm(deleteFun,'是否删除？')
