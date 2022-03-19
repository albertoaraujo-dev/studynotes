# Funções

Em programação, funções são reconhecidas por causar um
reaproveitamento de código.

* rgb()
* hsl()
* url()
* calc()

<!--código html>-->
<div class="caixa"></div>

<!--código css>-->
<style>
  body{
    /*o body não vem com altura definida por padrão*/
    height: 100vh;
    /*o navegador coloca margem por padrão*/
    margin: 0;
  }
  .caixa {
    height: calc(50% + 20px);/*função de cálculo*/
    width: 400px;
    background-image: url(https://source.unsplash.com/random);
    background-position: bottom right; /*position*/
  }
</style>
