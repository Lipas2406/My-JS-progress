# Introdução a HTML e JavaServer Pages (JSP) (aula sem código)

Sessão de estudo de 26/10/2026. Disciplina Sistemas Cliente/Servidor, Unidade I. Anotações a partir do
guia de estudos da unidade.

## Arquiteturas de sistemas

- **Stand-Alone:** sem rede de comunicação, tudo roda junto num lugar só.
- **Cliente/Servidor**, dividido em duas formas:
  - **Duas camadas:** tem um pouco de processamento no cliente, e o resto o servidor cuida.
  - **Três camadas:** processamento leve para o cliente, gestão de processos para um servidor
    intermediário e base de dados com processamento pesado atrás de tudo.

## Protocolo HTTP

Utiliza um sistema de ficheiros virtual. É um protocolo sem estado e sem conexão: isto significa que
não mantém uma sessão aberta entre transferências.

### Métodos GET e POST (finalmente)

- **GET:** os dados são enviados visíveis na URL, através de uma query string.
- **POST:** indicado para envio de grandes volumes de dados ou anexos, porque os parâmetros são
  enviados de forma oculta no corpo da mensagem HTTP.

### Códigos de resposta HTTP principais

- **200 OK:** o pedido foi atendido com sucesso.
- **204 No Response:** o servidor processou o pedido, mas não há conteúdo a retornar.
- **400 Bad Request:** sintaxe do pedido inadequada ou inválida.
- **401 Unauthorized:** o cliente não tem autorização para acessar a informação.
- **403 Forbidden:** o recurso não pode ser enviado, mesmo com autorização.
- **404 Not Found:** página ou recurso não encontrado (o código mais comum).
- **500 Internal Error:** erro interno no servidor.
- **501 Not Implemented:** recurso ainda não implementado.

## JavaServer Pages (JSP) e elementos básicos

O que importa, para caso eu precise, é isto aqui:

- **Comentários:** `<%-- Comentário oculto no HTML --%>`
- **Scriptlets:** blocos para inserir código Java puro dentro da página (`<% // código Java %>`).
- **Expressões:** avaliam e retornam um valor diretamente para a saída HTML (`<%= expressão %>`).
- **Diretivas de página:** definem informações globais para a tradução da classe servlet
  (`<%@ page import="..." %>`).
- **Diretivas de bibliotecas:** utilizadas para incluir bibliotecas externas de tags (ex.: JSTL,
  `<%@ taglib ... %>`).

Sem decoreba. Só deixo anotado para caso eu veja de novo.
