# background (fundo)

<style>
  * {
    margin: 0;
  }

  header {
    height: 100px;
    border: 7px dashed red;
    padding: 16px;

    background-color: rgb (55, 100, 50);
    background-image: url(https://source.unsplash.com/random);
    background-repeat: no-repeat;
    background-position: center;

    /* tamanho */
    background-size: contain;
    background-size: cover;
    background-size: 50% 25%; /* largura | altura*/
    background-size: 100px;
    background-size: 3rem;

    /*origem do começo da imagem*/
    background-origin: content-box;/* padrão*/
    background-origin: border-box; /*começa da borda */
    background-origin: padding-box; /*começa do padding */

    /*muda tanto a cor como a imagem*/
    background-clip: border-box;
    background-clip: content-box;
    background-clip: padding-box;
    /* Principais valores */
    background-attachment: scroll; /*padrão*/
    background-attachment: fixed;
    background-attachment: local;

    /*shorthand*/
    background: rgb (55, 100, 50) url(https://source.unsplash.com/random) no-repeat center top / 50px border-box content-box fixed;

    /*gradiente*/
    /*começa de cima para baixo*/
    background: linear-gradient(red, yellow, green);
    /* podemos alterar o ângulo */
    background: linear-gradient(45deg, red, yellow, green);

    /*gradiente circular*/
    background: radial-gradient(red, yellow);

    /*múltiplos backgrounds separados por vírgula*/
    background: linear-gradient(45deg, red, yellow, green), 
    rgb (55, 100, 50) url(https://source.unsplash.com/random) no-repeat center top / 50px border-box content-box fixed;
  }
</style>