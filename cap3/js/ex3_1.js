function anoMedia () {
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");

    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    var inNome = inNome.value;
    
    var inNota1 = Number(inNota1.value);
    var inNota2  = Number(inNota2.value);
    var media = Number((inNota1+inNota2)/2);

    outMedia.textContent = inNome+" A sua média é: " + media.toFixed(2);  

    //condição simples
    if (media >= 7) { 
      outSituacao.textContent = "Parabens vocé foi Aprovado";
      outSituacao.style.color ="blue";
    }else{ 
      outSituacao.textContent = "Ops..Voce foi reprovado";
      outSituacao.style.color= "red";
    }

}
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", anoMedia);