# Introdução ao Spring e Spring MVC Forms (aula sem código)

Sessão de estudo de 30/10/2026. Disciplina Sistemas Cliente/Servidor, Unidade V. Anotações a partir do
guia de estudos da unidade.

## Introdução ao framework Spring e principais módulos

Criado por Rod Johnson em 2002, o Spring surgiu para simplificar o desenvolvimento em Java, servindo como
uma alternativa aos complexos EJBs. Seu ecossistema é modular, usando módulos específicos como o Spring Data
e o Spring Security.

## Arquitetura e fluxo do Spring MVC (um modelo que eu conheço)

- **Front Controller:** o ponto central fornecido pelo framework, que recebe todas as requisições vindas do
  navegador e as envia para os controladores adequados.
- **Controller:** é o que contém a lógica de negócios, processa os pedidos, interage com o modelo e retorna
  o nome da página de visualização.
- **Model:** é tipo um contêiner de dados gerados no back-end para serem transportados e exibidos na
  interface.
- **View Template:** as páginas de visualização, responsáveis por renderizar os dados do modelo para o
  utilizador.

## Configuração do projeto (`web.xml` e `spring-mvc-servlet.xml`)

O `web.xml` é configurado para registrar o `DispatcherServlet` como o controlador frontal da aplicação e
mapear o padrão de URL. O `spring-mvc-servlet.xml` contém as diretivas fundamentais do Spring, tais como (a
partir daqui, é só para voltar caso eu precise):

- **`<context:component-scan>`:** define o pacote base onde o Spring procurará pelos componentes e
  controladores.
- **`<mvc:annotation-driven/>`:** ativa o suporte para conversão, formatação e validação de dados.
- **`InternalResourceViewResolver`:** configura o local exato onde as páginas de visualização estão
  armazenadas, definindo o prefixo (ex.: `/WEB-INF/view/`) e o sufixo (ex.: `.jsp`).

## Tags de formulário do Spring MVC (Spring MVC Forms Tags)

Usadas na ligação de dados, permitem associar automaticamente campos de formulário HTML a objetos beans Java.
Principais:

- **`<form:input>`:** utilizada para renderizar campos de texto vinculados a valores de objetos.
- **`<form:select>`:** cria listas suspensas (dropdown), trabalhando em conjunto com as tags aninhadas
  `<form:option>` ou `<form:options>`.
- **`<form:radiobutton>` / `<form:radiobuttons>`:** utilizadas para criar botões de rádio com valores fixos
  ou gerados em tempo de execução.
- **`<form:checkbox>` / `<form:checkboxes>`:** utilizadas para criar caixas de seleção individuais ou
  múltiplas dinamicamente.
