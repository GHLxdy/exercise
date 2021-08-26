function strLength(s, bUnicode255For1) {
  let len = s.length
  if (!bUnicode255For1) {
    for (let i = 0;i < s.length;i++){
      // charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。
      if (s.charCodeAt(i) > 255) {
        len++
      }
    }
  }
  return len
}

console.log(strLength('hello world, 牛客',false))