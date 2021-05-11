//Exercícios

//1- Declare uma variável de nome weight
/*
let weight
*/

//2- Qual o tipo da variável?
/*
console.log(typeof weight)
*/

// 3- Declare uma variável e atribua valores para cada um dos dados:
//   *name: String
//   *age: Number (interger)
//   *stars: Number (float)
//   *isSubscribed: Boolean

/*
let name = Pedro;
let age = 29;
let stars = 4.9;
let isSubscribed = true;
*/

// 4- A variável studant abaixo é de que tipo de dado?
//   4.1 Atribua a ela as propriedades e valores do exercício 3.
//   4.2 Mostre no console a seguinte mensagem:

//       <name> de idade <age> pesa <weight> Kg.
//       Substitua <name><age><weight> pelos valores de cada propriedade do objeto

let studant = {
  name: "Pedro",
  age: 29,
  stars: 4.9,
  weight: 98,
  isSubscribed: true,
};

console.log(`${studant.name} de idade ${studant.age} pesa ${studant.weight}`);

//5- Declare uma variável de tipo array, de nome studants sem nenhum valor
/*
let studants = [];
*/

//6- Reatribua o valor da variável acima colocando dentro dela o objeto studant do exercício 4.
/*
studants = [
  studant
]

console.log(studants[0])
*/

//7- Coloque no console o valor da posição zero do array acima
/*
console.log(studants[0])
*/

//8- Crie um novo studant e coloque na posição 1 de studants
/*
let studant2 = {
  name: "Maria",
  age: 23,
  stars:  1.9,
  weight: 60,
  isSubscribed: true
};

studants[1] = studant2

console.log(studants)
*/

//9- Sem rodar o código abaixo, responda qual a resposta do console e pq?

// console.log(a)

// var a = 1

/*
Undefined, pq ela vai sofrer elevação (hoisting) por ser var.
*/
