function sum (...arr) {
  let result = 0

  for(const arg of arr) {
    result += arg
  }

  return result
}

console.log(sum(1,2,3,4,5,6))

let arr1 = [1, 2]
let arr2 = [3, 4]

console.log([...arr1, ...arr2]);