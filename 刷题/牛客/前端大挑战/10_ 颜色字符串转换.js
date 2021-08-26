// 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// 1. rgb 中每个 , 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入

// 'rgb(255, 255, 255)'
// 输出：
// #ffffff

function rgb2hex(sRGB) {
  // 正则验证字符串
  const reg = /^rgb\(\d+,\s*\d+,\s*\d+\)$/
  if (!reg.test(sRGB)) return sRGB
  // 取出数字
  const arr = sRGB.match(/\d+/g)
  return arr.reduce((a, b) => {
    return a + ('0'+Number(b).toString(16)).slice(-2)
  },'#')
}

console.log(rgb2hex('rgb(255, 255, )'))