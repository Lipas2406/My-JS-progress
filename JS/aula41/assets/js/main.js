// Escreva uma função que recebe dois números e retorne o maior deles

const container = document.querySelector('.container');
const div = document.createElement('div');


function random(x, y) {
    const r = Math.random() * (x - y) + y;
    return Math.floor(r);
}


function randNum() {
    const num1 = random(1, 100);
    const num2 = random(1, 100);

    function maiorNum() {
      return num1 > num2 ? num1 : num2
    }  

    return {    
        maior: maiorNum()
    };

}

const { maior } = randNum();

container.appendChild(div);
div.innerHTML = `Número aleatório: ${maior}`


random();