function corrida () {
	//cria referencia aos elementos da página
	var inDia = document.getElementById("inDia");
	var inHora = document.getElementById("inHora");

	var outDia = document.getElementById("outDia");
	var outHora = document.getElementById("outHora");

	//obtem conteudo do campos de entrada
	var inDia = inDia.value;
	var inHora = inHora.value;

	var dia = Number(inDia*24);
	var hora = Number(inHora);

	//altera o conteudo dos parágrágos da resposta

	outDia.textContent = "Total de "+dia+" dias e "+hora+" hora(s)";
	
}
var btCorrida = document.getElementById("btCorrida");
btCorrida.addEventListener("click",corrida);