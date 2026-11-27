# Consumindo JSON em Aplicações Android (aula sem código)

Sessão de estudo de 26/11/2026. Programação para Dispositivos Móveis, Unidade V. Anotações de estudo.

## 1. O que é o JSON e por que ele é usado no Mobile

- JSON é uma estrutura leve e simples, prática para representações e troca de dados, baseada num subconjunto de
  linguagens como C, C++, C#, Java e JavaScript.
- É nativamente suportado pelo Android e é amplamente utilizado.

## 2. Classes nativas do JSON no Android

- `JSONObject` é uma coleção de pares do tipo chave/valor.
- `JSONArray` é uma sequência de valores.
- `JSONStringer` é um objeto usado para a criação de arquivos com dados no formato JSON.
- `JSONException` é o tratamento da exceção quando alguma estrutura do JSON falha.

## 3. Vantagens do JSON em comparação ao XML (apenas para registro, copia e cola)

- **Leitura mais simples:** estrutura mais limpa e direta de ler visualmente.
- **Analisador (parsing) mais fácil:** mais simples de interpretar e processar no código.
- **Suporte a objetos / tipagem:** o material afirma explicitamente que JSON suporta objetos e é tipado (enquanto
  afirmativas dizendo que ele não suporta objetos ou não é tipado contradizem o texto).
- **Outras vantagens:** maior velocidade na execução e transporte de dados e arquivos com tamanho reduzido (adotado por
  empresas como Google, Facebook, Yahoo! e Twitter).
