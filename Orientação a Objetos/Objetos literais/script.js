let nome = "Notebook"
let preco = 1200

const produto = 
{
    nome, //nome: nome (Notebook)
    preco, //preco: preco (1200)

    exibirProduto() //exibirProduto : function
    {
        console.log(`${this.nome}, ${this.preco}`)
    }
}

//Criação de atributos e métodos dinamicamente

produto.categoria = "Eletrônicos"
produto.exibirPreco = function()
{
    console.log(`Preço ${this.preco}`)
}
produto.exibirProduto()

produto.exibirPreco()
console.log(`Categoria ${produto.categoria}`)

//Pro e produto apontam para o mesmo endereço de memória
const pro = produto

pro.preco = 3000

pro.exibirPreco()