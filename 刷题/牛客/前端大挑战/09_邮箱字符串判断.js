function isAvailableEmail(sEmail) {
  const reg =  /^[0-9a-zA-Z_.]{1,}@[a-zA-Z0-9_.]{1,}[a-zA-Z0-9]{2,4}$/
  return reg.test(sEmail)
}

console.log(isAvailableEmail('109129.1816@qq.com.cn'))