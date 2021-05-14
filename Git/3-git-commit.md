# Commits

* Depois de iniciado o repositório, usamos os commits para "marcar um ponto na história"
* Precisa adicionar os arquivos pra poder gerar o commit

$ git add . (o ponto é pra add tudo)

$ git add nomedoarquivo.txt (arquivo único)

$ git add *.md (todos os arquivos .md)

$ git commit -m "Primeiro Commit" (-m é de message)

* podemos fazer o add + commit caso o arquivo já esteja rastreado (o arquivo ja existe no repositório, e queremos apenas fazer modificações)
  
$ git coomit -am "commit com add"

## Estágios dos arquivos

* Primeiro é iniciado(começando um projeto) ou clonado(usando um projeto pronto)
  * Nessa etapa os arquivos estão no working directory (onde ficam todos os arquivos modificados)

* Depois são adicionados os arquivos
  * Nessa etapa os arquivos estão na Stage Area (preparação dos arquivos para serem commitados)

* Depois os arquivos da fase staged podem ser commitados
  * Nessa etapa os arquivos estão no banco de dados do repositório local (onde ficarão os pontos na história)

## pull

* puxa as alterações feitas online diretamente no repositório (github)
  
$ git pull

## push

* empurra as alterações feitas localmente (na máquina que estamos usando)

$ git push

## Hash SHA-1

* os commits são guardados em hash
* checksum - converte dados em números
* única e íntegra
* 40 caracteres exadecimais
* 0 até 9 e a até f
* guarda informações (parent, author, menssagem)
