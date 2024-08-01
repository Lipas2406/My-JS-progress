function retornaFuncao (nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Lipas');
const funcao2 = retornaFuncao('Alfredo');
console.log(funcao);
console.log(funcao2);

// Closure - a habilidade da função de acessar o escopo léxico