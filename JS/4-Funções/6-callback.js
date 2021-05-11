// callback function (chamar de volta)
// chamar uma função como parâmetro de outra função

function sayMyName(name) {
  console.log("antes de executar a função callback")

  name()

  console.log("depois de executar a função caallback")
}

sayMyName(() => {
  console.log("estou em uma callback")
})
