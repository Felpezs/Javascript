//O espaço de memória é constante, e ele mantem os dados do objeto, que são modificáveis

const produto =
{
    nome: "Notebook"
}

//"Congela" o objeto, não permitindo alterações

Object.freeze(produto)

produto.nome = "Celular"

console.log(produto.nome)
