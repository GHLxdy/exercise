/**
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为 We Are Happy.则经过替换之后的字符串为 We%20Are%20Happy。
 */
function replaceSpace(str) {
  return str.replace(/\s/g,'%20')
}
console.log(replaceSpace('We Are Happy'))