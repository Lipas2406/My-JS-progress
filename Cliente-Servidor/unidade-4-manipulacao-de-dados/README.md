# Manipulação de dados com Java (aula sem código)

Sessão de estudo de 29/10/2026. Disciplina Sistemas Cliente/Servidor. Anotações a partir do guia de
estudos da unidade.

## Comunicação com o banco

Em aplicações integradas a bases de dados relacionais (MySQL), a comunicação é feita executando comandos
SQL estruturados diretamente através de objetos de conexão JDBC.

## Os comandos

- **Pesquisa / consulta (`SELECT`):** utilizado para buscar e recuperar registros específicos de uma
  tabela com base em critérios de filtragem. A sintaxe básica segue a estrutura de projeção de campos e
  condições de filtragem.
- **Exclusão (`DELETE`):** utilizado para remover registros indesejados de uma tabela na base de dados.
  Exige sempre uma cláusula condicional para especificar exatamente qual linha deve ser apagada,
  evitando a remoção acidental de dados.
