function gerarNumero () {
    var inNumero = document.getElementById("inNumero");
    var outNumber = document.getElementById("outNumber");


    var numero = Number (inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert ("Entrar com Número correto");
        inNumero.focus();
        return;
    }

    var resultado = numero % 2
    
    if (resultado == 0) { 
        outNumber.textContent = numero+ " NÚMERO DIGITADO É PAR";
        outNumber.style.color = "red";
    }else {
        outNumber.textContent = numero+ " NÚMERO DIGITADO É IMPAR";
        outNumber.style.color = "green";
    }
}
var btNumero = document.getElementById("btNumero");
btNumero.addEventListener("click", gerarNumero);



function apagarNumerto (){
    location.reload();
    document.getElementById("inNumero").focus();
    return;
}
var btApagar = document.getElementById("btApagar");
btApagar.addEventListener("click", apagarNumerto);