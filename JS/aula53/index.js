// IIFE -> Immediately Invoked Function Expression

(function (idade, peso, altura) {
    const sobrenome = 'Alfredo';
    function criaNome (nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaPessoa (){
        console.log(criaNome('Lipas'));
        console.log(idade, peso, altura);
    }
    falaPessoa();
})(7, 20, 2.00);

const nome = "Alfredo";
console.log(nome);