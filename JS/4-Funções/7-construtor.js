/*
  Function() constructor
    - expressão new
    - criar um novo objeto
    - this keyword
*/

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + 'andando';
  };
}

const ana = new Person('João');
const pedro = new Person('Pedro');

console.log(ana.walk());
console.log(pedro.walk());
