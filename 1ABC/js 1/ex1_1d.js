function media (){
	var inNota1 = document.getElementById("inNota1");
	var inNota2 = document.getElementById("inNota2");
	var outMedia = document.getElementById("outMedia");


	var inNota1 = inNota1.value;
	var inNota2 = inNota2.value;


	var media = Number(inNota1+inNota2/2);

	outMedia.textContent = "Nota 1°: "+inNota1+" Nota 2°: "+inNota2+" Média:"+media;
}
var btMedia = document.getElementById("btMedia");
btMedia.addEventListener("click",media);