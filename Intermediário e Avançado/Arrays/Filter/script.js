const usuarios = [
    {nome: "Felipe", idade : 19},
    {nome: "Marcia", idade : 29},
    {nome: "José", idade : 14},
    {nome: "Pedro", idade : 17},
    {nome: "Carlos", idade : 13},
    {nome: "César", idade : 42}
]

const funcao = function(item, i, arr){
    return item.idade >= this.valor
}

const filtro = {
    valor: 18
}

//Se a condição retornada pela function for true, o item será adicionado no novo array. Se for falso, é descartado e vai para o próximo item
const usuariosMaiorIdade = usuarios.filter(funcao, filtro)

console.log(usuariosMaiorIdade)

/*---------------------------------------------------------------------------------------------------------*/
//Retorna apenas objetos carros com a marca hyundai

const carros = [
    {nome: "Gol", marca: "volkswagen"},
    {nome: "iX35", marca: "hyundai"},
    {nome: "Santa Fé", marca: "hyundai"},
    {nome: "Gol", marca: "volkswagen"},
]

const carrosHyundai = carros.filter(
    item => item.marca == "hyundai"
)
console.log(carrosHyundai)