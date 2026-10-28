# Fundamentos de Servlets e métodos HTTP (aula sem código)

Sessão de estudo de 28/10/2026. Disciplina Sistemas Cliente/Servidor, Unidade III. Anotações a partir do
guia de estudos da unidade.

## Servlet

É uma classe Java executada em um servidor web que estende as capacidades do servidor para processar
requisições dinâmicas. O foco é atuar na camada de controle, interceptando e recebendo as solicitações
enviadas pelos clientes (front-end/navegadores) e gerando/produzindo as respostas adequadas com base
nessas entradas.

## Herança de classes

Um Servlet não pode ser uma classe Java comum: ele precisa estender, ou seja, herdar, a classe base
fornecida pela API de Servlets do Java (`javax.servlet.http.HttpServlet`). Ao criar o arquivo
estruturalmente em uma IDE, a ferramenta já gera métodos padrão de ciclo de vida e de tratamento de
requisições para facilitar o trabalho do programador.

## Tratamento: `doGet` e `doPost`

A API de Servlets mapeia esses métodos em funções específicas na classe `HttpServlet`.

- **GET:** as requisições são tratadas pelo método `doGet(HttpServletRequest req, HttpServletResponse resp)`.
- **POST:** tratadas pelo correspondente `doPost(HttpServletRequest req, HttpServletResponse resp)`.

## Métodos padrão gerados

Quando você cria um novo Servlet na IDE, o assistente preenche automaticamente a classe, incluindo por
padrão os métodos para lidar com essas duas principais formas de requisição web (`doGet` e `doPost`),
permitindo que você sobreponha (override) o comportamento de acordo com a regra de negócio desejada.
