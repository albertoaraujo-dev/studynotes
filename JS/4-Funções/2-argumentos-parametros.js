// anonymous function expression (expressão de função anônima (sem parâmetros))

// parameters (parâmetros)
const sum = function (number1, number2) {
  total = number1 + number2;

  //quando a função não tem return ela retorna undefined
  return total;
};

let number1 = 33;
let number2 = 25;

// arguments (argumentos para execução da função)
sum(number1, number2);

console.log(`O número 1 é ${number1}`);
console.log(`O número 1 é ${number1}`);
console.log(`A soma é ${sum(number1, number2)}`);

console.log(total);

/*
  não criar variáveis sem usar palavra chave ( podem gerar problemas,
  pois ela passa a existir depois de rodar a função)
*/
