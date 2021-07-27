/*
const numeros = [2, 3, 5]

const funcao = function(acumulador, atual){
    return acumulador + atual
}


const resultado = numeros.reduce(funcao, 6)

console.log(resultado)
*/

/*------------------------------------------------------------------------------------*/
//Retorna se existe ao menos um produto com promoção ou não

const produtos = [
    {nome: "Notebook", promocao: true},
    {nome: "Mouse", promocao: false},
    {nome: "Celular", promocao: false}
]

const produtosPromos = produtos.map(
    produto => produto.promocao
)

const my_func = function(acumulador, atual){
    return acumulador || atual
}

//O método reduce serve para acumular dados de um array, podendo ser passado um valor inicial para o acumulador ou não
const novo = produtosPromos.reduce(my_func)

console.log(novo)