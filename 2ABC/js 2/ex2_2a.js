function btConverterDuracao () {
	var inTitulo = document.getElementById("inTitulo");
	var inDuracao = document.getElementById("inDuracao");

	var outTitulo = document.getElementById("outTitulo");
	var outTempo = document.getElementById("outTempo");

	var inTitulo = (inTitulo.value);
	var duracao = Number (inDuracao.value);

	//calculando as horas e minutos
	var horas = Math.floor (duracao/60);
	var minutos = duracao%60;


	outTitulo.textContent = "Titulo: "+inTitulo;
	outTempo.textContent = horas+" Hora(s) e "+minutos+"minuto(s)";
}
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click",btConverterDuracao);