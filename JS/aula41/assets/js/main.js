// *Exercício 1

// Escreva uma função que recebe dois números e retorne o maior deles


const container = document.querySelector('.container');
const p = document.createElement('p');
const h2 = document.createElement('h2');
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
div.appendChild(h2);
h2.innerHTML = 'Exercício 1 - Maior dos números:'
div.appendChild(p);
p.innerHTML = `Maior número aleatório: ${maior} <br>`



random();




// *Exercício 2

// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number.
//Retorne true se a imagem estiver no modo horizontal.

const div2 = document.createElement('div');
const p2 = document.createElement('p');
const h22 = document.createElement('h2');

function random(x, y) {
    const r = Math.random() * (x - y) + y;
    return Math.floor(r);
}

function randNum1() {
    const num1 = random(10, 50);
    const num2 = random(10, 50);

    return {
        x: num1,
        y: num2
    }
}

function ePaisagem () {
    const { x, y } = randNum1();
    
    const verde = x > y ? 'Sim' : 'Não'

    container.appendChild(div2);
    div2.appendChild(h22);
    h22.innerHTML = 'Exercício 2 - Modo paisagem:'
    div2.appendChild(p2);
    p2.innerHTML = `Largura: ${x}px <br> Altura: ${y}px <br> Imagem em modo paisagem: ${verde}`;
}

ePaisagem();


