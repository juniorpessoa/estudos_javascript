function calcular () {
    var valorMin = document.getElementById("valorMin").value;
    var tempoUso = document.getElementById("tempoUso").value;

    var pagarValor = document.getElementById("pagarValor");

    var tempo = (tempoUso/15);
    var atual = Math.ceil(tempo);
    var x = (atual*valorMin);

    pagarValor.textContent ="Total a pagar R$:"+x;

}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click",calcular);