Array.prototype.uniq = function () {
  let arr = []
  let hasNaN = false
  this.forEach(item => {
    if (Number.isNaN(item)) {
      if (!hasNaN) {
        arr.push(item)
        hasNaN = true
      }
    } else if(arr.indexOf(item)==-1) {
       arr.push(item)
    }
  })
  return arr
}

console.log([true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq())