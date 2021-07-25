//Factory é um padrão de design ou de projetos, ou seja, forma comum de resolver problemas

const ProdutoFactory = function()
{
    return{
        nome: "Notebook",
        preco: 1200,
        recuperarAvaliacoes(){
            console.log(`Avaliações para ${this.nome}`)
        }
    }
}

const produto = ProdutoFactory()
produto.recuperarAvaliacoes()
console.log(produto)