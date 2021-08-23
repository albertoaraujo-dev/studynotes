# Resumo

<script>
  // declaration (declaração)
  var name

  // assignment (atribuição de valores)
  name = "João"

  // tipo de dado que foi colocado na variável
  console.log(typeof name)

  let age = 20
  let isHuman = true

  //agrupamento de variáveis
  let age, isHuman 

  age = 20
  isHuman = true

  //múltiplos argumentos na função usando vírgula
  console.log(name, age, isHuman) 

  // concatenação (escrita de texto + variáveis)
  console.log("O " + name " tem " + age " anos.")

  // template literals or template strings (interpolação)
  console.log(`O ${name} tem ${age} anos.`)

  //object
  const person = {
    name: 'João',
    age: 33,
    weight: 88.6,
    isAdmin: true
  }

  // acessar propriedades do objeto
  console.log(`${person.name} tem ${person.age} anos.`)

  //arrays

  const animals = [
    'Lion',
    'Monkey',
    {
      name: 'Cat',
      age: 3
    }
  ]

  // acessar valores do array
  console.log(animals[2])
  // tamanho do array
  console.log(animals.length)
  // acessar propriedade de um objeto dentro de um array
  console.log(animals[2].name)
  // Porém tentamos sempre utilizar o mesmo tipo de dados para um array, para evitar confusão e manter um padrão
</script>

