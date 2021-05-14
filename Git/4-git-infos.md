# Informações sobre os arquivos git

## Head

* Mostra em qual commit estamos

## Status

* Mostra os status dos arquivos no repositório (que podem ser adiciondos, comitados)

$ git status

## Diff

* Mostra as alterações do working directory em comparação ao repositório (o que foi deletado, criado)

$ git dif

* mostra a alterações de staged em comparação ao repositório

$ git diff --staged

## Restore

* Restaurar o arquivo (descartar mudanças)

$ git restore nomedoarquivo.txt
$ git restore --staged nomedoarquivo.txt (restaura do staged)
$ git restore --staged . (restaura tudo do staged)

## Remover arquivos

* Deleta e já adiciona na staged (é excluido completamente e não fica na lixeira)
* Mesma coisa que remover na mão e rodar o git add

$ git rm nomedoarquivo.txt

## Renomear e mover arquivos

* Renomear o arquivo
* Mesma coisa que renomear manualmente e rodar git rm e git add
* Pode renomear e mover ao mesmo tempo

$ git mv nomedoarquivo.txt outronomedoarquivo.txt (renomear)
$ git mv nomedoarquivo.txt pasta/nomedoarquivo.txt (mover)
$ git mv nomedoarquivo.txt pasta/outronomedoarquivo.txt (renomear e mover)

## Corrigindo último commit

* usado em casos raros (é recomendável usar um novo commit para correções)

$ git commit --amend -m "corrigindo alteração"

## Recuperando arquivos

* podemos recupar arquivos usando o comando checkout junto com o começo da hash (7 digitos) do commit que deseja recuperar o arquivo, junto com o nome do arquivo

$ git checkout eddof18 -- README.md (o arquivo vai pra staged area)

* podemos então pegar partes do código do arquivo README.md para o aquivo desejado e usar o restore para deixa-lo untracked (não rastreado) novamente
  * o arquivo README.md pode ser deletado sem problemas caso não útil

## Removendo arquivos não rastreados

* cuidado com o uso, é ireversível

$ git clean -n (mostra o que o git irá remover)
$ git clean -f (deleta de forma permanente os quivos não rastreados)

## Revertendo commit

* o diretório tem que estar limpo
* contamos a partir do HEAD (trocamos o - por ~ no comando)
  * HEAD -1 (primeiro commit antes do HEAD)
  * HEAD -2 (segundo commit antes do HEAD)
  * a assim sucessivamente

$ git revert HEAD~5 (volta na história e cria um novo commit)