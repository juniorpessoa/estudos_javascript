<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estililo.css">
    <title>Exemplo 3.2</title>
</head>

<body>
 
        <img src="img/ex3_2.jpg.JPG" alt="Balança de Peso - SOLUTION DESIGner">

        <h1>Programa Cálculo do Peso Ideal</h1>

        <p>Nome
            <input type="text" id="inNome">
        </p>

        <p>Sexo
            <input type="radio" id="brMasculino">Masculino
            <input type="radio" id="brFaminino">Feminino
        </p>

        <p>Altura
            <input type="text" id="inAltura">
        </p>

        <p>
            <input type="button" value="Calcular Peso Ideal" id="btCalculo">
            <input type="button" value="Limpar Campos" id="btLimpar">
        </p>

        <h2 id="outResultado"></h2>
        
        <script src="js/ex3_2.js"></script>
</body>

</html>