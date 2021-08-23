// criar app de frases motivacionais

//function statement (declaração da função)
function createPhrases() {
  console.log('Estudar é bom');
  console.log('Paciência e persistência');
  console.log('Revisão é a mãe do aprendizado');
}

/*
  execute (executar a função)
    - run, call, invoke (rodar, chamar, invocar)
*/
createPhrases();

console.log('Fim do Programa');

// função liquidificador
function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2;
}

const copo = fazerSuco('banana', 'maça');

console.log(copo);
