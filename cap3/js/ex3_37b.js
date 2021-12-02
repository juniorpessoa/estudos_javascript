function calculoVelocidade () {
    var inPermitida = document.getElementById("inPermitida");
    var inCondutor = document.getElementById("inCondutor");
    var outResposta = document.getElementById("outResposta");

        var velocidade = Number(inPermitida.value);
        var condutor = Number(inCondutor.value);
    
        //verifica se ou se tem Not a Number
    if (velocidade == 0 || isNaN(velocidade)){
        alert("Entrar com o número válido");
        inPermitida.focus();
        return;

    } else if (condutor == 0 || isNaN(condutor)){
        alert("Entra com velocidade Permitia");
        inCondutor.focus();
        return;
    }






    //CALCULANDO VELOCIDADE
    velocidadeVinte = (velocidade*1.20);


    if (velocidade >= condutor) {
        outResposta.textContent = "SEM MULTAS";  
    } else if (velocidade < velocidadeVinte){
        outResposta.textContent = "MULTA LEVE";
    } else (velocidadeVinte < velocidade) {
        outResposta.textContent = "MULTA GRAVE";
    }


    

}
var btVelocidade = document.getElementById("btVelocidade");
btVelocidade.addEventListener ("click",calculoVelocidade);