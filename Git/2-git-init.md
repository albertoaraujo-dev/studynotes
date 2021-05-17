# Iniciar um repositório

$ git init (dentro da pasta do projeto)

## Onde fica o histórico do repositório?

na pasta .git (criada escondida dentro do repositório)

## Log

* mostra o commit na branch, author e data

$ git log

$ git log --oneline (informação curta)

$ git log -n 5 (5 últimos commits)

$ git log --since=2020-10-01 (commits desde 01/10/2020)

$ git log --until=2020-10-01 (anterior a 01/10/2020)

$ git log --author=Pedro (rastreio pelo nome)

$ git log --grep="init" (busca por expressão regular)