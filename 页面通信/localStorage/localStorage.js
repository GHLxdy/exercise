// A
localStorage.setItem('testB', 'sisterAn');

// B 页面使用 setInterval 时刻监听变化 
let testB = localStorage.getItem('testB');
console.log(testB)
// sisterAn