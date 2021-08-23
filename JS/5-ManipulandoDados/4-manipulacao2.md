# Continuação da manipulação de dados

## Verificar se o texto contém uma determinada palavra

<script>
  let phrase = "Eu quero viver o amor"

  // verifica se Amor existe no texto acima
  console.log(phrase.includes("Amor")) // retorna falso (pois é case sensitive)
</script>

## Criar array com construtor

<script>
  // array padrão
  let myArray = ['a', 'b', 'c']

  //array com construtor
  let myArray = new Array('a', 'b', 'c')// cada argumento vira um elemento
  console.log(myArray)
</script>

## Contar elementos do array

<script>
  console.log([
    "a",
    {type: "array"},
    function(){ return "oi" }
  ].length) // array também possui a propriedade .length assim como a string
</script>

## Transformar string em array

<script>
  let word = "manipulação"
  // transforma todos os caracteres em elementos de um array
  console.log(Array.from(word))
</script>

## Manipulando arrays

<script>
  let techs = ["html", "css", "js"]

// adicionar um item no final
techs.push("nodejs")

// adicionar um item no começo
techs.push("sql")

// remover um item do final
techs.pop()

// remover um item do começo
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // a partir de qual elemento, para qual elemento

// remover um ou mais itens em qualquer posição do array
techs.splice(1,3) // a partir de qual elemento, para qual elemento

// encontrar a posição do elemento no array
let index = techs.indexOf("css")

console.log(techs)
</script>