# JavaServer Pages Standard Tag Library (JSTL) (aula sem código)

Sessão de estudo de 28/10/2026. Disciplina Sistemas Cliente/Servidor, Unidade II. Anotações a partir do
guia de estudos da unidade.

## O que é a JSTL

Uma coleção de tags JSP com modelo padrão, cuja principal função é "ajudar" a lidar com lógica em Java
dentro de páginas web, evitando a mistura excessiva de código Java puro (scriptlets) diretamente no
código HTML.

## Taglibs

São tags do `.jsp`, e é obrigatório declarar a diretiva para qualquer uso no JSTL.

### Core (`c`)

Focada em operações fundamentais, como iteração, verificação de condições e gestão de variáveis.

Sintaxe de importação (usada para funções condicionais na sintaxe):

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```
