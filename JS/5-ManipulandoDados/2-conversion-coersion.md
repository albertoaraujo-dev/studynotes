# Alteração de um tipo de dado para outro

## Type conversion (typecasting)

* Capacidade do programador de causar uma troca do tipo de dado
* As vezes o javascript também pode usar conversion

<script>
  // resulta em 14 (mudamos o 9 para Number usando uma função)
  console.log(Number('9') + 5) 
</script>

## Type coersion

* Javascript implicitamente força a troca do tipo de dado

<script>
  // resulta em 95 (javascript mudou o 5 para string e concatenou)
  console.log('9' + 5)  
</script>
