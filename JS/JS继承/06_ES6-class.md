# ES6 class 继承

```js
class People {
  constructor(name) {
    this.name = name
  }
  run() { }
}
// extends 相当于⽅法的继承
// 替换了上⾯的3⾏代码
class Man extends People {
  constructor(name) {
    // super 相当于属性的继承
    // 替换了 People.call(this, name)
    super(name)
    this.gender = '男'
  }
  fight() { }
}
```

## extends 实现

```js
function _inherits(subType, superType) {
  // 创建对象，Object.create 创建⽗类原型的⼀个副本
  // 增强对象，弥补因重写原型⽽失去的默认的 constructor 属性
  // 指定对象，将新创建的对象赋值给⼦类的原型 subType.prototype
  subType.prototype = Object.create(superType && superType.prototype, {
    constructor: { // 重写 constructor
      value: subType,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superType) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subType, superType)
      : subType.__proto__ = superType;
  }
}
```

## 继承的使⽤场景
- 不要仅仅为了使⽤⽽使⽤它们，这只是在浪费时间⽽已。
- 当需要创建 ⼀系列拥有相似特性的对象 时，那么创建⼀个包含所有共有功能的通⽤对象，然后在更特殊的对象类型中继承这些特性。
- 应避免多继承，造成混乱。

> 考虑到JavaScript的⼯作⽅式，由于原型链等特性的存在，在不同对象之间功能的共享通常被叫
做 委托 - 特殊的对象将功能委托给通⽤的对象类型完成。这也许⽐将其称之为继承更为贴切，因为
“被继承”了的功能并没有被拷⻉到正在“进⾏继承”的对象中，相反它仍存在于通⽤的对象中。