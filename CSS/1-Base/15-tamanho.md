# Tamanho da caixa (box-sizing)

* content-box (calculado a partir do conteúdo)
* border-box (calculado a partir da borda)

- Como será calculado o tamanho total da caixa?
  - O padrão é <style>div { box-sizing: content-box; } </style>
  - Uma prática comum é alterar essa propriedade no início do CSS <style>* { box-sizing: border-box; }</style>