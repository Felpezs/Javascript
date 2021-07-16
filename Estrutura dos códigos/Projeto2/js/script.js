function gerarFrase()
{
    const frases = ["Se não houver vento, reme.", "Não limite seus desafios. Desafie seus limites.", "Minha missão na vida não é apenas sobreviver, mas prosperar.", "O que você procura está procurando você.", "Uma meta é um sonho com um prazo.","Sorte é o que acontece quando a preparação encontra a oportunidade."]

    let num = Math.floor(Math.random() * 6)

    document.getElementById('resultado').innerHTML = frases[num]
}