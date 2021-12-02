function farmaciaOn (){
    var medicamento = document.getElementById("medicamento").value;
    var inPreco = document.getElementById("inPreco").value;
    var outRemedio = document.getElementById("outRemedio");
    var outDesconto = document.getElementById("outDesconto");

    var preco = Math.floor(inPreco*2);

    outRemedio.textContent ="Promoção "+medicamento;
    outDesconto.textContent = "Leve 2 por apenas R$:"+preco.toFixed(2);
}
var btPromo = document.getElementById("btPromo");
btPromo.addEventListener("click",farmaciaOn);