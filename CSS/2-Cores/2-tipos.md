# Tipos de uso de cores

<style>
  element{
    /* keyword values*/
    color: currentcolor;

    /*<named-color> values*/
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0 até F (hexadecimal)*/

    /* RED GREEN BLUE*/
    color: #090;
    color: #009900;
    /* ALFA (transparência)*/
    color: #090a;
    color: #009900aa;

    /* rgb() values 0 até 255*/
    color: rgb(34, 12, 64, 0.6);
    color: rgba(34, 12, 64, 0.6);
    color: rgb(34, 12, 64 / 0.6);
    color: rgba(34, 12, 64 / 0.3);
    color: rgb(34, 12, 64 / 60%);
    color: rgba(34, 12, 64 / 30%);

    /* hsl() values
    /* Hue - Saturation - Lightness */
    color: hsl(30, 100%, 50%, 0.6);
    color: hsla(30, 100%, 50%, 0.6);
    color: hsl(30 100% 50% / 0.6);
    color: hsla(30 100% 50% / 0.6);
    color: hsl(30.0 100% 50% / 0.6);
    color: hsla(30.2 100% 50% / 0.6);

    /*Global values*/
     /*herdar a cor do contexto anterior*/
    color: inherit;
    /*cor inicial*/
    color: initial;
    /*tirar a cor (vai pegar a do contexto anterior)*/
    color: unset;
  }
</style>