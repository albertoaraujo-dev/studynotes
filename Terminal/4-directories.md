# Diretórios

## Diretório atual

$ pwd (Present Working Directory)
  * Mostra o caminho absoluto do diretório atual

# Mudar de diretório

$ cd diretório (Change Directory)
  * Muda de diretório usando parâmetros

$ cd . (diretório atual)

$ cd .. (diretório anterior)

$ cd ../../ (volta dois diretórios)

$ cd - (volta para o diretório onde estava)

$ cd diretório\ com \ espaços (usa barra invertida no lugar de espaços)

$ cd "diretório com espaços" (também podemos colocar o nome do diretório entre aspas)

  * Não é uma boa prática criar diretórios com acentuações ou espaços
  
## Mostrar arquivos e pastas dentro do diretório

$ ls (mostra os nomes dos diretórios ou arquivos)

$ ls -l  ( -l mostra mais informações como dono, grupo, tamanho, data)

$ ls -lh ( -h mostra mais informações, porém com tamanhos dos arquivos de uma forma mais fácil para um humano entender)

$ ls -lha ( -a mostra tudo, inclusive arquivos arquivos)

$ ls -R (mostra de forma recursiva a árvore de diretórios e arquivos nesses diretórios)

$ ls -S (ordena os arquivos mostrados por tamanho)


## Tipo do arquivo e informações / dono e modificações

$ file nomedoarquivo.png
  * mostra o tipo do arquivo e outras informações como tamanho (da imagem), cor etc..

$ stat nomedoarquivo.png
  * mostra informações sobre o dono, tamanho do arquivo, modificações etc..
