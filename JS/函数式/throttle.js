/**
 * 防抖
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
function throttle(fn, delay) {
  let lastTime = 0
  let nowTime = 0
  return function () {
    const args = Array.prototype.slice.call(arguments)
    const that = this
    nowTime = Date.now()
     if (lastTime && nowTime - lastTime < delay) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        lastTime = nowTime
        fn && fn.apply(that,args)
      },delay)
     } else {
       lastTime = nowTime
      fn && fn.apply(that,args)
    }
  }
}