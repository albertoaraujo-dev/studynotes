# Encontrar arquivos ou diretórios

$ find <path> arg [expression] (sintaxe)

$ find . -type d ou f -name "*.jpg"
  * . para procurar no diretório atual
  * -type d ou f para escolher se é diretório ou arquivo
  * -name "o que quero que tenha no arquivo"
    ("*d" procura qualquer arquivo que termina com d)
    ("d*" procura qualquer arquivo que começa com d)
    ("*d*" procura qualquer arquivo que tenha d em alguma parte do nome)
  * -name tbm pode ser tipo de arquivos