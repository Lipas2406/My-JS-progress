# View, Eventos, Activity e Intent (aula sem código)

Sessão de estudo de 24/11/2026. Programação para Dispositivos Móveis, Unidade II. Anotações de estudo.

## 1. Montagem de telas e arquivos de layout

Enquanto a lógica e os eventos são programados em classes Java, a interface visual e a disposição dos elementos
gráficos são definidas e montadas em arquivos do tipo XML, armazenados na subpasta `layout`, que está dentro de `res`.

## 2. A classe R (`R.java`)

- Sempre que um arquivo novo de recurso é adicionado nas subpastas de `res`, o Android Studio gera a classe `R` e a
  atualiza automaticamente.
- Contém constantes para acessar os diversos recursos do projeto e nunca deve ser alterada manualmente.

## 3. Navegação e retorno de dados entre Activities (Intent)

O fluxo de devolução de informações da tela secundária para a principal (só pra guardar, caso precise):

1. **Criar a intenção (`Intent`):** instancia-se um objeto `Intent`, que servirá de contêiner para o retorno.
2. **Classificar o resultado (`setResult`):** define-se o código de status do resultado retornado (por exemplo,
   `RESULT_OK` ou `RESULT_CANCELED`) através do método `setResult(...)`.
3. **Preparar dados opcionais (`putExtra`):** caso existam valores ou parâmetros a serem devolvidos para a Activity de
   origem, eles são anexados na intenção com o método `putExtra("chave", valor)`.
4. **Fechar e retornar (`finish()`):** encerra-se a Activity destino chamando o método `finish()`, devolvendo o
   controle e os dados para a Activity de origem.
