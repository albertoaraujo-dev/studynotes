## Espaços entres os elementos

* margin-top | margin-right | margin-bottom | margin-left
* values: <lenght> | <percentage> | auto

<style>
div {
  /* shorthand */
  margin: 12px 16px 10px 4px; /* todos */
  margin: 12px 16px 0; /* esquerda | direita | embaixo */
  margin: 8px 16px; /* esquerda/direita | cima/embaixo */
  margin: 8pix; /* todos */

}
</style>

- Cuidado com margin collapsing (top se junta ao bottom)
  - Quando um elemento está ao lado do outro, não acontece
- O navegador coloca margem por padrão
- Uma prática comum é alterar essa propriedade no início do CSS <style>* { margin: 0; }</style>