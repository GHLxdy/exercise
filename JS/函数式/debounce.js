/**
 * 节流
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
function debounce(fn, delay) {
  let timer = null
  return function () {
    const args = Array.prototype.slice.call(arguments)
    const that = this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn && fn.apply(that,args)
    },delay)
  }
}