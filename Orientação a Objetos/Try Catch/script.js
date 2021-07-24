function contarQntdLetras(produto)
{
    //Tente executar a ação
    try
    {
        console.log(produto.nome.length)
    }

    //Capture erros
    catch(erro)
    {
        tratarErro(erro)
    }

    //Execute, independentemente da existência de erros ou não 
    finally
    {
        console.log("Finnaly")
    }
}

function tratarErro(erro)
{
    //Lança um novo erro
    throw new Error("Código de erro 164")
}

const produto =
{
    nome: "Notebook",
    preco: 1200
}

contarQntdLetras(produto)