# .gitignore

* arquivo na raiz do projeto chamado .gitignore
* podemos ignorar pastas ou arquivos que não queremos que vá para o repositório

## ignorar pastas

* para ignorar pastas podemos colocar o nome da pasta (bom colocar / no final para ficar fácil de saber que é uma pasta)
  * Ex: node_modules/

## ignorar arquivos

* para ignorar arquivos pode usar o nome do arquivo
  *  Ex: .DS_Store
  
## ignorar tipos de arquivos

* também podemos ignorar tipos de arquivos usando * (para todos arquivos) e o tipo
  * Ex: *.md (ignora todos os arquivos do tipo .md)

## limpar o cache

* caso já tenha algum arquivo no repositório que não queremos
* reinicia o rastreamento

$ git rm -r --cached . (remove tudo que estava em cache)

* depois só rodar add os arquivos novamente com add . e criar um novo commit