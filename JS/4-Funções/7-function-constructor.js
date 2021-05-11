/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + "andando"
  }
}

const joao = new Person("João")
const pedro = new Person("Pedro")

console.log(joao.walk())
console.log(pedro.walk())
