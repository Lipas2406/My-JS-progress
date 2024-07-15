/*DOM*/

// Representado por meio de uma árvore hierárquica, onde tags são pais de tags, que são pais de outras tags. Consequentemente, há diversos filhos dos filhos de tags. Há também irmãos, em que duas ou mais tags são filhos de uma mesma tag. 
//Por exemplo:

/*
<!DOCTYPE html> -> pai de todos
<html lang="pt-BR">

<head> -> filho 1
    <meta charset="UTF-8"> -> filho 2
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> -> filho 2
    <link rel="stylesheet" href="./assets/css/style.css"> -> filho 2
    <title>Modelo</title> -> filho 2
</head>

<body> -> filho 1

    <section class="container"> -> filho 2
        <h1>Aqui está um modelo. Utilize.</h1> -> filho 3
        <!-- AQUI --> -> filho 3
    </section>

    <script src="./assets/js/main.js"></script> -> filho 2
</body>

</html>
*/

// Essa representação nos permite alterar o estilo e a configuração de determinado elemento através do JS, mesmo que essa não seja uma línguagem de JS. Ou seja, pode ser usada em outros tipo de linguagem, também. 

/*
;)
*/