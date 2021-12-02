function pizzaConta () {
	var inConta = document.getElementById("inConta");
	var qtdPessoa = document.getElementById("qtdPessoa");

	var outConta = document.getElementById("outConta");
	var outPagar = document.getElementById("outPagar");

	var inConta = inConta.value;
	var qtdPessoa = qtdPessoa.value;


	var Conta = Number(inConta/qtdPessoa);
	var aConta = Conta.toFixed(2);
	


	outConta.textContent = "Valor da conta: R$:"+inConta+",00";
	outPagar.textContent = "Conta será divida em "+qtdPessoa+" Valor para unitário R$:"+aConta;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click",pizzaConta);