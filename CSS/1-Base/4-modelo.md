# Box model (modelo de caixas)

  * quase tudo no CSS são caixas
  * toda caixa tem conteúdo dentro dela, espaços fora dela, espaços entre elas
  * podem ficar ao lado da outra, em cima, embaixo
  * elementos HTML são caixas
  * fundamental para fazer layouts para a web
  * maior facilidade para aplicar o CSS

<h1>Evolua rápido</h1>
<p>Descrição</p>
<button>Evoluir</button>

<style>
  h1 {
    border: 1px solid red; /*borda da caixa*/
    margin: 20px; /*preenchimento por fora da caixa*/
    padding: 60px; /*preenchimento por dentro da caixa*/
    width: 100px; /*largura*/
    height: 100px; /*altura*/
    content: "Aqui vem alguma mensagem"; /*conteúdo*/

    /* faz o cálculo do tamanho da caixa ser a partir das bordas
    o padrão é o tamanho ser calculado pelo conteúdo
    o que muda o tamanho, quanto mais preenchido o conteúdo*/
    box-sizing: border-box
  }
</style>
