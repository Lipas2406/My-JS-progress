# Interação web, Servlets e comandos SQL (aula sem código)

Sessão de estudo de 29/10/2026. Disciplina Sistemas Cliente/Servidor, Unidade IV. Anotações a partir do
guia de estudos da unidade.

## Recuperação de parâmetros em Servlets (`request.getParameter`)

Quando um formulário HTML/JSP envia dados para um Servlet, as informações trafegam como pares de nome e
valor. Para capturar, é só utilizar o método do objeto de requisição:
`request.getParameter("nome_do_parametro")`.

É importante lembrar que o `getParameter` sempre retorna os dados em formato de `String`. Caso o dado
enviado seja numérico, é necessário converter a `String` para o tipo numérico.

## Conversão de tipos (parsing de dados)

Os parâmetros vindos da web chegam sempre como `String`. Se eu quiser armazená-los como numéricos, uso os
métodos de conversão das classes wrapper do Java. Para converter para o tipo numérico decimal de precisão
dupla (`double`), o método de parsing adequado é o da classe `Double` (`Double.parseDouble`), que
transforma a `String` obtida do formulário no valor numérico correspondente.

## Linguagem SQL na manipulação de dados com Java

Em aplicações integradas a bases de dados relacionais (MySQL), a comunicação é feita executando comandos
SQL estruturados diretamente através de objetos de conexão JDBC. Os comandos são (a partir daqui, é só
para guardar):

- **Pesquisa / consulta (`SELECT`):** utilizado para buscar e recuperar registros específicos de uma
  tabela com base em critérios de filtragem. A sintaxe básica segue a estrutura de projeção de campos e
  condições de filtragem.
- **Exclusão (`DELETE`):** utilizado para remover registros indesejados de uma tabela na base de dados.
  Exige sempre uma cláusula condicional para especificar exatamente qual linha deve ser apagada,
  evitando a remoção acidental de dados.
