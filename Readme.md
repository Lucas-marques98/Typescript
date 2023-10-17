para eu gerar o arquivo de configuração eu preciso usar o comando tsc --init e mudar as seguintes configurações:

"target": "ESNext" (PARA COMPILAR PARA A ULTIMA VERSÃO DO JAVASCRIPT)

"rootDirs": ["./src"] (PARA OS ARQUIVOS COMPILADOS DO TYPESCRIPT ESTEJAM NESSE DIRETÓRIO.)

 "outDir": "./build", (PARA O DIRETÓRIO DOS ARQUIVOS JAVASCRIPT)

  "removeComments": true, (PARA REMOVER OS COMENTÁRIOS QUE EU FIZ NO MEU ARQUIVO TYPESCRIPT E GERAR O ARQUIVO JS SEM OS COMENTÁRIOS)

Para eu ativar o modo watch basta eu usar o comando tsc -w ou tsw --watch, toda vez que eu mudar meu código te Typescript ele vai mudar meu código de Javascript, assim não precisando ficar compilando toda vez.

