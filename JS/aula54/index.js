// Factory Function  
/*
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this. peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
 
const p1 = criaPessoa('Lipas', 'Alfredo', 1.8, 70);
console.log(p1.fala('falando sobre JS'), 'Seu IMC é ', p1.imc());
const p2 = criaPessoa('Bartolomeu', 'Afonso', 1.87, 82);
console.log(p2.fala('falando sobre JS'), 'Seu IMC é ', p2.imc());
*/

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 

        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        fala(assunto = 'falando sobre ALGO') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,

        peso: p,

        // Getter
        get imc() {
            const indice = this. peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
    

}
const p1 = criaPessoa('Lipas', 'Alfredo', 1.8, 70);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc); // deixou de ser função, virou um atributo
p1.nomeCompleto = 'Lipas Soares de Lima'
console.log(p1.nomeCompleto);
console.log('Nome:', p1.nome);
console.log('Sobrenome:', p1.sobrenome);
console.log('Peso:', p1.peso, '  Altura:', p1.altura,'  IMC:', p1.imc);

console.log(p1.fala());
