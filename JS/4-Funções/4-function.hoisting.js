// function hoisting

sayMyName()

sayMyName = function () {
  console.log("Pedro")
}

// não sofre elevação se usar palavra chave const, var, let
//(vai elevar como variável e não como função)
sayMyName()

const sayMyName = function () {
  console.log("Pedro")
}
