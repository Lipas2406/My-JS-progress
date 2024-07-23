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



// *Exercício 3

// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz  
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100

const numbers = Array.from({ length: 101 }, (_, i) => i);
numbers.forEach(fizz);
numbers.forEach(buzz);
numbers.forEach(fizzBuzz);


const fizz = (number) => Number.isInteger(number / 3) ? 'Fizz' : number;
const buzz = (number) => Number.isInteger(number / 5) ? 'Buzz' : number;
const fizzBuzz = (number) => Number.isInteger(number / 15) ? 'FizzBuzz' : number;

function checkNumber(number) {
    if (fizzBuzz(number) === 'FizzBuzz') {
        return 'FizzBuzz';
    } else if (fizz(number) === 'Fizz') {
        return 'Fizz';
    } else if (buzz(number) === 'Buzz') {
        return 'Buzz';
    } else return number;
}


