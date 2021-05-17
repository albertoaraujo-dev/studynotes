# Manipulação de dados

## Strings and Numbers

<script>
  // string para number
  let string = "123"
  console.log(Number(string))

  // number para string
  let number = 123
  console.log(String(number))
</script>

## Contar o número de caracteres tem uma palavra

<script>
  let word = "Paralelepipedo"
  consolo.log(word.length)
  
  // number não recebe .length, então precisamos converter
  let number = 1234
  console.log(String(number).length)
</script>

## Casas decimais e ponto por vírgula

* um objeto do tipo número pode ter um método toFixed
* o retorno é uma string, então podemos atrelas mais métodos

<script>
  let number = 345.33452345
  // fixa as casas decimais para 2
  console.log(number.toFixed(2).replace(".", ",")) //troca . por ,
</script>

## Letras maiúsculas e minúsculas

<script>
  let word = "Programar é muito bom"
  // deixa tudo maiúsculo
  console.log(word.toUpperCase())
  // deixa tudo minúsculo
  console.log(word.toLowerCase())
</script>

## String e Arrays

<script>
  let phrase = "Eu quero viver o amor!"
  // transforma em array usando espaço como parâmetro
  let myArray = phrase.split(" ")
  console.log(myArray)

  // transforma em string usando underscore como parâmetro
  let phraseWithUnderscore = myArray.join("_")
  console.log(phrasesWithUnderscore)
  
</script>
