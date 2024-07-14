const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

console.log(elementos);


    const container = document.querySelector('.container');
    const div = document.createElement('div');


for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto; // há outras formas
    /* Ourtas formas:
    1-
    tagCriada.innerHTML = texto;

    2-
    const textoCriado = document.creatTextNode(texto);
    tagCriada.appendChild(textoCriado);
    */
   
    div.appendChild(tagCriada);
}
container.appendChild(div);