let umaString = "Um \"texto\"";
// console.log (umaString);



umaString = "Um \\texto";
// console.log (umaString);



/**Sobre índices nas caracteres */
//           01234567
umaString = "Um texto";
// console.log (umaString[4]);
// console.log (umaString.charAt(10));



/**Sobre concatenação */
//           01234567
umaString = "Um texto";
// console.log (umaString.concat(' sobre', ' a', ' ciência', ' da computação'));
// console.log (umaString + ' sobre a ciência da computação');
// console.log(`${umaString} sobre a ciência da computação`);



/**Sobre localizar index */
//           01234567
umaString = "Um texto 9m111m";
// console.log (umaString.indexOf('texto'));
// console.log (umaString.indexOf('Texto'));
// console.log (umaString.indexOf('U', 3));
// console.log (umaString.indexOf('o', 3));

// console.log (umaString.lastIndexOf('m', 11));



/**Sobre expressões regulares */
umaString = "Um texto";
// console.log (umaString.match(/[a-z]/));
// console.log (umaString.search(/[x]/));
// console.log (umaString.replace(/Um/, 'Outro'));



/**Sobre o tamanho da string em caracteres*/
//           0123456789...
umaString = "O rato roeu a roupa do rei de roma.";
// console.log(umaString.length, ' -> total de caracteres');
// console.log(umaString.slice(0, 8), ' -> a segunda posição não aparece');
// console.log(umaString.slice(-5), ' -> retrocedeu do total');
// console.log(umaString.slice(30), ' -> mesmo que o de cima');
// console.log(umaString.slice(-5, -1), ' -> exemplo em posições');



/**Sobre separar palavras a a partir de determinada caractere */
umaString = "O rato roeu a roupa do rei de roma.";
// console.log (umaString.split(' '));
// console.log (umaString.split(' ', 2));
// console.log (umaString.split(' ', 3));



/**Sobre maiúscula e minúscula */
umaString = "O rato roeu a roupa do rei de roma.";
// console.log (umaString.toUpperCase());
// console.log (umaString.toLowerCase());