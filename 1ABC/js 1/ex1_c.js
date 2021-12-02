function calculoJanta () {
	//entrada de dados
	var inJantar = document.getElementById("inJantar");
	var inTaxa = document.getElementById("inTaxa");
	var inConta = document.getElementById("inConta");
	var outJantar = document.getElementById("outJantar");
	var outTaxa = document.getElementById("outTaxa");
	var outConta = document.getElementById("outConta");



	//valores das variaveis
	var inJantar = Number (inJantar.value);
	var inTaxa = Number(inTaxa.value);
	var inConta = Number (inConta.value);

	//Realizando os calculos
	//sabendo a porcentgem
	var atTaxa =((inJantar*inTaxa)/100);
	//calculando valor jantar + taxa porcentagem
	var atTaxaConta = (inJantar+atTaxa);
	//calculando valor da conta pela quantidade da mesa
	var atConta = (atTaxaConta/inConta);

	outJantar.textContent = "Valor da Conta R$:"+inJantar.toFixed(2);
	outTaxa.textContent = "Voce escolheu Taxa do garçom de "+inTaxa+"% valor taxa é R$:"+atTaxa.toFixed(2);
	outContaTaxa.textContent = "Valor da conta R$: "+atTaxaConta.toFixed(2);
	outConta.textContent = "Conta será dividida por "+inConta+ " Valor para cada pessoa R$:"+atConta.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click",calculoJanta);