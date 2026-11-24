# Introdução ao Desenvolvimento Android (aula sem código)

Sessão de estudo de 23/11/2026. Programação para Dispositivos Móveis, Unidade I. Anotações de estudo.

## 1. Estrutura de pastas de um projeto Android

Quando eu crio um projeto no Android Studio, eu já tenho prontas algumas funções padrão, tipo `java`, que contém o
código-fonte, `res`, que armazena os recursos da aplicação, e o `manifests`, que descreve as permissões e os
componentes da aplicação.

## 2. Configuração do ambiente e emuladores (AVD)

Serve pra executar e testar aplicativos sem ter um aparelho físico conectado.

- Após a instalação do SDK e da imagem de sistema de cada versão, eu crio obrigatoriamente o(s) emulador(es) para
  rodar e testar os apps.

## 3. Principais layouts de interface

Classes derivadas de `ViewGroup`, definem como os elementos gráficos serão exibidos na tela.

- **LinearLayout:** organiza os componentes em sequência e em direção única.
- **RelativeLayout:** posiciona os elementos tomando como referência a posição de outros elementos na tela.
- **TableLayout:** formato de grade com linhas e colunas.

## 4. Ciclo de vida de uma Activity

Toda Activity (que representa uma tela da aplicação) passa por estados gerenciados pelo sistema operacional através
de métodos de callback executados em uma ordem específica:

1. `onCreate()`
2. `onStart()`
3. `onResume()`
4. `onPause()`
5. `onStop()`
6. `onDestroy()`
