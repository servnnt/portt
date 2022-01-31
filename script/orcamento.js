document.querySelector("#quantidade").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-y").addEventListener("change", atualizarPreco)
document.querySelector("#layout-n").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){

    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const quantidade = document.querySelector("#quantidade").value
    const Temjs = document.querySelector("#js").checked
    const IncluiLayout = document.querySelector("#layout-y").checked
    const prazo = document.querySelector("#prazo").value

    let preco = quantidade * 100;
    if(Temjs) preco = preco * 1.1
    if (IncluiLayout) preco = preco + 250
    let TaxaUrgencia = 1 - prazo * 0.1;
    preco = preco * 1 + TaxaUrgencia

    document.querySelector("#preco").innerHTML = `€ ${preco.toFixed(2)}`
}