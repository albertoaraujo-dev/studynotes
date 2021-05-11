# Variáveis

* Nomes simbólicos
* Atalhos de código
* Identificadores
* 3 Palavras reservadas para criar variáveis
  * var
  * let
  * const

<script>
  var nome = "João"
  let outroNome = "Pedro"
  const clienteID = 3

  console.log(nome, outroNome, clienteID)
</script>

## Tipos Dinâmicos

* Javascript é uma linguagem fracamente tipada e dinâmica
  * Variáveis não precisam ter um tipo previamente definido
  * Podemos mudar o conteúdo da variável

<script>
  let x = 1
  console.log(typeof x) //number

  let x = "João"
  console.log(typeof x) //string
<script>