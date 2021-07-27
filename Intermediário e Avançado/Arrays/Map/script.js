/*
const pessoas = ["Felipe", "Marcio", "Ana"]

const funcao = function(item, indice, arr){
    return item + " [" + indice + "]"
}

const novoArray = pessoas.map(funcao)

console.log(novoArray)
*/
const produtosDolar = [
    {produto: "Notebook", preco: 1200, moeda:"$"},
    {produto: "Celular", preco: 800, moeda:"$"}
]

const converterMoeda= function(obj){
    obj.preco *= 3
    obj.moeda = "R$"

    return obj
}

//O map aplica a função converterMoeda para cada item de produtosDolar
const novoObj = produtosDolar.map(converterMoeda)

console.log(novoObj)