function descontao (){
    var produto = document.getElementById("produto");
    var inPreco = document.getElementById("inPreco").value;
    var outProduto = document.getElementById("outProduto");
    var outPreco = document.getElementById("outPreco");

    var produto = produto.value;

    var preco = Number(inPreco*2);
    var desconto = Number(inPreco/2);
    var valor = Number(preco+desconto);

    outProduto.textContent = produto+ "- Promoção: Leve 3 por "+valor.toFixed(2);
    outPreco.textContent = "O 3° produto custa apenas R$: "+desconto.toFixed(2);
}
var btPromo = document.getElementById("btPromo");
btPromo.addEventListener("click",descontao);
        