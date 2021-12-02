function CompraCarro () {
	var inCarro = document.getElementById("inCarro").value;
	var inPreco = document.getElementById("inPreco").value;


	var outCarro = document.getElementById("outCarro");
	var outEntrada = document.getElementById("outEntrada");
	var outParcela = document.getElementById("outParcela");

	var carro = inPreco/2;
	var pretacao = carro/12;

	outCarro.textContent = "Modelo disponivel : "+inCarro;
	outEntrada.textContent = "Entrada: "+carro;
	outParcela.textContent = "+ 12 x de R$:"+pretacao;
}

var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click",CompraCarro);