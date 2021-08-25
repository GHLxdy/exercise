/**
 * 给定字符串 str，检查其是否以元音字母结尾
 * 1、元音字母包括 a，e，i，o，u，以及对应的大写
 * 2、包含返回 true，否则返回 false
 */

function endsWithVowel(str) {
  if (str === '') return false
  const yuan = ['a', 'e','i','o','u']
  let end = str[str.length - 1].toLocaleLowerCase()
  return yuan.indexOf(end) > -1
}

console.log(endsWithVowel('gorillA'))