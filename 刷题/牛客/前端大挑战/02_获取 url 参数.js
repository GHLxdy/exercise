
/**
描述
获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组
4. 不支持URLSearchParams方法
输入：http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key
输出：[1, 2, 3]
*/
function getUrlParam(sUrl, sKey) {
  let params = sUrl.split("#")[0].split('?')[1]
  let strs = params.split('&')
  let obj = {}
  let len = strs.length
  for (let i = 0;i < len;i++) {
    let temp = strs[i].split("=")
    if (!obj[temp[0]]) {
      obj[temp[0]] = []
    }
    obj[temp[0]].push(temp[1])
  }
  if (sKey) {
    let attrs = obj[sKey]
    if (!attrs || attrs.length == 0) {
      return ''
    } else if (attrs.length == 1) {
      return attrs[0]
    } else if (attrs.length > 1) {
      return attrs
    }
  } else {
    return obj
  }
}

let a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'abc')
console.log(a === '')