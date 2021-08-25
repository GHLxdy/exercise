/**
 * 柯里化函数
 * @param {*} fn 
 * @returns 
 */
function curried(fn) {
  return function (...arg) {
    const that = this
    if (arg.length >= fn.length) {
      return fn.apply(that,args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}