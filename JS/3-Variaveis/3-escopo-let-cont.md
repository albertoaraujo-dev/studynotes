# Scope (Escopo)

## const e let

* são locais e só funcionam no escopo onde foram criadas, não sofrem o hoisting

<script>

  console.log("> existe x antes do bloco?", x) //error x não está definido (fora do escopo)

  {
    let x = 0 // let não sofre o hoisting (elevação)
    console.log("> existe x dentro do bloco?", x) // x = 0
  }

  console.log("> existe x depois do bloco?", x) //error x não está definido (fora do escopo)

</script>

<script>
  const y = 1 //variáveis constantes não podem ser alteradas
  {
    y = 0 //error (tentar alterar o valor de uma variável constante)
    const y = 0 // outra variável y em escopo diferente (não são a mesma variável)
    console.log("existe y", y)
  }
</script>
