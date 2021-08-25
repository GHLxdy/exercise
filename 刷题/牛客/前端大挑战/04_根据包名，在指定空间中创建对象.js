// 描述
// 根据包名，在指定空间中创建对象
// 输入描述：
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述：
// {a: {test: 1, b: {c: {d: {}}}}}


function namespace(oNamespace, sPackage) {
  let keys = sPackage.split('.')
  keys.reduce((a, b) => {
    console.log(a,b)
    if (!a[b] || typeof a[b] !== 'object') {
      a[b]={}
    }
    return a[b]
  }, oNamespace)
  return oNamespace
}
let obj = {a: {test: 1, b: 2}}
namespace(obj, 'a.b.c.d')
console.log(obj)