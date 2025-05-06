//Assignment 1
let name = "Alice";


if (true) {
  let name = "Bob";
  console.log(name);
}

console.log(name);
/*
let 和 const 都是块级作用域，if 条件里对name的改动影响不到外边,if 在这里是起作用的。var 是全局作用域或者说是函数作用域
if 条件里对name的改动会影响到外边，if 条件相当于没起作用，容易产生bug.
*/
