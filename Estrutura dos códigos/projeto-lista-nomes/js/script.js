let nomes = ['Marcos', 'Paulo', 'Marcela', 'Leticia', 'Felipe', 'Igor', 'Lucas', 'Amanda', 'Maria', 'Felipe']

function carregarNomes()
{
    let itemLista = ''
    for(index in nomes)
    {
        itemLista += `<li class="list-group-item">${nomes[index]}</li>`
    }

    document.getElementById('lista').innerHTML = itemLista
}

function buscarNome()
{  
    let itemLista = ''
    let nomeBuscado = document.getElementById('campoNome').value

    for(index in nomes)
    {
        if(nomes[index] == nomeBuscado)
            itemLista += `<li class="list-group-item">${nomes[index]}</li>`
    }

    document.getElementById('lista').innerHTML = `<li class="list-group-item">${itemLista}</li>`
}