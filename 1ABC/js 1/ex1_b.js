function inCalculo () {
	// cria referência aos elementos da página 

	var inNumero1 = document.getElementById("inNumero1");
	var inNumero2 = document.getElementById("inNumero2");
	var outResposta = document.getElementById("outResposta");
	var outNumeros = document.getElementById("outNumeros");
	


	// obtém conteúdos dos campos de entrada
	var inNumero1 = Number(inNumero1.value);
	var inNumero2 = Number(inNumero2.value);
	var resposta = Number(inNumero1+inNumero2);


	// altera o conteúdo dos parágrafos de resposta
	outNumeros.textContent = "Primeiro número: "+inNumero1+ "Segundo número: "+inNumero2;
	outResposta.textContent = "A soma dos números é: " +resposta;
}

//cria uma refernecia ao elemtno btConverter (botão)
var btCalculo = document.getElementById("btCalculo");

//registra um evento associado ao botão, para carregar uma função
btCalculo.addEventListener("click", inCalculo);
