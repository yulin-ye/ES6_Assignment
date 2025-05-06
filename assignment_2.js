//Assignment 2
const add = () => {
  return a + b;
}
//箭头函数没有自己的this, 它只能用上一级作用域的this作为自己的this,而常规函数的this绑定调用函数的对象
//例如
const obj = {
  username: 'John',
  sayHello: function () {
    const print = () => {
      console.log(this) //obj
    }
    print()
  }
}

//apply, call 等函数对箭头函数无用，不能改变箭头函数this的绑定。
//例如
const obj2 = {
  num: 100
}

globalThis.num = 42

const sum = (a,b,c) => this.num + a + b + c

console.log(sum.call(obj2, 1,2,3)); // 48