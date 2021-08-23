# Manipulando diretórios

## Criar diretórios

$ mkdir nomedapasta
  * cria diretório com o nome informado
$ mkdir nomedapasta nomedapasta2 nomedapasta3
  * podemos criar vários diretórios colocando o nome ao lado do outro
  
$ mkdir -p nomedapasta/src nomedapasta/public nomedapasta/assets
  * podemos usar -p para criar múltiplos diretórios dentro dos diretórios criados

## Criar arquivos ou alterar data e hora de arquivos ou pastas

$ touch nomedapastaoudiretório 
  * altera a data e hora caso o arquivo ou diretório já exista

$ touch nomedoarquivo nomedoarquivo2 nomedoarquivo3
  * cria arquivos caso não exista

## copiando arquivos ou pastas

$ cp nomedoarquivoasercopiado nomedoarquivocópia

$ cp -r diretório1 diretório2 diretório3 diretórios 
  * os diretórios 1 2 e 3 vão ser copiados para diretórios
  * precisamos usar -r(recursividade) para copiar diretórios

## mover ou renomear

$ mv nomedoarquivo1 nomedoarquivo2 nomedoarquivo3 nomedodiretório
  * move os arquivos 1 2 e 3 para o diretório

$ mv arquivo1 arquivonovo
  * também pode ser usado para renomear o arquivo

# remover arquivos ou diretórios

$ rm -rf nomedoarquivo
  * o arquivo é removido permanentemente (não vai pra lixeira)
  * podemos usar -r para apagar diretórios
  * podemos usar -f para forçar a remoção
