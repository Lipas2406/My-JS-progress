function meuEscopo () {
    const form = document.querySelector('#formulario');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputPeso = e.target.querySelector('#peso');
        const inputAltura = e.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) {
            setResultado('Peso inválido', false);
            return; 
        } else if (!altura) {
            setResultado('Altura inválido', false);
            return;
        }

        
        const imc = getImc(peso, altura);
        const nivelImc = classificaIMC(imc); 

        const msg = `Seu IMC é ${imc} que é ${nivelImc}`;

        setResultado(msg, true);
});

function classificaIMC(imc) {
    if (imc < 18.5) return 'Abaixo do peso'
    else if (imc >= 18.5 && imc <= 24.9) return 'Peso normal'
    else if (imc >= 25 && imc <= 29.9) return 'Sobrepeso'
    else if (imc >= 30 && imc <= 34.9) return 'Obesidade grau 1'
    else if (imc >= 35 && imc <= 39.9) return 'Obesidade grau 2'
    else return 'Obesidade grau 3'
    }
}

function getImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
    const p = criaP();
 
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};






// function recebeEventoForm (evento) {
//     evento.preventDefault();
//     console.log('Evento previnido!')

//     const inputPeso = evento.target.querySelector('.peso');
//     const inputAltura = evento.target.querySelector('.altura');

//     const peso = Number(inputPeso.value);
//     const altura = Number(inputAltura.value);

//     if (!peso) {
//         resultadoGeral.innerHTML = `<p>Peso inválido</p>`
//     } else if (!altura) {
//         resultadoGeral.innerHTML = `<p>Altura inválida</p>`
//     } else {
//         resultadoGeral.innerHTML = `<p>Seu IMC é ${imc} (${classificacao})</p>`;
//     }
// }

//     function calculaIMC (inputPeso, inputAltura) {
//         const imc = inputPeso / (inputAltura * inputAltura);
//         return imc.toFixed(2);
//     }

//     //switch Case
//     function classificaIMC(imc) {
//         if (imc < 18.5) {
//             return 'Abaixo do peso'
//         } else if (imc >= 18.5 && imc <= 24.9) {
//             return 'Peso normal'
//         } else if (imc >= 25 && imc <= 29.9) {
//             return 'Sobrepeso'
//         } else if (imc >= 30 && imc <= 34.9) {
//             return 'Obesidade grau 1'
//         } else if (imc >= 35 && imc <= 39.9) {
//             return 'Obesidade grau 2'
//         } else {
//             return 'Obesidade grau 3'
//         }
//     }

//     form.addEventListener('submit', recebeEventoForm);


 


meuEscopo();
