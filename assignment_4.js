//Assignment 4
const person = {
  name: "Alice",
  age: 25,
  city: "Sydney"
}
const {name, age} = person;

function destruct({name, age}) {
  console.log(name);
  console.log(age);
}

destruct(person);