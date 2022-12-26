# Outros estilos de CSS para textos
  * Nem todas as fontes aceitam todas as propriedades
  * font-variant
    - Variações na apresentação da fonte ex: small-caps (todo o texto em caixa-alta, mas mantém as letras maiúsculas maiores)
  * font-stretch
    - Alargamento ou encolhimento da fonte.
    - Aceita palavra-chaves como: expanded, condensed, normal.
    - Aceita porcentagem de 50% a 200%
  * letter-spacing
    - Espaçamento entre as letras
  * word-spacing
    - Espaçamento entre as palavras
  * line-height
    - Espaço entre as linhas.
    - Pode ser com unidades ou sem unidades de medida
    - Comuns: 1.5 ou 2
  * text-transform
    - Transformação do texto
    - capitalize | lowercase | none
  * text-decoration
    - aparência decorativa de um texto
    - line
      - underline | overline | line-through
        - linhas no texto, embaixo, em cima, no meio
        - podemos estilizar também as linhas com style
    - style
      - wavy | dotted | double | dashed | solid
    - color
      - cor da linha
  * text-align
    - alinhamento do texto
    - left | right | center | justify
  * shorthand
    - separados por espaço

<style>
  p{
    font-variant: small-caps; /*todo o texto em caixa alta, mas mantém as letras verdadeiramente maiúsculas maiores*/
    font-stretch: condensed;
    letter-spacing: 1em;
    word-spacing: 1em;
    line-height: 1.6;
    text-transform: uppercase; /*Texto em caixa alta*/
    text-decoration: underline solid red;/*linha embaixo | sólida | vermelha*/
    text-align: center;
    text-shadow: 1px 1px 1px green; /*offset-x | offset-y | blur-radius | color*/
    font: italic 2em/2 Helvetica, Arial, sans-serif; /*size e line-height são separados por barra*/
  }
</style>
  