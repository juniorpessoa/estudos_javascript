function calculeResultado () {
//cria referencia aos elementos da página
var inNumero = document.getElementById("inNumero");
var outResposta = document.getElementById("outResposta");


//obtem conteudo do campos de entrada
var numero = Number (inNumero.value);
var dobro = Number (numero*2); 


outResposta.textContent = "O dobro do " + numero + " é :" + dobro;

}
//cria uma refernecia ao elemtno btConverter (botão)
var btCalcular = document.getElementById("btCalcular");

//registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calculeResultado);