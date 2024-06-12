const numero = Number(prompt('Digite um número:'));  
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>O número ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} arredondado para baixo é: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} arredondado para cima é: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>O número ${numero} com duas casas decimais é: ${numero.toFixed(2)}</p>`;


