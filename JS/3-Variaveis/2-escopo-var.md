# Scope (Escopo)

* Escopo determina a visibilidade de alguma variável no JS

## Block statement

<script>
// vamos iniciar um bloco
{
  //aqui dentro do bloco podemos colocar qualquer código
} // aqui fecha o bloco
</script>

* O bloco também criará um novo escopo, chamamos de `bloc-scoped`

## var

* var é global e também local e poderá funcionar fora de um escopo de bloco
* em aplicações modernas não é recomendável o uso (use let e const)

<script>
  console.log("> existe x antes do bloco?", x) //undefined

  {
    var x = 0 // quando é usado var, x sofre o hoisting (elevação), porém não tem valor
  }

  console.log("> existe x depois do bloco?", x) //x = 0
</script>