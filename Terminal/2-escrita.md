# Command

* programa que você está rodando
* obrigatório
Ex: ls (listar diretórios)

## Options (são opcionais)

* mudar comportamento
* explica ao comando como deve funcionar
* geralmente começa com traço -
* geralmente, somente uma letra (mas podem ser usados juntos com outros)
  * Ex: $ ls -l mostra a lista de diretórios "complexa" (mais difícil de entender os tamanhos dos arquivos)
  * Ex: $ ls -lh (human readable, mostra os tamanhos em bytes, kilobytes...)
* a maioria dos comandos oferecem muitas opções
* podem ser usados juntos como mostrado acima ou com a sintaxe completa
  * Ex: $ ls -l -h -a (a mostra os arquivos ocultos)
* options com dois traços -- não podemos coloca-los juntos, precisam ser separados
  * Ex: $ --group --human-readable

## Arguments (são opcionais)

* onde o comando irá operar
* caminho do arquivo ou diretório
  * Ex: $ ls lha usr/bin