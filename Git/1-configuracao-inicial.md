# Configuração inicial do GIT

* Apenas uma ves por computador e o efeito se manterá após atualizações
* Pode mudá-las em qualquer momento usando os comandos novamente


## Identidade

* É importante porque cada commit usa essa informação, e ela é carimbada de forma imutável nos commits que você começa a criar
* Se você quiser substituir essa informação com nome diferente para um projeto específico, você pode rodar o comando sem a opção --global dentro do projeto

$ git config --global user.name "Seu Nome"
$ git config --global user.email "seuemail@gmail.com"

## Editor

* Você pode trocar o editor padrão, que é o vim, por outro

$ git config --global core.editor "code -w" (vscode)

## Ver configurações

Você pode verificar suas configurações com o comando

$ git config --list

## Ajuda

$ git help

* Algumas informações sobre os comandos mais básicos